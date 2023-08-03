import type { ICentralAdminProfile } from "../../shared/types";
import { chain, omit, sumBy } from "lodash";
import type { RouteLocationNamedRaw } from "vue-router";

// GENERAL LOGIC 
interface IAdminLogicConfig {
  adminData?: ICentralAdminProfile
  dashboardRouteName: RouteLocationNamedRaw;
  registerUsahaRouteName: RouteLocationNamedRaw;
  installationRouteName: RouteLocationNamedRaw;
}

export const loginAdminRedirectLogic = (config: IAdminLogicConfig) => {

  const hasPerusahaan = config.adminData?.perusahaan_id != null
  const isInstallationComplete = config.adminData?.step_installasi_perusahaan != null && config.adminData?.step_installasi_perusahaan == 100

  return {
    execute: () => {
      if (hasPerusahaan == false) {
        return config.registerUsahaRouteName;
      }

      if (hasPerusahaan == true && isInstallationComplete == true) {
        return config.dashboardRouteName;
      }

      if (hasPerusahaan == true && isInstallationComplete == false) {
        return config.installationRouteName
      }


    }
  }
}



interface IloginRoleConfig {
  adminData?: ICentralAdminProfile
}
export const ensureAdminRoleHasValidLogic = (config: IloginRoleConfig) => {

  return {
    execute(): boolean {
      if (config.adminData?.role == 'admin-pusat' || config.adminData?.role == 'operator') return true;
      else return false;
    }
  }
}


interface Cart {
  qty: number;
  price: number;
  discount?: Discount;
  tax?: Tax;
}[];

interface CalculateCart extends Cart {
  subTotalAwal: number;
  potonganDiskon: number;
  subTotalTerdiskon: number;
  tambahanPajak: number;
  subTotalTerpajak: number;
}[];

type NominalType = 'Persen' | 'Nominal' | string;
interface Discount {
  ammount: number;
  type: NominalType;
}

interface Tax {
  ammount: number;
  // type: string;
}

interface DownPayment {
  ammount: number;
}



const hitungDiskon = (ammount: number = 0, nominal: number = 0, type: NominalType) => {
  const hasil = {
    total: 0,
    potongan: 0,
  }
  if (type == 'Persen') {
    const perhitungan = dikurangiPersen(ammount, nominal);
    hasil.potongan = perhitungan.potongan;
    hasil.total = perhitungan.total;
  } else if (type == 'Nominal') {
    hasil.potongan = nominal;
    hasil.total = ammount - nominal;
  } else {
    console.warn('tipe diskon tidak dikenali')
    hasil.potongan = 0;
    hasil.total = 0;
  }

  return hasil;
}


const dikurangiPersen = (ammount: number, percent: number) => {
  const potongan = Math.ceil(ammount * (percent / 100))
  const total = ammount - potongan;
  return {
    potongan,
    total,
  }
}

const ditambahPersen = (ammount: number, percent: number) => {
  const tambahan = Math.ceil(ammount * (percent / 100))
  const total = ammount + tambahan;
  return {
    tambahan,
    total,
  }
}


export const calculateCart = () => {
  let currentCart: CalculateCart[];

  // property tambahan 
  let uangMuka: number = 0;
  let persentasePotongan: number = 0;

  // hasil kalkulasi 
  // let totalPenjualan: number = 0;
  // let totalDiskon: number = 0;
  // let totalPenjualanBersih: number = 0;
  // let totalPajak: number = 0;
  // let totalNett: number = 0;
  // let totalBelumDibayar: number = 0;


  const pipe = {
    init: (cart: Cart[]) => {
      currentCart = chain(cart)
        .map((it) => {
          const subTotalAwal = (it.price * it.qty)

          // diskon 
          const perhitunganDiskon = hitungDiskon(subTotalAwal, it.discount?.ammount, it.discount?.type as NominalType);
          const potonganDiskon = perhitunganDiskon.potongan;
          const subTotalTerdiskon = perhitunganDiskon.total;

          // pajak
          const perhitunganPajak = ditambahPersen(subTotalTerdiskon, it.tax?.ammount ?? 0);
          const tambahanPajak = perhitunganPajak.tambahan;
          const subTotalTerpajak = perhitunganPajak.total;

          return {
            ...it,
            subTotalAwal,
            potonganDiskon,
            subTotalTerdiskon,
            tambahanPajak,
            subTotalTerpajak,
          }
        })
        .value();

      return { ...omit(pipe, 'init') }
    },

    setUangMuka: (ammount: number) => {
      uangMuka = ammount;
      return { ...omit(pipe, 'init', 'setUangMuka') };
    },

    setPersentasePotongan: (ammount: number) => {
      persentasePotongan = ammount;
      return { ...omit(pipe, 'init', 'setPersentasePotongan') };
    },

    // mapping: ({
    //   paramTotalPenjualan = 'totalPenjualan',
    //   paramTotalPenjualanBersih = 'totalPenjualanBersih',
    //   paramTotalPajak = 'totalPajak',
    //   paramTotalNett = 'totalNett',
    //   paramCart = { qty: 'qty', price: 'price' }
    // }) => {
    //   const transformed = {};
    //   assign(transformed, {
    //     [paramTotalPenjualan]: totalPenjualan,
    //     [paramTotalPenjualanBersih]: totalPenjualanBersih,
    //     [paramTotalPajak]: totalPajak,
    //     [paramTotalNett]: totalNett,
    //   })

    //   return transformed;
    // },

    values: () => {

      const totalPenjualan = sumBy(currentCart, (it) => it['subTotalAwal'] ?? 0);
      const totalDiskon = sumBy(currentCart, (it) => it['potonganDiskon'] ?? 0);
      const totalPenjualanBersih = totalPenjualan - totalDiskon;
      const totalPajak = sumBy(currentCart, (it) => it['tambahanPajak'] ?? 0);
      const totalNett = dikurangiPersen((totalPenjualanBersih + totalPajak), persentasePotongan).total;
      // const totalBelumDibayar = (totalNett - uangMuka) > 0 ? (totalNett - uangMuka) : 0
      const totalBelumDibayar = totalNett - uangMuka

      return {
        currentCart: currentCart,
        totalDiskon: totalDiskon,
        totalPenjualan: totalPenjualan,
        totalPenjualanBersih: totalPenjualanBersih,
        totalPajak: totalPajak,
        totalNett: totalNett,
        totalBelumDibayar: totalBelumDibayar,
      }
    }
  }

  return pipe;
}

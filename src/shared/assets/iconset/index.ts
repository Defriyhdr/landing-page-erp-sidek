
import BlueSkyHome from './bluesky/home.svg'
import BlueSkyAkuntansi from './bluesky/akuntansi.svg'
import BlueSkyKeuangan from './bluesky/keuangan.svg'
import BlueSkyPembelian from './bluesky/pembelian.svg'
import BlueSkyPenjualan from './bluesky/penjualan.svg'
import BlueSkyPersediaan from './bluesky/persediaan.svg'
import BlueSkyManufaktur from './bluesky/manufaktur.svg'
import BlueSkyKaryawan from './bluesky/karyawan.svg'


import ColoredHome from './colored/home.svg'
import ColoredAkuntansi from './colored/akuntansi.svg'
import ColoredKeuangan from './colored/keuangan.svg'
import ColoredPembelian from './colored/pembelian.svg'
import ColoredPenjualan from './colored/penjualan.svg'
import ColoredPersediaan from './colored/persediaan.svg'
import ColoredManufaktur from './colored/manufaktur.svg'
import ColoredKaryawan from './colored/karyawan.svg'

export type T_ICONSET_VARIANT = 'bluesky' | 'classic' | 'colored'
interface IIconsetResult {
  home?: any;
  akuntansi: any;
  keuangan: any;
  pembelian: any;
  penjualan: any;
  persediaan: any;
  manufaktur: any;
  karyawan: any;
}
export const IconSet = {
  variant: 'bluesky' as T_ICONSET_VARIANT,
  set(variant: T_ICONSET_VARIANT) {
    this.variant = variant;
    return this;
  },

  get(): IIconsetResult {
    if (this.variant == 'colored') {
      return {
        home: ColoredHome,
        akuntansi: ColoredAkuntansi,
        keuangan: ColoredKeuangan,
        pembelian: ColoredPembelian,
        penjualan: ColoredPenjualan,
        persediaan: ColoredPersediaan,
        manufaktur: ColoredManufaktur,
        karyawan: ColoredKaryawan,
      }
    } else {
      return {
        home: BlueSkyHome,
        akuntansi: BlueSkyAkuntansi,
        keuangan: BlueSkyKeuangan,
        pembelian: BlueSkyPembelian,
        penjualan: BlueSkyPenjualan,
        persediaan: BlueSkyPersediaan,
        manufaktur: BlueSkyManufaktur,
        karyawan: BlueSkyKaryawan,
      }
    }

  }
};

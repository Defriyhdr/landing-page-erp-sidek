import type { IJurnal } from "@/shared/types";
import { MODUL } from '@/core/constant';
import type { Router } from "vue-router";


export function useNomorJurnalLink(item: IJurnal, currentRouter: Router) {
  const router = currentRouter;
  switch (item.modul_id) {
    case MODUL.KEUANGAN.ID:
      router.push({ name: 'CENTRAL_PANEL_KEUANGAN_CREATE_JURNAL', query: { kode: item.kode } })
      break;

    case MODUL.PERSEDIAAN.ID:
      router.push({ name: 'CENTRAL_PANEL_PERSEDIAAN_CREATE_JURNAL', query: { kode: item.kode } })
      break;

    case MODUL.PENJUALAN.ID:
      router.push({ name: 'CENTRAL_PANEL_PENJUALAN_CREATE_JURNAL', query: { kode: item.kode } })
      break;

    case MODUL.PEMBELIAN.ID:
      router.push({ name: 'CENTRAL_PANEL_PEMBELIAN_CREATE_JURNAL', query: { kode: item.kode } })
      break;

    default:
      router.push({ name: 'CENTRAL_PANEL_AKUNTANSI_CREATE_JURNAL', query: { kode: item.kode } })
      break;
  }
}


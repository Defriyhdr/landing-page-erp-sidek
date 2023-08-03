 
// AKTIVITAS
export type AKTIVITAS_TYPE = 'Penjualan' | 'Pembelian'
export const AKTIVITAS_LIST: AKTIVITAS_TYPE[] = ['Penjualan', 'Pembelian']


// TIPE DISKON 
export type JENIS_DISKON_TYPE = 'Persen' | 'Nominal'
export const JENIS_DISKON_LIST = ['Persen', 'Nominal'];


// MODUL 
interface IModul {
  [key: string]: {
    ID: number
    SUB: {
      [key: string]: { ID: number, TEXT?: string }
    }
    ALLOW_SETTINGS: boolean
  }
}
export const MODUL: IModul = {
  AKUNTANSI: {
    ALLOW_SETTINGS: false,
    ID: 1,
    SUB: {
      JURNAL: { ID: 3 },
      SALDO_AWAL: { ID: 4 }
    }
  },
  KEUANGAN: {
    ALLOW_SETTINGS: true,
    ID: 2,
    SUB: {
      KAS_MASUK: { ID: 1, TEXT: "Kas Masuk" },
      KAS_KELUAR: { ID: 2, TEXT: "Kas Keluar" }
    }
  },
  PEMBELIAN: {
    ALLOW_SETTINGS: false,
    ID: 3,
    SUB: {
      PEMBELIAN_TUNAI: { ID: 5 },
      PEMBELIAN_KREDIT: { ID: 6 },
      PELUNASAN_PEMBELIAN_KREDIT: { ID: 7 },
    }
  },
  PENJUALAN: {
    ALLOW_SETTINGS: false,
    ID: 4,
    SUB: {
      PENJUALAN_TUNAI: { ID: 8 },
      PENJUALAN_KREDIT: { ID: 9 },
      PELUNASAN_PENJUALAN_KREDIT: { ID: 10 }
    }
  },
  PERSEDIAAN: {
    ALLOW_SETTINGS: true,
    ID: 5,
    SUB: {
      BARANG_MASUK: { ID: 11, TEXT: 'Barang Masuk' },
      BARANG_KELUAR: { ID: 12, TEXT: 'Barang Keluar' },
      // RETUR_PEMBELIAN: { ID: 13 },
      // RETUR_PENJUALAN: { ID: 14 }
    }
  },
  KARYAWAN: {
    ALLOW_SETTINGS: false,
    ID: 6,
    SUB: {}
  },
  MANUFAKTUR: {
    ALLOW_SETTINGS: false,
    ID: 7,
    SUB: {}
  }
}



export const SALDO_NORMAL_AKUN = ['Debit', 'Kredit', 'Debit/Kredit']
export const SUB_UNSUR_LAPORAN_KEUANGAN = [
  {
    "id": 1,
    "nama": "Aset Lancar"
  },
  {
    "id": 2,
    "nama": "Aset Tidak Lancar"
  },
  {
    "id": 3,
    "nama": "Liabilitas Lancar"
  },
  {
    "id": 3,
    "nama": "Liabilitas Tidak Lancar"
  },
  {
    "id": 4,
    "nama": "Ekuitas Pemilik"
  },
  {
    "id": 5,
    "nama": "Ekuitas Lainnya"
  },
  {
    "id": 6,
    "nama": "Penghasilan Operasional"
  },
  {
    "id": 7,
    "nama": "Penghasilan Non Operasional"
  },
  {
    "id": 8,
    "nama": "Beban Pokok Penjualan"
  },
  {
    "id": 9,
    "nama": "Beban Operasional"
  },
  {
    "id": 10,
    "nama": "Beban Non Operasional"
  }
]

export const TIPE_SUB_AKUN = [
  "Kas",
  "Piutang",
  "Utang",
  "Persediaan",
  "Produksi",
  "Depresiasi",
  "Ekuitas",
  "Pengembalian Pemilik"
]


export const BENTUK_USAHA = [
  'BUMDES',
  'Commanditaire Vennootschap (CV)',
  'Koperasi',
  'Perseorangan', 
  'Perseroan Terbatas (PT)',
]

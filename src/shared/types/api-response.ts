import type { IFolderView } from '.'

export interface IHttpData<T, M = {}> {
  success?: boolean
  status_code?: number
  message?: any
  data?: T
  meta?: M
  log_id?: string
  errors?: any
}

export interface ICursor<T> {
  cursor: null | string;
  data: T;
}


export interface ILoginPayload {
  email_or_phone: string
  password: string
}

export interface ISuperAdminProfile {
  name?: any
  email?: any
  token?: any
  role?: T_ROLE
  id?: string
  phone?: string
}

export interface IJenisUsaha {
  id?: string
  jenis_usaha?: string
  is_active?: boolean
  is_lain_lain?: any;
  kategori?: string
  tipe?: string
  created_by?: string
  created_at?: Date
  modul_aktif_id?: string | string[]
  // keperluan ui
  sublist?: Array<IFolderView>
  color?: string
  icon?: any
}

export type TJENIS_ENTITAS = 'bisnis' | 'sosial'
export type TKATEGORI_JENIS_ENTITAS = 'jasa' | 'dagang' | 'manufaktur' | 'default'

export interface ISatuan {
  id?: string
  satuan?: string
  perusahaan_id?: null
  jenis_usaha_id?: string
  is_active?: number
  created_by?: string
  created_at?: Date
}

export interface IProduk {
  kategori_barang?: IKategoriBarang;
  satuan?: ISatuan;
  id?: string;
  perusahaan_id?: string;
  kategori_barang_id?: string;
  satuan_id?: string;
  nama_produk?: string;
  kode_produk?: string;
  tipe_produk?: string;
  gambar?: string;
  bisa_dijual?: boolean;
  bisa_dibeli?: boolean;
  harga_beli?: number;
  harga_jual?: number;
  metode_stok?: string;
  is_active?: boolean;
  kuantitas?: number;
  jumlah_beli?: number;
  jumlah_jual?: number;
}

export interface IBukuPembantuProdukResponse {
  id:                 string;
  perusahaan_id:      string;
  kode:               string;
  coa_id:             string;
  kategori_barang_id: string;
  satuan_id:          string;
  produk_id:          string;
  is_saldo_awal:      number;
  is_posting:         number;
  nama_produk:        string;
  kode_produk:        string;
  tipe_produk:        string;
  metode_stok:        string;
  kuantitas:          number;
  harga:              number;
  jumlah:             number;
  bisa_dijual:        number;
  bisa_dibeli:        number;
  urutan:             number;
  created_by:         string;
  created_at:         Date;
  kategori_barang:    IKategoriBarang;
  satuan:             ISatuan;
}


export interface IDiskon {
  id?: string
  nama_diskon?: string
  jenis_diskon?: string
  diskon?: number
  jenis_usaha_id?: string
  akun_id?: string
  aktivitas?: string
  perusahaan_id?: null
  is_active?: number
  created_by?: string
  created_at?: Date
  kode_akun?: string
  nama_akun?: string
}

export interface IKategoriBarang {
  id?: string
  kategori_barang?: string
  jenis_usaha_id?: string
  perusahaan_id?: null
  tipe_produk?: string;
  is_active?: number
  created_by?: string
  created_at?: Date
}

export interface IPajak {
  id?: string
  nama_pajak?: string
  besaran?: number
  jenis_usaha_id?: string
  akun_id?: string
  aktivitas?: string
  is_active?: number
  created_by?: string
  created_at?: Date
  perusahaan_id?: null
  kode_akun?: string
  nama_akun?: string
}

export type TSALDO_NOMRAL = 'Debit' | 'Kredit' | 'Debit/Kredit'
export interface Icoa {
  id?: string
  jenis_usaha_id?: string
  perusahaan_id?: null
  coa_default_id?: null
  kode_akun?: string
  utang_piutang_saldo_awal_count? : number  // khusus saldo awal coa
  produk_saldo_awal_count? : number  // khusus saldo awal coa
  nama_akun?: string
  saldo_normal?: TSALDO_NOMRAL
  sub_unsur_laporan_keuangan?: null
  tipe_akun?: string
  is_active?: boolean
  parent_id?: null
  created_by?: string
  created_at?: Date
  layer_ke?: number
  children?: Icoa[],
  is_have_child: number;
  nominal_debit?: any;
  nominal_kredit?: any;
}

export interface IProvinsi {
  id?: number
  nama?: string
}

export interface IKabupaten {
  id?: number
  nama?: string
  provinsi_id?: number
}

export interface IKecamatan {
  id?: number
  nama?: string
  kabupaten_id?: number
}

export interface IKelurahan {
  id?: number
  nama?: string
  kecamatan_id?: number
}

export interface IProfilePerusahaan {
  id?: string;
  nama?: string;
  jenis_usaha_id?: string;
  parent_id?: string;
  deskripsi?: null;
  alamat?: string;
  telepon?: string;
  email?: string;
  kategori?: string;
  is_active?: number;
  created_by?: string;
  created_at?: Date;
  modul_aktif_id?: string;
  jumlah_karyawan?: number;
  omset?: number;
  skala?: string;
  mode?: number;
  periode_akuntansi?: string;
  instalasi?: number;
  provinsi_id?: number;
  kabupaten_id?: number;
  kecamatan_id?: number;
  kelurahan_id?: null;
  nama_pemilik?: string;
  facebook?: null;
  instagram?: null;
  tiktok?: null;
  sosmed_lain?: null;
  detil_jenis_usaha?: string;
}
export type T_ROLE = 'admin-pusat' | 'super-admin' | 'operator'
export interface ICentralAdminProfile {
  name?: any
  email?: any
  token?: any
  role?: T_ROLE
  id?: string
  phone?: string
  perusahaan_id?: any

  step_installasi_perusahaan?: any
}

export interface IBukuBesar {
  [key: string]: {
    value?: Array<{
      id?: string
      kategori_jurnal?: string
      perusahaan_id?: string
      kode?: string
      nomor_jurnal?: string
      coa_id?: string
      is_debit?: number
      nominal_debit?: number
      nominal_kredit?: number
      keterangan?: string
      is_active?: number
      tanggal?: Date
      is_posting?: number
      is_saldo_awal?: number
      operasi?: null
      created_by?: string
      created_at?: Date
      modul_id?: number
      sub_modul_id?: null
      referensi_jurnal?: null
      posting_at?: Date
      saldo?: number
      coa?: {
        id?: string
        kode_akun?: string
        nama_akun?: string
        saldo_normal?: string
      }
    }>
    saldo_awal?: number
    saldo_akhir?: number
    aktifitas_bersih?: string
  }
}


export interface INomorJurnal {
  nomor_jurnal?: string;
  is_editable?: boolean;
}


export interface ILabaRugi {
  [key: string]: {
    total_saldo_int: number
    total_saldo: string
    children?: Array<{
      kode_akun?: string
      nama_akun?: string
      saldo_normal: string
      layer_ke: string
      nominal: string
      nominal_int: number
      children?: Array<any>
    }>
  }
}

// INTERFACE FOR COA NERACA
interface ICOANeracaItem {
  id?: string
  kode_akun?: string
  nama_akun?: string
  saldo_normal: string
  layer_ke: string
  is_have_child?: number;
  nominal: string
  children?: Array<ICOANeracaItem>
  total_saldo?: string
}
export interface ICOANeraca {
  [key: string]: {
    total_saldo?: string
    children?: Array<ICOANeracaItem>
  }
}
export interface INeraca {
  Aset?: {
    children?: ICOANeraca;
    total_aset?: string;
    total_aset_int?: number;
  };
  Liabilitas?: {
    children?: ICOANeraca;
    total_liabilitas?: string;
    total_liabilitas_int: number;
  };
  Ekuitas?: {
    children?: ICOANeraca;
    total_ekuitas?: string;
    total_ekuitas_int: number;
  };
  total_liabilitas_dan_ekuitas: string;
}

export interface IJurnalPerusahaan {
  jenis_usaha_id?: string;
  nama?: string | null;
  modul_id?: number;
  sub_modul_id?: number;
  aktivitas?: string | null;
  coa_debit_id?: string | null;
  coa_kredit_id?: string | null;
  is_active?: number;
  id?: string;

  nama_akun_debit?: string;
  kode_akun_debit?: string;
  nama_akun_kredit?: string;
  kode_akun_kredit?: string;
}



export interface IKas {
  id?: string;
  nama?: string;
  coa_id?: string;
  coa?: Icoa;
}


export interface IAktivitas {
  id?: string;
  jenis_usaha_id?: string;
  perusahaan_id?: string;
  nama?: string;
  modul_id?: number;
  sub_modul_id?: number;
  aktivitas?: string;
  coa_debit_id?: string;
  coa_kredit_id?: string;
  coa_debit_default_id?: string;
  coa_kredit_default_id?: string;
  is_active?: number;
  created_by?: string;
  created_at?: Date;
  nama_akun_debit?: string;
  kode_akun_debit?: string;
  nama_akun_kredit?: string;
  kode_akun_kredit?: string;
}

export interface IStokProdukDetail {
  id: string;
  kode_stok: string;
  produk_id: string;
  kuantitas: number;
  harga: number | IHargaBarangKeluar[];
  sub_total: number;
  produk: IProduk;
}

export interface IJurnalUmum {
  id: string;
  nomor_jurnal: string;
  coa_id: string;
  is_debit: number;
  nominal_debit: number;
  nominal_kredit: number;
  coa: Icoa;
}



export interface IJurnalPersediaan {
  kode_stok: string;
  id: string;
  nomor_jurnal: string;
  tanggal: string;
  created_by: string;
  jenis_mutasi: string;
  aktivitas?: string;
  nominal: string;
  keterangan?: string;
  stok_produk_details?: IStokProdukDetail[];
  jurnal_umums?: IJurnalUmum[];
  created_at: string;
}


export interface IRincianHarga {
  harga: number;
  kuantitas: string;
  total: number
}

export interface IHargaBarangKeluar {
  sub_total: number,
  rincian_harga: IRincianHarga[]
}



export type IPelangganPayload = { [K in keyof Pick<IPelanggan, 'nama' | 'email' | 'telpon' | 'npwp' | 'foto' | 'kode' | 'tipe' | 'alamat' | 'id' | 'is_active'>]: any }
export interface IPelanggan {
  id: string;
  perusahaan_id: string;
  kategori: string;
  kode: string;
  nama: string;
  email: string;
  telpon: string;
  npwp: string;
  alamat: string;
  foto: string | undefined;
  tipe: string;
  is_active: number;
  created_by: string;
  created_at: string;
}



export interface IJurnalUmumPenjualan {
  coa_id: string;
  is_debit: number;
  kode_akun: string;
  nama_akun: string;
  nominal_debit: number;
  nominal_kredit: number;
  urutan: number;
}

export interface IJurnalPenjualan {
  kode_transaksi_induk?: string;
  is_posting: number;
  is_lunas: number;
  posting_at: string | null | undefined;
  kode_transaksi: string;
  pelanggan_pemasok_id: string;
  tanggal_batas_potongan?: string;
  persentase_potongan?: number;
  id: string;
  nomor_jurnal: string;
  tanggal: string;
  created_by: string;
  jenis_mutasi: string;
  aktivitas?: string;
  nominal: string;
  keterangan?: string;
  stok_produk_details?: IStokProdukDetail[];
  jurnal_umums?: IJurnalUmum[];
  created_at: string;
  nama_pembuat: string;
  jenis_transaksi?: string;
  nama_pelanggan_pemasok: string;

  nominal_akhir: number;
  nominal_belum_diterima?: number;
  pajak?: number;
  diskon?: number;
  uang_muka?: number;

  kas_id?: string;
  penjualan_detail?: {
    diskon?: IDiskon;
    pajak?: IPajak;
    produk?: IProduk;
    kategori_barang?: IKategoriBarang;

    diskon_id: string;
    pajak_id: string;
    harga: number;
    kategori_barang_id: string;
    kuantitas: number;
    produk_id: string;
    sub_total: number;
  }[]

  detail_jurnal?: IJurnalUmumPenjualan[];

}



export interface IUtangPiutang {
  total_piutang: string;
  total_utang?: string;
  data: {
    pelanggan_pemasok_id: string;
    nama_pelanggan_pemasok: string;
    sub_total: string;
    rincian: JurnalRincian[];
  }[];
}

export interface IUtangPiutangObjectData {
  total_piutang: string;
  data: {
    pelanggan_pemasok_id: string;
    nama_pelanggan_pemasok: string;
    sub_total: string;
    rincian: JurnalRincian[];
  };
}

export interface JurnalRincian {
  kode_transaksi: string;
  tanggal: string;
  nomor_jurnal: string;
  nomor_jurnal_referensi: any;
  debit: string;
  kredit: string;
  saldo: string;
}


export interface IArusKasItem {
  nama_akun: string
  nominal: string
  children: IArusKasItem[]
}

export interface IArusKas {
  [key: string]: IArusKasItem[] | IArusKasItem,
}

/**
 * "Arus Kas Operasi": IArusKasItem[],
  "Arus Kas Investasi": IArusKasItem[],
  "Arus Kas Pendanaan": IArusKasItem[],
  "Kenaikan\/Penurunan Kas Bersih": IArusKasItem,
  "Saldo Kas Awal": IArusKasItem,
  "Saldo Akhir": IArusKasItem,
 */

type BucketCategory = 'foto-profil-pelanggan-pemasok' | 'foto-profil-user' | 'foto-profil-perusahaan' 
export interface IBucketPayaload {
  kategori: BucketCategory,
  file_upload: any;
}

export interface IBucketResponse {
  domain_url: string;
  original_path: string;
}




export interface IJurnalPembelian {
  tanggal_pencatatan: string;
  kode_transaksi_induk?: string;
  is_posting: number;
  is_lunas: number;
  posting_at: string | null | undefined;
  kode_transaksi: string;
  pemasok_id: string;
  tanggal_batas_potongan?: string;
  persentase_potongan?: number;
  id: string;
  nomor_jurnal: string;
  tanggal: string;
  created_by: string;
  jenis_mutasi: string;
  aktivitas?: string;
  nominal: string;
  keterangan?: string;
  stok_produk_details?: IStokProdukDetail[];
  jurnal_umums?: IJurnalUmum[];
  created_at: string;
  nama_pembuat: string;
  jenis_transaksi?: string;
  nama_pelanggan_pemasok: string;

  nominal_akhir: number;
  nominal_belum_diterima?: number;
  pajak?: number;
  diskon?: number;
  uang_muka?: number;

  kas_id?: string;
  pembelian_detail?: {
    diskon?: IDiskon;
    pajak?: IPajak;
    produk?: IProduk;
    kategori_barang?: IKategoriBarang;

    diskon_id: string;
    pajak_id: string;
    harga: number;
    kategori_barang_id: string;
    kuantitas: number;
    produk_id: string;
    sub_total: number;
  }[]

  detail_jurnal?: IJurnalUmumPenjualan[];

}

type metaDateType = 'start_date' | 'end_date'

export interface IFilterMeta {
  search_field: {
    filter_tanggal?: metaDateType[],
    filter_dropdown?: {
      [key: string]: any[]
    },
    search?: string[]
  }
}


export interface IFilter {
  filter_tanggal?: FilterTanggal;
  filter_dropdown?: FilterDropdown;
  search?: Search;
}

export interface FilterDropdown {
  [key: string]: any;
}

export interface FilterTanggal {
  start_date?: string;
  end_date: string;
}

export interface Search {
  [key: string]: string
}


export interface BukuPembantu {
  created_at: string;
  kategori: string;
  total_debit: any;
  total_kredit: any;
  detail: {
    tanggal?: string;
    nomor_jurnal_referensi?: string;
    keterangan?: string;
    pelanggan_pemasok_id: string;
    nominal_kredit: any;
    nominal_debit: any;
  }[]
}


export interface DataPengguna {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  status_at: Date;
  email_verified_at: Date;
  created_by: null;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  perusahaan_id: null;
  jumlah_perusahaan: string;
}


export interface UpdateProfilePayload {
  name:        string;
  email:       string;
  phone:       string;
  foto:        string;
  alamat:      string;
  facebook:    string;
  instagram:   string;
  tiktok:      string;
  sosmed_lain: string;
}

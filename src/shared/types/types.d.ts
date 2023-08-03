export interface IFolderViewItems {
  disabled?: boolean
  icon?: string
  title: string
  to?: any
}

interface ISubmenu {
  text: string
  to: { name: string; params?: {} }
}

export interface ISiderbarMenu {
  header?: string
  title?: string
  icon?: any
  to?: { name: string }
  divider?: boolean
  chip?: string
  chipColor?: string
  chipVariant?: string
  chipIcon?: string
  children?: ISiderbarMenu[]
  disabled?: boolean
  type?: string
  subCaption?: string
  submenu?: { [key: string]: ISubmenu[] }
  id?: string
}

export interface IFolderView {
  title?: string
  icon?: string
  disabled?: boolean
  to?: any
}

export interface IJurnal {
  id: string;
  sub_modul_id?: any;
  modul_perusahaan_id?: string;
  jenis_jurnal?: any;
  status?: any;
  kategori?: any;
  aktivitas?: any;

  keterangan?: any;
  nomor_jurnal?: any
  kode?: string
  tanggal?: any
  nominal?: number
  is_saldo_awal?: any
  is_posting?: number
  is_lunas?: number
  modul_id?: number
  jenis_transaksi? : any 
  kode_transaksi? : any
  posting_at?: any
  is_active?: number
  created_at?: Date
  created_by?: string
  nama_pembuat?: string
  modul_id?: number
  nama_modul?: string
  referensi_jurnal?: any
  detail_jurnal?: IDetailJurnal[]
}

export interface IDetailJurnal {
  // special case buat pengecekan kondisi
  coa?: {
    id?: string;
    tipe_akun?: "Kas" | "Piutang" | "Utang" | "Barang" | "Produksi" | "Depresiasi" | "Ekuitas" | "Pengembalian"
  };
  
  coa_id?: string
  kode_akun?: string
  nama_akun?: string
  nominal_debit?: number
  nominal_kredit?: number
  is_debit?: number
  operasi?: null
}

export type T_FORM_DIALOG_ACTION = 'edit' | 'create'

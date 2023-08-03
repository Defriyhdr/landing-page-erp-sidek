---
outline: deep
---

# Intro

Frontend ERP terdiri dari 3 aplikasi utama yaitu : 
| Aplikasi | Deskripsi |
| ----------- | ----------- |
| super admin  | berfungsi untuk memanaje semua fitur fitur dalam aplikasi  |
| central admin | central admin merupakan pengguna / end user dari aplikasi ini, dalam aplikasi central admin tersusun atas 6 modul utama yaitu *akuntansi*, *keuangan*, *pembelian*, *penjualan*, *persediaan* (*inventory*), *manufaktur*, dan *karyawan* |
| landing page | halaman utama yang tampil ketika mengunjugi ERP 


## Rekomendasi setup dev
::: info
- **VSCode** (*dark mode* :))
- **Vue Dev Tools** Browser Extension 
  ada extensi yang wajib diaktifkan yaitu :
  - Pinia
  - Route 
- **Google Chrome** terbaru
- ** pnpm **

*note : bisa pake setingan .vscode*
:::

## how to setup 
1. clone repo 
```pnpm{4}
git clone https://gitlab.com/gaskeun-teknologi-alfa-gta/sidek-erp/frontend-client.git
```

2. install all dependencies 
```pnpm{4}
pnpm i
```
3. serve app 
```pnpm{4}
pnpm i
```
4. build app 
```pnpm{4}
pnpm run build
```


## Fronted Architecture 
![keterkaitan dependensi](/assets/dependency-graph.svg)


# graph

- grafik bulat: peminjam berdasarkan jurusan

- atas : peminjaman tiap bulan

- atas : Jumlah tiap bulan

```json
pengunjungBulanan
{
  bulan: number,
  banyak: string
}
```

```json
peminjam_jurusan{
  jurusan: string,
  jumlah_peminjam: int
}
```

```json
peminjaman_setiap_bulan{
  bulan: string,
  coalesce: int
}
```

```json
tabel_peminjaman{
  denda: int,
  id_anggota: int,
  id_buku: int,
  id_peminjaman: int,
  id_petugas: int,
  tanggal_kembali: timestamp,
  tanggal_pengembalian: timestamp,
  tanggal_pinjam: timestamp
}
```

- that.optionsVisitor.xaxis.categories = pengunjung_bulanan.bulan

- that.seriesVisitor[0].data = pengunjung_bulanan.banyak

- that.optionsDonut.labels

- that.seriesDonut

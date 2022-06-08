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

````json
peminjam_jurusan{
  jurusan: string,
  jumlah_peminjam: int
}

```json
peminjaman_setiap_bulan{
  bulan: string,
  coalesce: int
}
````

that.optionsVisitor.xaxis.categories = pengunjung_bulanan.bulan
that.seriesVisitor[0].data = pengunjung_bulanan.banyak

that.optionsDonut.labels
that.seriesDonut

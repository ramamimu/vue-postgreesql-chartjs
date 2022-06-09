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

```sql
INSERT INTO peminjaman (tanggal_pinjam, tanggal_pengembalian, id_petugas, id_anggota, id_buku)
VALUES
	('2022-01-03','2022-01-15',3,1,1),
```

```sql
UPDATE table_name
SET tanggal_kembali = value1,
    denda = value2,
    ...
WHERE condition;
```

- that.optionsVisitor.xaxis.categories = pengunjung_bulanan.bulan

- that.seriesVisitor[0].data = pengunjung_bulanan.banyak

- that.optionsDonut.labels

- that.seriesDonut

optionPeminjam={
xaxis:{
categories:
}
}

# Lab6Web — Praktikum JavaScript DOM dan Event Handling

## Tujuan
Mempelajari manipulasi DOM, event handling, perubahan class CSS, penghitung karakter, validasi form, dan pembuatan To-do List.

## Struktur folder
```text
lab6_dom_event/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Cara menjalankan
1. Buka folder `lab6_dom_event` di Visual Studio Code.
2. Pastikan `index.html`, `style.css`, dan `script.js` berada dalam folder yang sama.
3. Buka `index.html` menggunakan browser (atau ekstensi Live Server).
4. Buka Developer Tools dengan menekan `F12` jika ingin memeriksa Console.
5. Coba setiap tombol, input, dan form pada halaman.

## Isi latihan
1. Mengubah teks menggunakan `getElementById()` dan `textContent`.
2. Menangani event `click` dan menampilkan waktu.
3. Mengubah tampilan menggunakan `classList.toggle()`.
4. Menghitung karakter melalui event `input`.
5. Memvalidasi nama, email, dan usia.
6. Menambah, menandai selesai, dan menghapus tugas pada To-do List.
7. Mini project form pendaftaran workshop dengan validasi nama minimal 3 karakter, email, pilihan sesi, penghitung karakter, serta pesan berhasil/gagal.
8. Eksperimen menampilkan dan menyembunyikan paragraf menggunakan class CSS.

## Eksperimen Mandiri
1. Tombol **Hapus** pada setiap tugas menghapus satu item dengan `item.remove()`.
2. Nama pada mini project harus memiliki minimal 3 karakter.
3. Event `change` pada pilihan sesi menampilkan sesi yang dipilih.
4. Tombol eksperimen mengubah class `sembunyi` untuk menyembunyikan/menampilkan paragraf.
5. Atribut `defer` sudah dipasang pada script di bagian `<head>`. Jika `defer` dihapus tetapi script tetap berada di `<head>`, JavaScript dapat berjalan sebelum elemen body selesai diparsing sehingga pencarian elemen bisa menghasilkan `null`. Dengan `defer`, script dijalankan setelah HTML selesai diparsing.

## Pengujian validasi form
Coba kondisi berikut:
- Semua input kosong.
- Nama kosong.
- Nama kurang dari 3 karakter.
- Email tanpa format yang benar.
- Usia kurang dari 17.
- Usia lebih dari 100.
- Semua input valid.

## Catatan
Mini project ini merupakan simulasi front-end. Data pendaftaran belum dikirim ke server atau disimpan ke database.

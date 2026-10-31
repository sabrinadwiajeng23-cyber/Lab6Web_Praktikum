// LATIHAN 1 — Mengubah teks dengan DOM
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

document.getElementById("tombolAksi").addEventListener("click", function () {
  pesan.textContent = "Tombol berhasil diklik!";
});

// LATIHAN 2 — Event click dan waktu tindakan
const tombolKlik = document.getElementById("tombolKlik");
const pesanKlik = document.getElementById("pesanKlik");

tombolKlik.addEventListener("click", function () {
  pesanKlik.textContent =
    "Tombol diklik pada " + new Date().toLocaleTimeString("id-ID");
});

// LATIHAN 3 — Mengubah kelas dan gaya CSS
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

// LATIHAN 4 — Event input dan penghitung karakter
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

// LATIHAN 5 — Validasi form pendaftaran
const formPendaftaran = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

formPendaftaran.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaInput = document.getElementById("usia").value;
  const usia = Number(usiaInput);
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  pesanForm.className = "feedback";

  if (nama === "") {
    tampilkanPesan(pesanForm, "Nama wajib diisi.", "error");
  } else if (nama.length < 3) {
    tampilkanPesan(pesanForm, "Nama minimal terdiri dari 3 karakter.", "error");
  } else if (email === "" || !polaEmail.test(email)) {
    tampilkanPesan(pesanForm, "Masukkan email yang valid.", "error");
  } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
    tampilkanPesan(pesanForm, "Usia harus berupa bilangan bulat 17–100.", "error");
  } else {
    tampilkanPesan(pesanForm, "Validasi berhasil. Form siap diproses.", "success");
    formPendaftaran.reset();
  }
});

formPendaftaran.addEventListener("reset", function () {
  pesanForm.textContent = "";
  pesanForm.className = "feedback";
});

// LATIHAN 6 — To-do List
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();

  if (teks === "") {
    tampilkanPesan(pesanTugas, "Tulis tugas terlebih dahulu.", "error");
    inputTugas.focus();
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("span");
  const tombolSelesai = document.createElement("button");
  const tombolHapus = document.createElement("button");
  const aksi = document.createElement("div");

  label.textContent = teks;
  tombolSelesai.type = "button";
  tombolSelesai.textContent = "Tandai selesai";
  tombolHapus.type = "button";
  tombolHapus.textContent = "Hapus";
  tombolHapus.className = "delete-task";
  aksi.className = "task-actions";

  tombolSelesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    tombolSelesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai"
      : "Tandai selesai";
  });

  // Eksperimen Mandiri 1 — Menghapus satu item To-do List
  tombolHapus.addEventListener("click", function () {
    item.remove();
  });

  aksi.append(tombolSelesai, tombolHapus);
  item.append(label, aksi);
  daftarTugas.appendChild(item);

  tampilkanPesan(pesanTugas, "Tugas berhasil ditambahkan.", "success");
  inputTugas.value = "";
  inputTugas.focus();
});

// MINI PROJECT — Form Pendaftaran Workshop
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const hitungNama = document.getElementById("hitungNama");
const infoSesi = document.getElementById("infoSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");

namaWorkshop.addEventListener("input", function () {
  hitungNama.textContent = namaWorkshop.value.length;
});

// Eksperimen Mandiri 3 — Event change pada pilihan sesi
sesiWorkshop.addEventListener("change", function () {
  infoSesi.textContent = sesiWorkshop.value
    ? "Sesi yang dipilih: " + sesiWorkshop.value
    : "Sesi yang dipilih: belum dipilih.";
});

formWorkshop.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = namaWorkshop.value.trim();
  const email = emailWorkshop.value.trim();
  const sesi = sesiWorkshop.value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nama.length < 3) {
    tampilkanPesan(pesanWorkshop, "Nama wajib diisi dan minimal 3 karakter.", "error");
  } else if (!polaEmail.test(email)) {
    tampilkanPesan(pesanWorkshop, "Email tidak valid. Periksa kembali email Anda.", "error");
  } else if (sesi === "") {
    tampilkanPesan(pesanWorkshop, "Silakan pilih sesi workshop.", "error");
  } else {
    tampilkanPesan(
      pesanWorkshop,
      "Pendaftaran berhasil! Terima kasih, " + nama + ". Pilihan: " + sesi + ".",
      "success"
    );
  }
});

formWorkshop.addEventListener("reset", function () {
  pesanWorkshop.textContent = "";
  pesanWorkshop.className = "feedback";
  hitungNama.textContent = "0";
  infoSesi.textContent = "Sesi yang dipilih: belum dipilih.";
});

// Eksperimen Mandiri 4 — Menyembunyikan/menampilkan paragraf dengan class CSS
const toggleParagraf = document.getElementById("toggleParagraf");
const paragrafEksperimen = document.getElementById("paragrafEksperimen");

toggleParagraf.addEventListener("click", function () {
  paragrafEksperimen.classList.toggle("sembunyi");
  toggleParagraf.textContent = paragrafEksperimen.classList.contains("sembunyi")
    ? "Tampilkan paragraf"
    : "Sembunyikan paragraf";
});

// Fungsi bantuan untuk menampilkan pesan dan kelas status
function tampilkanPesan(elemen, teks, jenis) {
  elemen.textContent = teks;
  elemen.className = "feedback " + jenis;
}

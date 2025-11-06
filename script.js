// Ambil elemen yang dibutuhkan
const output = document.getElementById('output');

// Fungsi untuk tombol Analisis
document.getElementById('btnAnalisis').addEventListener('click', () => {
  output.innerHTML = '<b>Analisis:</b> Masalah yang ingin diselesaikan adalah membuat website sederhana tentang tokoh terkenal Cristiano Ronaldo, agar pengguna dapat mengenalinya secara singkat dalam satu layar.';
});

// Fungsi untuk tombol Perencanaan
document.getElementById('btnPerencanaan').addEventListener('click', () => {
  output.innerHTML = '<b>Perencanaan:</b> Website ini dirancang oleh programmer menggunakan HTML, TailwindCSS, dan diunggah ke GitHub agar bisa diakses secara online.';
});

// Fungsi untuk tombol Desain
document.getElementById('btnDesain').addEventListener('click', () => {
  output.innerHTML = '<b>Desain:</b> Desain web mencakup input (tombol-tombol interaktif), output (teks yang muncul di layar), proses (JavaScript menampilkan data), dan keamanan sederhana agar tidak ada navigasi keluar.';
});

// Fungsi untuk tombol Pengembangan
document.getElementById('btnPengembangan').addEventListener('click', () => {
  output.innerHTML = '<b>Pengembangan:</b> Pada tahap ini dibuat struktur sederhana satu halaman, lalu setiap tombol diberikan fungsi berbeda. Misalnya tombol WhatsApp membuka chat, sedangkan tombol lainnya menampilkan analisis, perencanaan, dan desain langsung di layar.';
});

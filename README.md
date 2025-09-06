<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Undangan Pernikahan – Gilang & Oci</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<audio id="bg-music" loop>
  <source src="musik.mp3" type="audio/mpeg">
</audio>
<button class="music-control" id="musicBtn">🔊</button>

<!-- Welcome screen -->
<div class="welcome-screen" id="welcome">
  <h1 class="welcome-title">Undangan Pernikahan<br>Gilang & Oci</h1>
  <button class="welcome-btn" id="openBtn">Buka Undangan</button>
</div>

<!-- Transition clouds -->
<div class="transition-clouds" id="clouds">
  <div class="cloud c1"></div>
  <div class="cloud c2"></div>
  <div class="cloud c3"></div>
  <div class="cloud c4"></div>
</div>

<!-- Butterflies container -->
<div class="butterflies" id="butterflies"></div>
<!-- Stars -->
<div class="stars" id="stars"></div>

<div class="container" id="page" style="display:none;">
  <span class="corner"></span>
  <header class="hero">
    <span class="tag">Undangan Pernikahan</span>
    <h1 class="names">Gilang <span class="amp">&amp;</span> Oci</h1>
    <div class="date">Minggu, 26 Oktober 2025 • 09.00 WIB</div>
    <div class="divider"></div>

    <!-- ✅ Countdown baru -->
    <div class="countdown" id="countdown">
      <div class="countdown-item glow">
        <div class="countdown-number" id="days">00</div>
        <div class="countdown-label">Hari</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number" id="hours">00</div>
        <div class="countdown-label">Jam</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number" id="minutes">00</div>
        <div class="countdown-label">Menit</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number" id="seconds">00</div>
        <div class="countdown-label">Detik</div>
      </div>
    </div>
    <!-- ✅ Akhir countdown -->
  </header>

  <section class="card-elegant">
  <h3 class="card-title">AKAD NIKAH</h3>
  <div class="event-date">
    <span class="day">Minggu</span>
    <span class="date">26</span>
    <span class="month">Oktober 2025</span>
  </div>
  <div class="event-time">09.00 WIB – Selesai</div>
  <p class="event-location">
    Kediaman Mempelai
  </p>
  <div class="btns">
    <a class="btn-outline" href="https://calendar.google.com/calendar/r/eventedit?text=Akad+Gilang+%26+Oci&dates=20251026T020000Z/20251026T040000Z&details=Akad+nikah&location=Kediaman+Mempelai" target="_blank">Simpan ke Kalender</a>
  </div>
</section>

  <section class="card-elegant">
  <h3 class="card-title">RESEPSI</h3>
  <div class="event-date">
    <span class="day">Minggu</span>
    <span class="date">26</span>
    <span class="month">Oktober 2025</span>
  </div>
  <div class="event-time">09.00 WIB – Selesai</div>
  <p class="event-location">
    Kp. Pusar RT 006/01 Binong, Kec. Curug, Kab. Tangerang – Banten
  </p>
  <div class="btns">
    <a class="btn-outline" href="https://www.google.com/maps/search/?api=1&query=Kp.+Pusar+RT+006%2F01+Binong+Curug+Tangerang+Banten" target="_blank">Lihat Lokasi</a>
  </div>
</section>

    <section class="card-elegant">
  <h3 class="card-title">MEMPELAI</h3>
  <div class="mempelai-wrapper">
    <div class="mempelai">
      <p class="mempelai-nama"><strong>Gilang Darmawan Gilang</strong></p>
      <p class="mempelai-ortu">Putra pertama dari<br>Bpk. Wani Setiawan &amp; Ibu Sunyah</p>
    </div>
    <div class="and">&amp;</div>
    <div class="mempelai">
      <p class="mempelai-nama"><strong>Siti Rosidah (Oci)</strong></p>
      <p class="mempelai-ortu">Putri ke-2 dari<br>Bpk. Mahmud &amp; Ibu Minah</p>
    </div>
  </div>
</section>

    <!-- Galeri Prewedding -->
    <section class="card gallery">
      <h3>Galeri Prewedding</h3>
      <div class="gallery-grid">
        <img src="foto1.jpg" alt="Foto 1">
        <img src="foto2.jpg" alt="Foto 2">
        <img src="foto3.jpg" alt="Foto 3">
        <img src="foto4.jpg" alt="Foto 4">
        <img src="foto5.jpg" alt="Foto 5">
      </div>
    </section>

    <section class="card" id="ucapan" style="grid-column:1/-1">
      <h3>Ucapan & Doa</h3>
      <p class="muted">Atas kehadiran dan doa restunya Bapak/Ibu/Saudara/i, kami ucapkan terima kasih.</p>
      <p class="muted">Wassalamu’alaikum Wr. Wb.</p>
    </section>
  </main>

  <p class="thanks">Kami yang berbahagia,<br><strong>Gilang &amp; Oci</strong></p>
  <footer>© 2025 Gilang & Oci</footer>
</div>

<!-- Lightbox -->
<div class="lightbox" id="lightbox">
  <img id="lightbox-img" src="" alt="preview">
</div>

<!-- Bottom Navigation -->
<nav class="bottom-nav" id="bottomNav">
  <a href="#page">🏠 Beranda</a>
  <a href="#ucapan">🙏 Ucapan</a>
  <a href=".gallery">📸 Galeri</a>
  <a href="https://www.google.com/maps/search/?api=1&query=Kp.+Pusar+RT+006%2F01+Binong+Curug+Tangerang+Banten" target="_blank">📍 Lokasi</a>
</nav>

<button class="theme-toggle" id="themeBtn">🎨 Ganti Tema</button>

<script src="script.js"></script>
</body>
</html>

# Personal Portfolio — React + Vite + Tailwind CSS

Website portfolio pribadi untuk Web Developer. Dibuat dari nol (bukan hasil copy-paste dari website manapun), terinspirasi dari struktur portfolio developer pada umumnya: Hero, About, Projects, Skills, Experience, Activity, dan Contact.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Untuk build production:

```bash
npm run build
npm run preview
```

## Struktur Folder

```
src/
  components/     -> Semua section (Navbar, Hero, About, Projects, Skills, Experience, Activity, Contact, Footer)
  data/
    portfolioData.js  -> SEMUA konten (nama, project, skill, pengalaman, kontak) ada di sini
  hooks/
    useReveal.js    -> Hook animasi scroll-reveal (IntersectionObserver)
  App.jsx
  index.css
  main.jsx
```

## Mengganti Konten Menjadi Milik Anda

Cukup edit satu file: **`src/data/portfolioData.js`**

- `profile` — nama, role, tagline, email, WhatsApp, lokasi, link social media
- `stats` — angka statistik di section About
- `about` — deskripsi, pendidikan, fokus bidang
- `projects` — daftar project (ganti image, nama, deskripsi, tech, link demo & source code)
- `skills` — daftar skill beserta persentase level
- `experience` — timeline pengalaman kerja
- `activities` — daftar aktivitas di section Activity

Ganti juga foto profil di `src/components/About.jsx` (bagian `<img src=... />`) dengan foto Anda sendiri.

## Warna & Font

- Warna utama: `#4BB8FA` (didefinisikan di `tailwind.config.js` sebagai `primary`)
- Font judul: **Poppins**, font body: **Inter**, font kode/mono: **JetBrains Mono** (dimuat dari Google Fonts di `index.html`)

## Catatan

- Form contact saat ini hanya mensimulasikan pengiriman pesan di sisi client. Untuk mengirim email sungguhan, hubungkan `handleSubmit` di `src/components/Contact.jsx` ke layanan seperti Formspree, EmailJS, atau backend Anda sendiri.
- Peta pada section Contact menggunakan embed OpenStreetMap (tidak butuh API key). Ganti koordinat `bbox` pada `src/components/Contact.jsx` sesuai lokasi Anda.
- Semua icon menggunakan [lucide-react](https://lucide.dev/).

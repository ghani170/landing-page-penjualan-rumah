# Penjualan Rumah - Landing Page

Landing page modern untuk website penjualan rumah, dibuat dengan HTML, Java Script, dan Tailwind CSS.

# NOTE

Masih dalam tahap pengembangan

## Fitur

- **Navigasi responsif**: Menu utama dengan dropdown dan mode mobile.
- **Hero Section**: Sambutan dan CTA untuk menemukan produk rumah.
- **Daftar Rumah**: Tiga pilihan rumah populer dengan fitur dan harga.
- **Keunggulan**: Empat alasan memilih layanan Penjualan Rumah.
- **CTA Section**: Ajakan untuk menghubungi tim spesialis.
- **Footer**: Kontak, newsletter, dan link sosial media.
- **Dark Mode**: Memiliki fitur dark mode.
- **Animasi**: Menggunakan [AOS](https://michalsnik.github.io/aos/) untuk efek animasi saat scroll.

## Struktur Folder

```
penjualan-rumah/
│
├── src/
│   ├── index.html      # Landing page utama
│   ├── shop.html       # Halaman daftar rumah
│   ├── about.html      # Halaman tentang perusahaan
│   ├── contact.html    # Halaman kontak
│   ├── input.css       # Sumber Tailwind CSS (custom style)
│   ├── output.css      # Hasil build Tailwind CSS
│   ├── index.js        # Script utama landing page
│   ├── about.js        # Script halaman about
│
├── img/
│   ├── rumah2.jpg      # Gambar rumah 2
│   ├── rumah3.jpg      # Gambar rumah 3
│   ├── rumah4.png      # Gambar rumah 4
│
├── README.md           # Dokumentasi proyek
├── package.json        # Konfigurasi npm dan dependencies
├── tailwind.config.js  # Konfigurasi Tailwind CSS
```

## Cara Menjalankan

1. **Install dependencies**  
   Jalankan perintah berikut di terminal:
   ```sh
   npm install
   ```

2. **Build Tailwind CSS**  
   Jalankan:
   ```sh
   npm run dev
   ```

3. **Buka Landing Page**  
   Buka file [`src/index.html`](src/index.html)
# User Management Application - Frontend

User Management adalah aplikasi web sederhana yang memungkinkan untuk mengelola data pengguna dengan fitur Create, Read, Update, dan Delete (CRUD). Aplikasi ini dibangun menggunakan teknologi stack modern dengan tujuan untuk memberikan pengalaman manajemen data pengguna yang responsif dan efisien.

## Teknologi yang Digunakan

Berikut adalah teknologi yang digunakan dalam pengembangan aplikasi ini:

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) **Next.js / React.js + TypeScript =** Framework React.js dengan TypeScript untuk pengembangan frontend.
- ![Zustand](https://img.shields.io/badge/Zustand-0077b5?style=flat&logo=zustand&logoColor=white) **Zustand =** State management yang ringan dan efisien.

- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) **Axios =** Library untuk melakukan HTTP request dengan API backend.

- ![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) **Tailwind CSS =** Utility-first CSS framework yang memungkinkan penataan UI yang cepat dan responsif.

- ![Material UI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) **Material UI =** Komponen UI berbasis Tailwind CSS untuk mempercepat pengembangan desain antarmuka.

## Fitur

1. **User List Page**

   - Menampilkan daftar pengguna yang diambil dari API backend.
   - Fitur pencarian untuk memudahkan pencarian pengguna berdasarkan nama.

2. **Add User Page**
   - Formulir untuk menambahkan pengguna baru ke dalam sistem.
3. **Responsive Layout**
   - Antarmuka aplikasi yang responsif untuk perangkat mobile, tablet, dan desktop.
4. **Navbar/Header dan Footer**
   - Elemen navigasi dan footer yang konsisten di seluruh halaman.

## Prasyarat

Sebelum menjalankan aplikasi ini, pastikan kamu memiliki beberapa hal berikut:

- **Windows 10 Or Higher**
- **Visual Studio Code** (VSCode) sebagai editor kode.
- **Node.js v22.18.0** atau versi terbaru.

## Menjalankan Proyek

Ikuti langkah-langkah berikut untuk mengambil proyek ini dan menjalankannya secara lokal di mesin Anda:

### 1. Kloning Repository

Pertama, kloning repository ini ke komputer lokal Anda:

```bash
git clone https://github.com/tkarombang/Frontend_UserManagementApi.git
cd repository-name
```

### 2. Instal Dependensi

Setelah mengunduh project, jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:

```bash
npm install
```

### 3. Menjalankan Aplikasi

Untuk menjalankan aplikasi di mode pengembangan, gunakan perintah berikut:

```bash
npm run dev
```

Ini akan menjalankan aplikasi di http://localhost:3000 atau alamat lain yang ditentukan.

### 4. Menjalankan Backend

Backend aplikasi ini menggunakan ASP.NET Core dan PostgreSQL. Untuk menjalankan API backend, pastikan Anda telah mengonfigurasi koneksi ke database PostgreSQL dan menjalankan aplikasi backend menggunakan perintah berikut:

```bash
dotnet run
```

Untuk Backendnya, kamu bisa mendapatkannya di [sini](https://www.github.com/tkarombang/Backend-UserManajementApi)

### 5. Mengakses Aplikasi

Setelah menjalankan aplikasi frontend dan backend, buka browser dan akses:
Frontend: http://localhost:3000
Backend (API): http://localhost:5000

## Struktur Proyek

```
src/
 └── app/
      ├── page.tsx         # Home Page
      ├── users/
      │    └── page.tsx    # User List Page
      └── add-user/
          └── page.tsx     # Add User Page
 └── components/
      ├── Layouts
          └── navbar.tsx   # Add User Page
```

### Kontribusi

Jika Anda tertarik untuk berkontribusi pada project ini, harap ikuti langkah-langkah berikut:

Fork repository ini.

Buat branch baru untuk fitur atau perbaikan (git checkout -b feature/fitur-baru).

Lakukan perubahan yang diperlukan.

Commit perubahan (git commit -am 'Tambah fitur baru').

Push ke branch Anda (git push origin feature/fitur-baru).

Buat Pull Request.

---

## Kontak

Jika Anda memiliki pertanyaan atau ingin berkontribusi, silakan hubungi saya melalui GitHub atau kirim email ke [tuangkarombang@gmail.com].

## Terima Kasih

Terima kasih telah menggunakan aplikasi ini! Jangan ragu untuk membuka _issues_ di GitHub jika Anda menemukan bug atau memiliki saran fitur.

---

> **Note:** Jika Anda merasa aplikasi ini bermanfaat, jangan lupa untuk memberikan ⭐ pada repository ini di GitHub! 😊

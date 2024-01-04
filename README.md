# Huawei Technical

Technical test IT Developer Huawei

## Menjalankan Backend

1. Buka terminal dan pindah ke direktori backend:

   ```bash
   cd BackEnd
   ```

2. Install dependensi:

   ```bash
   npm install
   ```

3. Jalankan server backend:

   ```bash
   npm start
   ```

   Server backend akan berjalan di `http://localhost:3000` atau port yang telah ditentukan.

## Menjalankan Frontend

1. Buka terminal dan pindah ke direktori frontend:

   ```bash
   cd frontend
   ```

2. Install dependensi:

   ```bash
   npm install
   npm install selenium-webdriver chromedriver
   ```

3. Jalankan server frontend:

   ```bash
   http-server -p 5000
   ```

   Aplikasi frontend akan berjalan di `http://localhost:5000` atau port yang telah ditentukan.

## Menjalankan Pengujian Otomatis (Selenium)

1. Pastikan server backend dan frontend sudah berjalan.

2. Buka terminal dan pindah ke direktori frontend:

   ```bash
   cd frontend
   ```

3. Install dependensi Selenium:

   ```bash
   npm install selenium-webdriver chromedriver
   ```

4. Jalankan skrip otomatisasi pengujian:

   ```bash
   node test-automation.js
   ```

   Skrip ini akan menjalankan otomatisasi pengujian frontend.

## Catatan

- Pastikan Node.js dan npm sudah terinstal di sistem Anda.
- Pastikan ChromeDriver terinstal di sistem Anda atau sesuaikan versi sesuai kebutuhan.

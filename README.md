# GoReader-Kelompok5

![](./Dashboard/public/images/logo/logo.jpeg)

Nama **"GoReader"** mengandung arti dan filosofi yang terkait dengan kecepatan, aksesibilitas, dan kemudahan dalam membaca. Kata **"Go"** bisa diasosiasikan dengan gerakan, tindakan, atau perjalanan yang cepat atau lancar. Sementara **"Reader"** menyoroti fokus pada pembacaan dan literasi. Menggunakan warna biru keunguan muda dalam merek GoReader dapat mencerminkan komitmen terhadap aksesibilitas, teknologi, kepercayaan, dan inovasi dalam membaca, serta menciptakan pengalaman yang menyenangkan dan menenangkan bagi para pembaca.

**GoReader**
Proyek ini memiliki fokus utama pada pengembangan sistem Smart Water Meter yang memanfaatkan IoT dan Optical Character Recognition (OCR) untuk pemantauan dan pencatatan otomatis penggunaan air. Sistem ini akan memungkinkan pengukuran yang akurat dan real-time, serta dilengkapi dengan website dashboard untuk visualisasi data penggunaan air.

**Alur Kerja GoReader**

- ESP32CAM, mengambil gambar dan mengirimkan gambar pada flask yang sudah di deploy di cloud dengan mengganti image menjadi image base64, dengan menggunakan API POST dari Publik Address VM untuk mengirimkannya.
- Selanjutnya Gambar akan diekstraksi menggunakan pyteseract dan akan mengirimkan hasil ekstraksi, gambar, jam, tgl, devices, dan id ke firestore database.
- Firestore database berguna untuk menyimpan data dari proses ekstraksi yang telah dilakukan pada cloud
- Website GoReader akan menampilkan data dan detail dari firestore database dan dapat diunduh dalam bentuk csv.

# Anggota Tim Kelompok 5

- Siti Maisaroh (2341728035)
- Septi Lutfiana (2141720038)
- Arya Wicksana (2141720207)
- Ahmad Tito (2141720265)

Berikut kami lampirkan progres dari proyek GoReader Kelompok 5

# Deskripsi Proyek

https://drive.google.com/drive/folders/1NBdaUMnlMHZflHakF3mQE2AFs862oz6e?usp=sharing

# Link Figma

https://www.figma.com/file/FWmwbaupe5upeLiKWZ0by7/SMART-WATER-METER?type=design&node-id=0%3A1&mode=design&t=15M8WLHNO8BdRdsx-1

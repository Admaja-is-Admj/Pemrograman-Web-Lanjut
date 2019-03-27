**Praktikum – Bagian 1: Building a Bootstrap Form**

| **Langkah** | **Keterangan**                                                                     |
|-------------|------------------------------------------------------------------------------------|
| 1           | Buat component baru dengan nama signup-form dengan perintah **ng g c signup-form** |
| 2           | Modifikasi file signup-form.component.html menjadi seperti berikut:                |
| 4           | Jalankan dan Catat hasilnya (soal 1)                                               |

![](media/f4547f314acb05de06c8d747b42b562c.png)

![](media/5e25686e528d3c962e0ee037b85e75bb.png)

![](media/4f44138ad2f5583b17465ba78c175dbf.png)

**Praktikum – Bagian 2: Control Programmatically**

| **Langkah** | **Keterangan**                                                                                          |
|-------------|---------------------------------------------------------------------------------------------------------|
| 1           | Modifikasi file signup-form.component.ts seperti dibawah ini:                                           |
| 2           | Modifikasi signup-form.component.html menjadi seperti berikut:                                          |
| 3           | Jalankan dan Catat hasil inspect elemen pada bagian console (soal 2), Akan muncul eror seperti berikut: |
| 4           | Modifikasi file app.module.ts tambahkan kode berikut:                                                   |
| 5           | Jalankan dan Catat hasilnya di bagian console pada browser (soal 3)                                     |

![](media/af963f01001b868690f3c018fdb59e17.png)

![](media/0b8cc0cad56b9b500bfd70f6cd197699.png)

![](media/b43b33fbd73efea89291ed0cd160988e.png)

![](media/501d4e46b2b8f7fba1930679cd5b00f3.png)

![](media/0e6a28ce035a8e7708d376e4ebf7df21.png)

![](media/2bc34ae8e9124da4d6c7bf05f71ef44d.png)

**Praktikum - Bagian 3: Adding Validation**

| **Langkah** | **Keterangan**                                                             |
|-------------|----------------------------------------------------------------------------|
| 1           | Modifikasi signup-form.component.ts menjadi seperti berikut:               |
| 2           | Modifikasi signup-form.component.html menjadi seperti berikut:             |
| 3           | Jalankan, apakah validasi formnya berfungsi dan Catat hasilnya (soal 4)    |
| 4           | Tambahkan get username pada file signup-form.component.ts seperti berikut: |
| 5           | Modifikasi file signup-form.component.html menjadi seperti berikut:        |
| 6           | Jalankan dan Catat hasilnya (soal 5)                                       |

![](media/c910b5e05ca52c826ccb858226ff0bf0.png)

![](media/b04394d3a5dd7a0b5c67ab28efd1f2b5.png)

![](media/20a1c248a300ad50863400663c9dac13.png)

![](media/0a8f84d2596a7d457e3b078650ee1dd6.png)

![](media/dde007fcf0d3c4108932965ea0cd2264.png)

![](media/20a1c248a300ad50863400663c9dac13.png)

![](media/9da9d392023ccdaf6cce96f8eca75416.png)

**Praktikum - Bagian 4: Specific Validation Errors**

| **Langkah** | **Keterangan**                                                 |
|-------------|----------------------------------------------------------------|
| 1           | Modifikasi signup-form.component.ts menjadi seperti berikut:   |
| 2           | Modifikasi signup-form.component.html menjadi seperti berikut: |
| 3           | Jalankan dan Catat hasilnya (soal 6)                           |
| 4           | Modifikasi signup-form.component.html menjadi seperti berikut: |
| 5           | Jalankan dan Catat hasilnya (soal 7)                           |

![](media/c18af9ee242071ed234b85160376df21.png)

![](media/e33b9e186d1b2d3b4c6b0ec6db351eae.png)

![](media/b0368f940b7d6478da24798cca56a288.png)

![](media/3edd802a45d3bdb27a392940141d91d7.png)

![](media/28de034b3043b3b2bd4b12f54baa2d9d.png)

**Praktikum - Bagian 5: Custome Validation**

| **Langkah** | **Keterangan**                                                                                                       |
|-------------|----------------------------------------------------------------------------------------------------------------------|
| 1           | Buat file baru pada folder signup-form dengan nama **username.validators.ts** dan isi dengan script sebagai berikut: |
| 2           | Modifikasi signup-form.component.ts menjadi seperti berikut:                                                         |
| 3           | Modifikasi signup-form.component.html menjadi seperti berikut:                                                       |
| 4           | Jalankan dan Catat hasilnya (soal 8)                                                                                 |

![](media/a056a61bf60f7bc9ec6917afd6683e8b.png)

![](media/322d93d3fb769e3b6b1213339491d144.png)

![](media/0793c2eb27bd11f5a63e5a00358d37ce.png)

![](media/3c19ba21e7003bb0952e154ae1960c90.png)

**Praktikum - Bagian 6: Asyncronus Validation**

| **Langkah** | **Keterangan**                                                            |
|-------------|---------------------------------------------------------------------------|
| 1           | Modifikas file username.validators.ts seperti berikut:                    |
| 2           | Modifikasi signup-form.component.ts menjadi seperti berikut:              |
| 3           | Modifikasi signup-form.component.html, tambahkan \<div\> seperti berikut: |
| 4           | Jalankan dan Catat hasilnya (soal 9)                                      |

![](media/36796f62d0566f356ed25ec7fbc51383.png)

![](media/1e790723e41d13935c63e877be594665.png)

![](media/ea101ed4854b4b43130d615fd32f92e1.png)

![](media/27c514af50a7e00b87ef096bf8fdc312.png)

**Praktikum - Bagian 7: Displaying a Loader Image**

| **Langkah** | **Keterangan**                                                            |
|-------------|---------------------------------------------------------------------------|
| 1           | Modifikasi signup-form.component.html, tambahkan \<div\> seperti berikut: |
| 2           | Jalankan dan Catat hasilnya (soal 10)                                     |

![](media/0d22578155c6eb3671e2472e5f676090.png)

![](media/7d8e9b535f4aa70d7a20e5de60e5e92b.png)

**Praktikum - Bagian 8: Validating Form on Submit**

| **Langkah** | **Keterangan**                                                                          |
|-------------|-----------------------------------------------------------------------------------------|
| 1           | Modifikasi signup-form.component.ts, dengan menambahkan method login() seperti berikut: |
| 2           | Modifikasi signup-form.component.html seperti berikut:                                  |
|             | Jalankan dan Catat hasilnya (soal 11)                                                   |

![](media/e0626992f487083470e0c99488daf4e4.png)

![](media/ee102f576b42110e9eb2bc8e6deb3296.png)

![](media/a60991cdc556b002cb13078c8bb2cead.png)

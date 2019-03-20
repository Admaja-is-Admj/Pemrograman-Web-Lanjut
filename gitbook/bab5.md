4.1 Component
-------------

-   Untuk menampilkan isi dari server.component.html maka buka file
    app.component.html dan tambahkan code berikut

![](media/b08553e7d9285c0e018d721fc153881f.png)

-   jika berhasil maka hasilnya seperti berikut

![](media/41a10acc7bf76296e20a1f81e87238b7.png)

>   ../../../../../Users/dimaswahyu/Desktop/Screen%20Shot%202019-02-

-   buatlah juga sebuah component baru dengan nama **servers (ng generate
    component nama-component) atau (ng g c servers) “server pakai s”**

4.2 Component templateUrl dan template
--------------------------------------

-   buka file servers.component.ts modifikasi codenya menjadi seperti berikut

![](media/5a0017669c0b63cb6ffd229dc062bb02.png)

-   running (ng serve) maka hasilnya seperti berikut

![](media/e0bbf403f07996156904807a0ecd11e6.png)

-   buka file server.component.ts (**default generate**)

![](media/36fd709c52299d60ff7ff9ea1d261f74.png)

-   tambahkan code berikut pada server.component.html

![](media/8ed98fc3178fee3bb22c2c6ee3897689.png)

-   buka file app.component.html dan tambahkan component server agar terlihat
    perbedaannya

![](media/c294b591bef06069571aae88570bbe2e.png)

-   running dan hasilnya

![](media/69c6df32ca582d38df06412ab92a92ce.png)

4.3 Component styles dan stylesUrl
----------------------------------

-   buka file app.component.html

    ![](media/aa8a66a6aedb30175097041acb14f1ef.png)

-   buka file app.component.css

    ![](media/f15f77c0d1660a6430d3722b64cbc6ba.png)

-   buka file server.component.ts dan tambahkan code berikut

![](media/5de74177fd3221077816452a4c3b4aca.png)

-   running hasilnya

    ![](media/4316f6ee8ea09fe047e58446149d7154.png)

    1.  Component Selector

1.  selector custom prefix

-   buka server.component.ts

    ![](media/0d1d6c632b0abbb1ef0104e0dc9fcd9e.png)

-   buka app.component.ts

    ![](media/1dafa8cc6f41c008cd8381bcb4906004.png)

1.  Selector menggunakan square bracket / Directive custom prefix

-   buka file server.component.ts

    ![](media/63e31a0c4e9275f932dc9075116ba44a.png)

-   dan jalankan ng serve, maka akan terjadi error (**app-server is not a known
    element)**

    ![](media/9c64753bd6aa68ea9fb92568cb20969f.png)

-   jika kita buka app.component.html maka akan ada error disana, maka pada
    app.component.html harus kita rubah menjadi seperti berikut

    ![](media/b22de803fcc89f3ef800076945ebb3c9.png)

1.  selector menggunakan class

-   buka file server.component.ts rubah selector menjadi sebuah class, seperti
    berikut

    ![](media/19ad152f37375107b2fb5f8f194bef4f.png)

-   untuk memanggil selector class maka pada element kita tambahkan sebuah class
    seperti berikut

    ![](media/938a78e19efb431d4c97aaea53e7a171.png)

4.5 Component API
-----------------

-   buatlah sebuah component baru dengan nama **favorite (ng g c favorite)**

    ![](media/5bce5902253d90ba7a5e0a92cb2ddaf3.png)

-   buka file app.component.ts dan buat sebuah property dengan nama post

    ![](media/4beb88a421d99399b088a087fd30e19f.png)

-   buka file app.component.html dan tambahkan code berikut (abaikan errornya
    terlebih dahulu)

    ![](media/bb180c3ce8997ee6d31902821df9ce9d.png)

4.6 Input Properties
--------------------

-   jika sudah diinstal buka **angular.json** dan tambahkan style seperti
    berikut

-   buka file app.component.html dan modifikasi kodenya menjadi berikut

-   buka file favorite.component.ts tambahkan property dan sebuah function
    onClick seperti berikut

-   tambahkan decorator input

-   jika sudah jalankan localhostnya, jika benar maka akan muncul full star pada
    saat bintang diklik maka akan berubah menjadi empty star

    ![](media/54e2b98dd80cb4eaf9c4afd0062d8967.png)

    ![](media/59395c8cf6ead479785563de814c7d48.png)

-   buka file favorite.component.ts modifikasi codenya menjadi berikut

    ![](media/e5a2dfd2277f19c7aa066160206e20ff.png)

-   jalankan localhost maka hasilnya akan sama

    ![](media/4dd94131f65ff89ffba737ffd8544835.png)

    ![](media/78c40a3e11aa17fce6a60bc3f5b14d67.png)

-   **select property isFavorite maka secara otomatis semua kata isFavorite akan
    ikut terseleksi**

    ![](media/a296e6dcd85f9d6683cbd0aa5a62a5f2.png)

-   **tekan F2 maka akan muncul seperti berikut**

    ![](media/b10a5b7855239f50ad7ab48e5bacf815.png)

-   **ganti dengan kata coba**

    ![](media/8a76a6de967e02e3eecda623cfb840de.png)

-   **lihat hasilnya jika kita lihat hasilnya yang berubah hanya dalam kelas
    FavoriteComponent saja sedangkan pada property input pada decorator
    component tidak ikut terubah**

    ![](media/c75bd00997722266e5a0edfe1b94f300.png)

4.7 Aliasing Input Properties
-----------------------------

-   buka file favorite.component.ts tambahkan function onClickAlias() dan
    modifikasi codenya menjadi seperti berikut

    ![](media/8f989cc36f0b207bbe9504e443150ae1.png)

-   buka file favorite.component.css tambahkan code berikut

    ![](media/7fa9bd00c7f35068c1cdd86b8b3f7b0c.png)

-   buka file app.component.html dan ganti input property yg sebelumnya
    [isFavorite] menjadi [aliasFavorite]

    ![](media/05d6db1d7fd4052f78506396207e9752.png)

-   jalankan localhost maka hasilnya akan tetap sama dengan tanpa menggunakan
    alias

    ![](media/4dd94131f65ff89ffba737ffd8544835.png)

    ![](media/78c40a3e11aa17fce6a60bc3f5b14d67.png)

4.8 Output Properties
---------------------

-   buka file app.component.ts buatlah function onFavoriteChanged()

    ![](media/71fa5046679f3831672d8fcf5cdb64c9.png)

-   buka file app.component.html tambahkan output properties

    ![](media/28d1ff8073ba9a06bb8580ffd511bca4.png)

-   jika kita run localhost maka console tidak akan menampilkan sesuatu. Untuk
    itu kita membutuhkan decorator output

-   buka file favorite.component.ts tambahkan **decorator output** dan
    **emitEmiter** seperti berikut

    ![](media/6b07e9da340fd19194be154754de794b.png)

-   jalankan localhost dan buka console. Jika berhasil saat kita klik bintang
    maka akan muncul favorite change pada console

    ![](media/ae246c6470b7cc313d998ef7e387dd57.png)

4.9 Passing Event Data
----------------------

-   Menggunakan cara pertama menggunakan dollar event object (\$event)

-   buka file favorite.component.ts

    ![](media/cec43a27fe9871e89f60942ad65b119f.png)

-   buka file app.component.ts

    ![](media/a5e70ee024b173e7258af8d9a609d359.png)

-   buka file app.component.html

    ![](media/0d4692bd822bc18262c9237b20fa089b.png)

-   Jalankan localhost:4200 dan lihat hasilnya pada console, pada saat full star
    kita klik maka pada console akan menampilkan perubahan value (Boolean)

    ![](media/fa66894ec69711d96c608012c14518e2.png)

-   cara kedua menggunakan **instead pass object**. Object ini mempunyai
    property dengan nama **newValue** dan di set **this.isSelected** pada
    favorite.component.ts seperti berikut

    ![](media/a7cc93c4b90b572fc8f30a7c3935f0d5.png)

-   agar app.component dapat menerima value yang diberikan oleh
    favorite.component.ts maka parameter pada method onFavoriteChanged dirubah
    menjadi **eventArgs (Argument pass with event)** dan untuk menampilkan kita
    panggil eventArgs pada console log seperti pada gambar berikut

    ![](media/108cca05a49750f506c417a263e33e48.png)

-   jalankan localhost:4200 lakukan perubahan menjadi empty star dan lihat pada
    console. Data yang dikirim berupa object bukan value seperti sebelumnya

    ![](media/83fb54983191fbaed1a4d4f4d07d5444.png)

-   Cara ketiga menggunakan interface. buka file favorite.component.ts dan
    export sebuah interface dengan nama FavoriteChangeEventArgs dengan nama
    property newValue bertipe Boolean

    ![](media/2f6a2ffa6d6ac1fe6366937adf276756.png)

-   setelah itu buka file app.component.ts tambahkan pada parameter eventArgs
    sebuah alias interface dengan nama **FavoriteChangeEvent** (nama Interface
    yang telah dibuat pada favorite.component.ts

    ![](media/a2b61cfc6a2c2317dd4e76be570c0a79.png)

-   hasilnya akan sama dengan menggunakan instead pass object

    ![](media/459361661cf9de9098f6eade15ba0e1e.png)

4.10 Aliasing Output Properties
-------------------------------

-   tambahkan **binding property name** pada **decorator output** pada
    favorite.component.ts

    ![](media/b94906f7da389c043d9542f3797b3411.png)

-   setelah kita tambahkan **binding property name** pada **decorator ouput**
    maka kita tambahkan juga pada **output properties** di
    **app**.**component**.**html**

    ![](media/6c41a858e506c7e891bfb2f963906c71.png)

4.11 Templates
--------------

-   buka file favorite.component.html tambahkan code html

    ![](media/fff3ae6773e3d2748c84bfb254f5e532.png)

-   buka file favorite.component.html modifikasi codenya menjadi berikut

    ![](media/d33a80703fa90f5fb7c44e384863d20a.png)

4.12 Styles
-----------

-   buka file favorite.component.html pastikan pada property pada decorator
    component terdapat **styleUrl**

-   buka file favorite.component.css tambahkan code berikut

    ![](media/0aa41b2729a1b1233f1474c66f9f6f57.png)

-   run localhost:4200

    ![](media/a0caf7103db07b59234b887b88218769.png)

-   buka file **favorite.component.ts** tambahkan **property styles**

    ![](media/9c33e6c75e4abb06cf2c9d7d6a16ca03.png)

-   run localhost maka hasilnya seperti berikut : (bintang berwarna hijau)

    ![](media/2d668bf7e4eb40e9d12035e249291df5.png)

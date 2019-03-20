Jobsheet 4
==========

**Praktiikum-Bagian1:Component Basic**

1.  Menambahkan kode untuk kode binding

    ![](media/bf456d8b19b859d0ab67475cc0a91abd.png)

2.  Menambahkan code binding pada courses.component.html

    ![](media/057d0aa2e6494d0cb0f80fc4b51cce79.png)

3.  Hasil di browser

    ![](media/1cecbc2894816703937c2aa8af3b71d7.png)

**Praktikum-Bagian2: Attribute Binding**

1.  Menambahkan colspan pada courses.component.ts

    ![](media/472b545ecf0f93b24cbe028d8040c0b0.png)

2.  Lalu padacouses.component.html ditambahkan table
```
<table>
    <tr>
        <td [colspan]='colSpan'\>\</td>
    </tr>
</table>
```
3.  Lalu inspect element dan mengecek error

    ![](media/f862e43a6cd1abab53de97b12204cbfb.png)

4.  Lalu pada colspan di tambahkan attr
```
    <table>
        <tr>
            <td [attr.colspan]='colSpan'></td>
        </tr>
    </table>
```
5.  Lalu menambahkan button pada courses.component.html
```
    <button type="button" class="btn btn-primary"
    [style.backgroundColor]="isActive? 'blue': 'white'" >Style</button>
```
6.  Menambahkan property isActive= true setelah line colSpan

    ![](media/a9bb171e35da171d677dc787aef63b82.png)

7.  Menambahkan data binding di html
```
    <body> ==$0
    <app-root _nghost-c0 ng-version="7.2.3">
    <app-courses _ngcontent-c0 _nghost-c1>
    <p _ngcontent-c1>
    </p>
    <table _ngcontent-c1>...</table>
    <h2 _ngcontent-c1>property-binding</h2>
    <h2 _ngcontent-c1>property-binding</h2>
    <img _ngcontent-c1 src="http://lorempixel.com/400/200" alt="">
    <img _ngcontent-c1 src="http://lorempixel.com/400/200" alt="">
    <table _ngcontent-c1>...</table>
    <button _ngcontent-c1 class="btn btn-primary active"
    type="button">tambah</button>
    </app-courses>
    </app-root>
    </body>
```
8.  Merubah isActive menjadi false

    ![](media/544c38aa3f25378e3d0bbf99f0df1826.png)

**Praktikum -Bagian 4:Style Binding**

1.  Menambahkan kode dengan style

    ![](media/80b302dac0978346ed061bef82ccb3b5.png)

**Praktikum – bagian 5 : Event Binding**

1.  Menambahkan method onSave

    ![](media/972a99df46d3215ce1c49a8da0ec4f67.png)

2.  Menambahkan component eventclick
```
    <button type="button" class="btn btn-default"
    (click)="onSave(\$event)">button</button>
```
3.  Hasil

    ![](media/44a247a9a67822da43c6c6510cb579e3.png)

4.  Menambahkan parameter \$event
```
    onSave($event){
        $event.stopPropagation();
        console.log('button sudah diklik')
    }
```
5.  Menambahkan juga di html
```
    <button type="button" class="btn btn-default"
    (click)="onSave($event)">button</button>
```
6.  Menambahkan onDivClick() pasa course.component.ts
```
    onSave($event){
        $event.stopPropagation();
        console.log('button sudah diklik')
    }
    onDivClick($event){
        console.log("ini method div",\$event)
    }
```

7.  Menambahkan div dan event pada div element
```
    <div (click)="onDivClick$event)">
    <button type="button" class="btn
    btn-danger"(click)="onSave($event)">button</button>
    </div>
```
8.  Melakukan cek pada console inspect elemen

    ![](media/6083e030a57e858f02001fc726cdbb88.png)

9.  Menambahkan $event.stopProprgation untuk mengatasi event bubbling
```
    onSave($event){
        $event.stopPropagation();
        console.log('button sudah diklik')
    }
    onDivClick($event){
        console.log("ini method div",$event)
    }
```
**Praktikum bagian 6: event filtering**

1.  Membuat inputan pada course Html
```
    <input type="text" [(ngModel)]="nama" (keyup.enter)="onKeyUp()">
```
2.  Menambahkan onekeyup
```
    onKeyUp(){
    console.log("enter was pressed");
    }
    title = 'Angular';
    point = '3 Author';
```
**Praktikum bagian 7:Template variable**

1.  Menambah variable nama
```
    <input type="text" [(ngModel)]="nama" (keyup.enter)="onKeyUp()">
```
2.  Menambah parameter nama
```
    onKeyUp(nama){
        console.log(nama);
        console.log("enter was pressed");
    }
```
**Praktikum bagian 8 : two way Binding**

1.  Membuat property baru dan menambah property nama
```
    nama = 'Roberto';
    onSave($event){
        $event.stopPropagation();
        console.log('button sudah diklik')
    }
    onDivClick($event){
        console.log("ini method div",$event)
    }
    onKeyUp(){
        console.log("enter was pressed");
    }

```
2.  Menambahkan parameter nama pada method onekeyup
```
    <input type="text" [value]='nama' (keyup.enter)="nama
    =$event.target.value;onKeyUp()">
```
3.  Menambah formmodule pada app.module.ts

    ![](media/6541646b60267108539fe79cfd7cda0c.png)

4.  Memodifikasi code pada couse.component.html
```
    <br><br>
    <input type="text" [value]='nama' (keyup.enter)="nama
    =$event.target.value;onKeyUp()">
    <input type="text" [(ngModel)]="nama" (keyup.enter)="onKeyUp()">
```
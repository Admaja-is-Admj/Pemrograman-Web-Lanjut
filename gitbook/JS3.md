Jobsheet 3
==========

**Praktikum- Bagian 1: Component Basic**

1.  Melakukan modifikasi pada app.component.html
```
<app-courses></app-courses>
<router-outlet></router-outlet>
```

1.  Kemudian membukan terminal dan melakukan compile dengan perintah ng serve,
    dan berikut hasilnya:

![](media/495787c70f1f1c8542f8162743e4e91c.png)

1.  Memodifikasi app.module.ts dan menghapus cousecomponent

![](media/8429eba53975336cd977c57724219ee4.png)

1.  Setelah dijalankan terjadi error karena componen app-course tidak dapat
    menemukan modulenya

![](media/153ca6137fad6f1d892aa2c390324a5c.png)

**Praktikum – bagian 2 : Templates**

1.  Menambahkan property baru pada file courses.component.ts dengan nama title

![](media/e1c79b271fe2e6d034bcd4bbf2d28a5c.png)

1.  Lalu menambahkan String Binding pada courses.component.html
```
<p>
courses works!
</p>
<p>
{{"Judulnya: "+title}}
</p>
```
1.  Brikut hasil pada browser

![](media/cd25ba652cd81f717b24b00e96df3f8f.png)

1.  Menambahkan method getTitle() pada courses.component.ts

![](media/065db5cbee07ee5a0ecc84c188056a5e.png)

1.  Setelah itu juga menambahkan modifikasi pada courses.component.html, dengan
    menambah getTitle

![](media/gettitle.png)
1.  Dan hasil setelah menjalankan browser

![](media/c8be959af704dfa27c00bc23e43c20f9.png)

**Praktikum – Bagian 3: Directive**

1.  Menambahkan array pada courses.component.ts
```
Courses = [
    {id: 0, name:'HTML'},
    {id: 1, name:'PHP'},
    {id: 2, name:'ANGULAR'},
    {id: 3, name:'C\#'},\
    {id: 4, name: 'VB.NET'}
]
```

1.  Lalu menambahkan table pada courses.component.html\

```
<table>
    <thead>
        <th>
        #ID
        </th>
        <th>Course name</th>
    </thead>
    <tBody>
        <tr *ngFor="let Course of Courses">
            <td>{{Course.id}}</td>
            <td>{{Course.name}}</td>
        </tr>
    </tBody>
</table>
```

1.  Lalu setelah decompile

![](media/2b26f102fb63d1f263fe15ce9464d7b2.png)

**Praktikum- Bagian 4: Services dan Dependency Injection**

1.  Menambahkan method getCourse pada file couses.service.ts

```
getCouses(){
    return [
        {id: 0, name:'HTML'},
        {id: 1, name:'PHP'},
        {id: 2, name:'ANGULAR'},
        {id: 3, name:'C\#'},
        {id: 4, name: 'VB.NET'}
];
```

1.  Lalu melakukan modifikasi pada courses.component.ts

```
Courses;
constructor(private service:CoursesService) {
    this.Courses=service.getCouses();
}
```

1.  Hasil pada browser

![](media/dc0271fe22dd7a14d67b4fdabb66642f.png)

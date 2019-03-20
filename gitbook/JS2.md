Jobsheet 2
==========

**Praktikum – Bagian 1: instalasi Typescript**

1.  Melakukan installasi typescript dengan perintah :

![](media/50e1a735aee03dce87366f0e3123b28a.png)

1.  Mengecek versi dari typescript

![](media/63539e1eb077b9d9e84bb977c2db8067.png)

1.  Membuat direktori ts-hello

![](media/ac410580bea9f40a16984a8e7eee9496.png)

1.  Membuat code typescript

-   1.  function log(message){  
    2.  console.log(message);  
    3.  }  
    4.  let message = 'Hello World';  
    5.  log(message);

1.  melakukan proses transpile file typescript ke javascript

![](media/0ef6a5e0a23559f20e2299861120e60a.png)

1.  mengecek apakah sudah ada main.js

![](media/8e67f075a8081d20b1e401f53770b312.png)

1.  melakukan execute pada file main.js

![](media/d499bd6ea5c85e7a80bd9a5433248e51.png)

**Praktikum – bagian 2: Declaring Variable**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1.  function doSomething(){
2.      for(let i = 0; i \< 5; i++){
3.          console.log(i);
4.      }
5.      console.log('Finally: ' +i);
6.  }
7.  doSomething();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1.  menghapus main.js

![](media/f93147c2e90724460d4d4b10c211b398.png)

1.  mentranspile main.ts yang baru

![](media/69e24a4291b932e2d09359ff1251e60d.png)

1.  mengexecute main.js

![](media/4cb1d5c0cd45307329414e4905620288.png)

**Praktikum – bagian 3 : types**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   1. let count = 5;
   2. count = 'a';
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

![](media/843714b6d2685b9d6950a50c4d44094e.png)

**Praktikum – bagian 4: Type Assertion**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    1. let pesan;
    2. pesan = 'abc';
    3. let percobaan=(\<string\>pesan).endsWith('c');
    4. let alternative = (pesan as string).endsWith('c');
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

![](media/579e0c009a641c12625218208d63565c.png)

**Praktikum – bagian 5 : Arrow Function**

**Main.tsc**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    1. let log = function pesan(){
    2.      console.log(pesan);
    3. }
    4. let doLog=(pesan)=\>{
    5.    console.log(pesan);
    6. }
    7. let doLog1=(pesan)=\>console.log(pesan);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**main.js**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var log = function pesan() {
    console.log(pesan);
};
var doLog = function (pesan) {
    console.log(pesan);
};
var doLog1 = function (pesan) { return console.log(pesan); };
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Hasil execute**

![](media/4239afede47f45e21c6fb2b6382fb86b.png)

**Praktikum Bagian 6: Interface**

**Main.ts**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
interface Point{
    x:number;
    y:number;
}
let drawPoint=(point:Point)=\>{
*//...*
}
drawPoint({
    x:1,
    y:3,
})
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Main.js**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var drawPoint = function (point) {
    *//...*
};
drawPoint({
    x: 1,
    y: 3
});
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

![](media/9e2a4de12547340d3e436364bcd5ded4.png)

**Praktikum bagian 7: Classes**

**Main.ts**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Class Pointku{
    x:number;
    y:number;
    draw(){
        *//...*
    }
    getDistance(another:Pointku){
        *//...*
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Main.js**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Class Pointku{
    x: number;
    y: number;
    draw(){
        *//...*
    }
    getDistance(another, Pointku){
        *//...*
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

![](media/e2823680a16100f86a27bb61afc1cb26.png)

**Praktikum bagian 8 : Objects**

**Main.ts**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Pointku{
    a:number;
    b:number;
    draw(){
        console.log('X' + *this*.a + ',Y' + *this*.b);
    }
    getDistance(another:Pointku1){
        *//....*
    }
}
let coins:Pointku1

coins.draw();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Main.js**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var Pointku = /** @class */ (function () {
    function Pointku() {
    }
    Pointku.prototype.draw = function () {
        console.log('X' + this.a + ',Y' + this.b);
    };
    Pointku.prototype.getDistance = function (another) {
        //....
    };
    return Pointku;
}());
var coins;
coins.draw();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

![](media/0926b9af3a898f9c3a7680cbff2f6c11.png)

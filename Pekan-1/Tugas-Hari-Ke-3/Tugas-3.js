//soal nomor 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama, kataKedua, kataKetiga, kataKeempat)

//soal nomor 2*

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var sum = Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat);
console.log(sum)

//soal nomor 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25, 31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

//soal nomor 4

var nilai = 82;
    if (nilai>80 && nilai <= 100){
        console.log('Indeks Anda A');
    }
    else if(nilai>70 && nilai<=80){
        console.log('Indeks Anda B');
    }
    else if(nilai>60 && nilai<=70){
        console.log('Indeks Anda C');
    }
    else if(nilai>50 && nilai<=60){
        console.log('Indeks Anda D');
    }
    else if(nilai<=50){
        console.log('Indeks Anda E');
    }
    else if(nilai>100){
        console.log('Maaf kawan! Nilai yang dimasukan melebihi 100. Coba lagi ya!')
    }

//soal nomor 5

var tanggal = 22;
var bulan = 7;
var tahun = 2020;

switch (bulan) {
    case 1:
        bulan = "Januari";
    break;

    case 2:
        bulan = "Februari";
    break;
    
    case 3:
        bulan = "Maret";
    break;
    
    case 4:
        bulan = "April";
    break;
    
    case 5:
        bulan = "Mei";
    break;
    
    case 6:
        bulan = "Juni";
    break;
    
    case 7:
        bulan = "Juli";
    break;
    
    case 8:
        bulan = "Agustus";
    break;
    
    case 9:
        bulan = "September";
    break;
    
    case 10:
        bulan = "Oktober";
    break;
    
    case 11:
        bulan = "November";
    break;
    
    case 12:
        bulan = "Desember";
    break;  
  } 
  console.log(tanggal,bulan,tahun);
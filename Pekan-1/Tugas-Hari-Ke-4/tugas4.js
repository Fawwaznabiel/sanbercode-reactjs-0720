console.log('--- SOAL NOMOR 1 ---');
//soal nomor 1

var x = 0;

console.log('LOOPING PERTAMA');
while(x<=20){
    x++;
    if (x%2 === 0){
        console.log(x+ ' - I love Coding');
    }
}

console.log('LOOPING KEDUA');
var y = 20;
while(y > 0) { 
    y--;
    if (y%2 === 0){
        console.log(y+ ' - I love Coding');
    }
}

//Soal Nomor 2
console.log('--- SOAL NOMOR 2 ---');
var n = 20;
var x;

for (x=1; x<=n ;x++){
    if (x%3 == 0 && x%2 === 1){
        console.log(x+ ' - I Love Coding');
    }
    else if(x%2 === 1){
        console.log(x+ ' - Santai');
    }
    else if (x%2 === 0){
        console.log(x+ ' - Berkualitas');
    }
}

//Soal Nomor 3
console.log('--- SOAL NOMOR 3 ---');
var i;
var j;
n = 6
var ins = 1;
for(i=0;i<=n;i++){
    for(j=1;j<=i;j++){
        ins += "#";
    }
    ins += "\n";
}
console.log(ins);

//Soal Nomor 4
console.log('--- SOAL NOMOR 4 ---')
var kalimat = "saya sangat senang belajar javascript";
var array = [ubah]
var ubah = kalimat.split(" ")
console.log(ubah);

//Soal Nomor 5
console.log('--- SOAL NOMOR 5 ---');
var i;

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for(i=0;i<=4;i++){
    console.log(daftarBuah[i]);
}
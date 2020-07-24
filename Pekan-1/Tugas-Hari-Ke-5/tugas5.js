//Soal Nommor 1

console.log("--- SOAL NOMOR 1 ---");
function halo(){
    return "Halo Sanbers!";
}
console.log(halo());
console.log();

//Soal Nomor 2

console.log("--- SOAL NOMOR 2 ---");
function kalikan(num1,num2){
    return num1 * num2
}
var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1,num2)
console.log(hasilKali)
console.log();

//Soal Nomor 3

console.log("--- SOAL NOMOR 3 ---")
function introduce(name, age, address, hobby){
    var i = "Nama saya " +name;
    var j = ", umur saya " +age;
    var x = ", alamat saya di " +address;
    var y = ", dan saya punya hobby yaitu " +hobby;
    var z = "!"
    return i + j + x + y + z;

}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)
console.log();
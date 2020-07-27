//soal nomor 1
console.log('--- Soal Nomor 1 ---')
console.log()
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var object = {
    nama : "Asep",
    jeniskelamin : "laki-laki",
    hobi : "baca buku",
    tahunlahir : 1992
}
console.log(object)
console.log()

//soal nomor 2
console.log('--- Soal Nomor 2 ---')
console.log()

var objectBuah = [
{
    nama : "strawberry",
    warna : "merah",
    adabijinya : "tidak",
    harga : 9000
},
{
    nama : "jeruk",
    warna : "oranye",
    adabijinya : "ada",
    harga : 8000
},   
{
    nama : "semangka",
    warna : "Hijau & Merah",
    adabijinya : "ada",
    harga : 10000
},
{
    nama : "Pisang",
    warna : "Kuning",
    adabijinya : "Tidak",
    harga : 5000
}

]
console.log (objectBuah[0])
console.log ("atau yang dimaksud data pertama adalah ini? \n")
objectBuah.forEach(function(item){
    console.log("nama : " +item.nama)
})
console.log()

//soal nomor 3
console.log('--- Soal Nomor 3 ---')
console.log()


var dataFilm = []
var addData = {
    nama : "Fawwaz",
    durasi : 120,
    genre : "horror",
    tahun : 1998
}
function addmoreData(addData){
    return addData
}
dataFilm.push(addData)
console.log(dataFilm)

//soal nomor 4
console.log('--- Soal Nomor 4 ---')
console.log()
class Animal {
    constructor(name, legs) {
        this.name = name
        this.legs = 4
        this.cold_blooded = "false"
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
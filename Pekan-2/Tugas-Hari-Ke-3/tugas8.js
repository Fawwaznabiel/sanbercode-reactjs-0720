//SOAL NOMOR 1
console.log("--- Soal Nomor 1 ---")
console.log()
let  luasLingkaran = function(phi,r)
{
	return phi*r*r;
};
console.log('Luas Lingkaran =',luasLingkaran(3.14,4));

const kelilingLingkaran = function(phi,r){
    return 2*phi*r;
}
console.log("Keliling Lingkaran =",kelilingLingkaran(3.14,2))
console.log()

//SOAL NOMOR 2
console.log("--- Soal Nomor 2 ---")
console.log()
let kalimat = ""
let gabung = function(kata1,kata2,kata3,kata4,kata5){
    const kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`
    return kalimat
}
console.log(gabung('saya','adalah','seorang','front-end','developer'))
console.log()

//SOAL NOMOR 3
console.log("--- Soal Nomor 3 ---")
console.log()
var name = "Kalkulus"
var totalPage = 200
var price = 300000
class book {
    constructor(name, totalPage, price){
        this.name = name
        this.totalPage = totalPage
        this.price = price
    } 
}
var mapel = new book(name,totalPage,price)
console.log(mapel)


class comic extends book {
    constructor(name, totalPage, price){
        super (name, totalPage, price)
        this.isColorful = true
    }
}
var buku = new comic("Naruto", 10, 10000)
console.log(buku)
console.log()
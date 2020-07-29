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
console.log("Keliling Lingkaran =",kelilingLingkaran(4,2))
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
class book {
    constructor(name, totalPage, price){
        this.name = name
        this.totalPage = totalPage
        this.price = price
    }
    
}
class comic extends book {
    constructor(name, totalPage, price){
        super (name, totalPage, price)
        this.isColorful = true
    }
    show(){
        return "Nama Buku: " + this.name + " "+ "Jumlah Halaman: "  +this.totalPage + " "+ "Harga: " +this.price
    }
}
buku = new book("Kalkulus", 200, 100000)

buku = new comic("Naruto", 10, 10000)
console.log(buku.show())
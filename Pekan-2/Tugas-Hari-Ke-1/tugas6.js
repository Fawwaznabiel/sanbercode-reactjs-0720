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
    nama : "Jono",
    durasi : 120,
    genre : "horror",
    tahun : 1998
}
function addmoreData(addData){
    dataFilm.push(addData)
    return dataFilm
}

console.log(addmoreData(addData))

//soal nomor 4
console.log('--- Soal Nomor 4 ---')
console.log()
class Animal {
    constructor(name, legs) {
        this.name = name
        this.legs = 4
        this.cold_blooded = "false"
    }
    get canimal() {
        return this.name
    }
    set canimal(x){
        this.name = x
    }
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//soal nomor 4
console.log('--- Soal Nomor 4 ---')
console.log()
class Ape extends Animal {        
        yell() {
            
            return console.log("Auooo")
        }

    }
    class Frog extends Animal {        
        jump() {
            
            return console.log("hop hop")
        }

    }
  
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 


//soal nomor 5
console.log('--- Soal Nomor 5 ---')
console.log()
class Clock{
    constructor({template}){
        {
            var timer;

            function render() {
                var date = new Date();

                var hours = date.getHours();
                if (hours < 10) hours = '0' + hours;

                var mins = date.getMinutes();
                if (mins < 10) mins = '0' + mins;

                var secs = date.getSeconds();
                if (secs < 10) secs = '0' +secs;

                var output = template
                    .replace('h', hours)
                    .replace('m', mins)
                    .replace('s', secs);
                
                console.log(output);
            }

            this.stop = function() {
                clearInterval(timer);
            };

            this.start = function() {
                render();
                timer = setInterval(render, 1000);
            };
        }
    }
}
var clock = new Clock({template: 'h:m:s'});
clock.start();
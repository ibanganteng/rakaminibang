// (1.). Buatlah 100 nilai random (1 sampai 50) pada 1 array
// 

// (2.). Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array

// (3.). Gunakan 2 array yang telah dibuat untuk mendapatkan
// - Min
// - Max
// - Total
// - Rata rata
// - Bandingkan kedua buah array, contoh
// - Min lebih besar array genap
// - Max lebih besar array ganjil
// - Total memiliki nilai sama antara array genap dan ganjil
// - Rata rata lebih besar array ganjil




// kumpulan variable nilai
let nilaiAcak = []
let nilaiGanjil= []
let nilaiGenap = []
let minNilaiGenap = []
let minNilaiGanjil = []
let maxNilaiGenap = []
let maxNilaiGanjil = []



// (1.). Buatlah 100 nilai random (1 sampai 50) pada 1 array
for (let i = 0 ; i < 100; i++){
    nilaiAcak.push(Math.floor(Math.random()* 50)+1)
}
// (1.). Buatlah 100 nilai random (1 sampai 50) pada 1 array
// (2.). Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array
for(let i=0; i < nilaiAcak.length; i++) {
    if (i % 2 === 0) {
        nilaiGenap.push(nilaiAcak[i])
    }else {
        nilaiGanjil.push(nilaiAcak[i])
    }
}

 // (3.). Gunakan 2 array yang telah dibuat untuk mendapatkan
// - Min
// - Max
// - Total
// - Rata rata
// - Bandingkan kedua buah array, contoh
// - Min lebih besar array genap
// - Max lebih besar array ganjil
// - Total memiliki nilai sama antara array genap dan ganjil
// - Rata rata lebih besar array ganjil

// - Min
// min genap
if (nilaiGenap.length > 0) {
    minNilaiGenap = nilaiGenap[0]
}



for(let i= 0; i < nilaiGenap.length; i++) {
    if (nilaiGenap[i] < minNilaiGenap) {
        minNilaiGenap = nilaiGenap[i]
    }
}
// - Min
// min ganjil
if (nilaiGanjil.length > 0) {
    minNilaiGanjil = nilaiGanjil[0]
}

for(let i= 0; i < nilaiGanjil.length; i++) {
    if (nilaiGanjil[i] < minNilaiGanjil) {
        minNilaiGanjil = nilaiGanjil[i]
    }
}
// - Max
// max ganjil

if(nilaiGanjil.length > 0) {
    maxNilaiGanjil = nilaiGanjil[0]
}

for (let i= 0; i < nilaiGanjil.length; i++) {
    if (nilaiGanjil[i] > maxNilaiGanjil) {
        maxNilaiGanjil = nilaiGanjil [i]
    }
}
// - Max
// max genap

if ( nilaiGenap.length> 0) {
    maxNilaiGenap = nilaiGenap[0]
}

for (let i = 0; i <  nilaiGenap.length; i++) {
    if (nilaiGenap[i] > maxNilaiGenap) {
        maxNilaiGenap = nilaiGenap[i]
    }
}
// - Total
let total = nilaiGenap.length + nilaiGanjil.length

// - Rata rata
// perbandingan rata-rata max
 let perbandinganEqualMax = maxNilaiGanjil > maxNilaiGenap ? "rata-rata nilai ganjil lebih besar" : "rata-rata nilai genap lebih besar"
//  perbandingan rata-rata min 
 let perbandinganEqualMin = minNilaiGanjil > minNilaiGenap ? "min nilai ganjil lebih bsar" : "min nilai genap lebih besar"
 
// - Bandingkan kedua buah array
// perbandingan min genap dan min ganjil 
let perbandinganMin = minNilaiGanjil > minNilaiGenap ? "min ganjil lebih besar" : "min genap lebih besar"

// - Bandingkan kedua buah array
// perbandingan max genap dan max ganjil 

let perbandinganMax = maxNilaiGanjil > maxNilaiGenap ? 
"max ganjil lebih besar" : "max genap lebih besar"





// Total memiliki nilai sama antara array genap dan ganjil

// perbandingan total max

let perbandinganTotalMax = maxNilaiGanjil === maxNilaiGenap ?  "keduanya max memiliki nilai yang sama" : "keduanya max tidak memiliki nilai yang sama"




// Total memiliki nilai sama antara array genap dan ganjil
// perbandingan total min

let perbandinganTotalMin = minNilaiGanjil === minNilaiGenap ? "kedua min memiliki nilai yang sama" : "kedua min tidak memiliki nilai yang sama"




// (1.). Buatlah 100 nilai random (1 sampai 50) pada 1 array
// (2.). Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array
 // (3.). Gunakan 2 array yang telah dibuat untuk mendapatkan
// - Min
// - Max
// - Total
// - Rata rata
// - Bandingkan kedua buah array, contoh
// - Min lebih besar array genap
// - Max lebih besar array ganjil
// - Total memiliki nilai sama antara array genap dan ganjil
// - Rata rata lebih besar array ganjil

// semua console
//  1.
console.log(nilaiAcak)

// 2
console.log(nilaiGanjil)
console.log(nilaiGenap)

// 3.
// console min nilai 
console.log( "nilai min genap:" + minNilaiGenap)
console.log(" nilai min ganjil:" + minNilaiGanjil)

// max nilai

console.log(" nilai max ganjil:" + maxNilaiGanjil)
console.log(" nilai max genap:" + maxNilaiGenap)

// total

console.log("total nilai :" + total)

// perbandingan rata-rata
console.log(perbandinganEqualMax)
console.log(perbandinganEqualMin)

// console perbandingan
console.log(perbandinganMin)
console.log(perbandinganMax)


// console min max nilai ganjil
console.log(minNilaiGanjil)
console.log(maxNilaiGanjil)


console.log(perbandinganMax)

// console perbandingan total
console.log(perbandinganTotalMax)
console.log(perbandinganTotalMin)




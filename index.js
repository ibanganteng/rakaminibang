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



// (1.). Buatlah 100 nilai random (1 sampai 50) pada 1 array
for (let i = 0 ; i < 100; i++){
    nilaiAcak.push(Math.floor(Math.random()* 50)+1)
}

// (2.). Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array
for(let i=0; i < nilaiAcak.length; i++) {
    if (i % 2 === 0) {
        nilaiGenap.push([i])
    }else {
        nilaiGanjil.push([i])
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



// max nilai ganjil
let maxNilaiGanjil = nilaiGanjil.reduce(getMax)

function getMax (accumulator,element) {
    return Math.max(accumulator,element)
}

// min nilai ganjil
let minNilaiGanjil = nilaiGanjil.reduce(getMin)

function getMin (accumulator,element) {
    return Math.min(accumulator,element)
}

// max nilai genap
let maxNilaiGenap = nilaiGenap.reduce(max)

function max (accumulator,element) {
    return Math.max(accumulator,element)
}

// min nilai genap

let minNilaiGenap = nilaiGenap.reduce(min) 
   
function min (accumulator,element) {
    
    return Math.min(accumulator,element)
}

// perbandingan min genap dan min ganjil (ternary methode)
let perbandinganMin = minNilaiGanjil > minNilaiGenap ? "min ganjil lebih besar" : "min genap lebih besar"

// perbandingan max genap dan max ganjil (ternary methode)

let perbandinganMax = maxNilaiGanjil > maxNilaiGenap ? 
"max ganjil lebih besar" : "max genap lebih besar"


// perbandingan total max

let perbandinganTotalMax = maxNilaiGanjil === maxNilaiGenap ?  "keduanya max memiliki nilai yang sama" : "keduanya max tidak memiliki nilai yang sama"

// perbandingan total min

let perbandinganTotalMin = minNilaiGanjil === minNilaiGenap ? "kedua min memiliki nilai yang sama" : "kedua min tidak memiliki nilai yang sama"

// perbandingan rata-rata max
 let perbandinganEqualMax = maxNilaiGanjil > maxNilaiGenap ? "rata-rata nilai ganjil lebih besar" : "rata-rata nilai genap lebih besar"

//  perbandingan rata-rata min
 let perbandinganEqualMin = minNilaiGanjil > minNilaiGenap ? "min nilai ganjil lebih bsar" : "min nilai genap lebih besar"








// semua console
console.log(nilaiAcak)
console.log(nilaiGanjil)
console.log(nilaiGenap)

// console min max nilai genap
console.log( minNilaiGenap)
console.log(maxNilaiGenap)

// console min max nilai ganjil
console.log(minNilaiGanjil)
console.log(maxNilaiGanjil)


// console perbandingan
console.log(perbandinganMin)
console.log(perbandinganMax)

// console perbandingan total
console.log(perbandinganTotalMax)
console.log(perbandinganTotalMin)

// perbandingan rata-rata
console.log(perbandinganEqualMax)
console.log(perbandinganEqualMin)



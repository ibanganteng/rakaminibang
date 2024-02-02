// Contoh array angka
var angka = [3, 7, 1, 9, 5];

// Inisialisasi nilai min dan max dengan nilai pertama dalam array
var nilaiMin = angka[0];
var nilaiMax = angka[0];

// Loop untuk membandingkan nilai dan mengupdate nilai min dan max
for (var i = 1; i < angka.length; i++) {
    // Membandingkan nilai dengan nilai min
    if (angka[i] < nilaiMin) {
        nilaiMin = angka[i];
    }

    // Membandingkan nilai dengan nilai max
    if (angka[i] > nilaiMax) {
        nilaiMax = angka[i];
    }
}

// Menampilkan hasil
console.log("Nilai Minimum: " + nilaiMin);
console.log("Nilai Maksimum: " + nilaiMax);

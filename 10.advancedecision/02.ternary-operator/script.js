var a = 10
var hasil 
if ( a % 2 == 0){
    hasil = `genap`
} else {
    hasil = `ganjil`
}
console.log(hasil)

var b = 10
var hasilTernary = b % 2 == 0 ? 'genap' : `ganjil`
console.log(hasilTernary);

// menggunakan ternary operator
var nilaiAkhirBootcamp = 100
var sertifikat =
          nilaiAkhirBootcamp >= 100 ? `Outstanding`:
          nilaiAkhirBootcamp >= 90 ? `Excellent`:
          nilaiAkhirBootcamp >= 80 ? `Good`:
          nilaiAkhirBootcamp >= 60 ? `Not Bad`: `Failed` ;
console.log(sertifikat);

//menggunakan if
var sertifikatif
if(nilaiAkhirBootcamp >= 100){
    sertifikatif = `Outstanding`
} else if(nilaiAkhirBootcamp >= 90){
    sertifikatif = `Excellent`
} else if(nilaiAkhirBootcamp >= 80){
    sertifikatif = `Good`
} else if(nilaiAkhirBootcamp >= 100){
    sertifikatif = `Not Bad`
} else {
    sertifikatif = `Failed`
}
console.log(sertifikatif);
   
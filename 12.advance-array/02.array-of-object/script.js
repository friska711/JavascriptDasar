const mobilJeep = {
    type: `SUV`,
    warna: `Hitam`,
    tahun: 2018,
    mesin: `Diesel`,
    kapasitas:`5000cc`,
}
const mobilAvanza = {
      type: `MVP`,
      warna: `Putih`,
      tahun: 2018,
      mesin: `Diesel`,
      kapasitas:`1300cc`,
}
const mobilAgya = {
      type: `LCGC`,
      warna: `Putih`,
      tahun: 2018,
      mesin: `Diesel`,
      kapasitas:`1000cc`,
}
const arrayMobil = [ mobilJeep, mobilAvanza, mobilAgya]

console,log(arrayMobil)

function printMobil(_arrayMobil) {
   console.log(`Tipe  Warna  Tahun  Mesin  Kapasitas`)
   for( const mobil of _arrayMobil) {
      console.log(`${mobil.type}  ${mobil.warna}  ${mobil.tahun}  ${mobil.mesin}   ${mobil.kapasitas}`)
   }
   console.log('')
}
printMobil(arrayMobil);

for(const mobil of arrayMobil) {
      for(const key in mobil) {
           console.log(key, ': ', mobil[key]); 
      }
      console.log('')
}  



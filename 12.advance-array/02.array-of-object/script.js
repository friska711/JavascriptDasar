const mobilJeep = {
    type: `SUN`,
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
      kapasitas:`1500cc`,
}
const mobilAgya = {
      type: `LCGC`,
      warna: `Putih`,
      tahun: 2018,
      mesin: `Diesel`,
      kapasitas:`1020cc`,
}
const arrayMobil = [ mobilJeep, mobilAvanza, mobilAgya]

console,log(arrayMobil)

function printMobil(_arrayMobil) {
   console.log(`Tipe Warna Tahun Mesin Kapasitas`)
   for (let i = 0; i < arrayMobil.length; i++) {
      const mobil = arrayMobil[i];
      console.log(`${mobil.type} ${mobil.warna} ${mobil.tahun} ${mobil.mesin} ${mobil.kapasitas}`)
   }
}
printMobil(arrayMobil);
  


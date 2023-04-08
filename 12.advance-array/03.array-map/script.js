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
const mobilXenia = {
      type: `MVP`,
      warna: `Hitam`,
      tahun: 2012,
      mesin: `Diesel`,
      kapasitas:`1000cc`,
}
const mobilAgya = {
      type: `LCGC`,
      warna: `Putih`,
      tahun: 2018,
      mesin: `Diesel`,
      kapasitas:`1000cc`,
}
const arrayMobil = [ mobilJeep, mobilAvanza, mobilXenia, mobilAgya]

console.log(arrayMobil)

const arrayMapMobil = arrayMobil.map((mobil) => {
      return `${mobil.type}  ${mobil.kapasitas}`
})

console.log(arrayMapMobil)

const arrayFind = arrayMobil. find((mobil) => {
      return mobil.type === 'MPV'
})
console.log(arrayFind)

const arrayFilter = arrayMobil. filter((mobil) => {
      return mobil.type === 'MPV'
})
console.log(arrayFilter)

const arrayFindIndex = arrayMobil. findIndex((mobil) => {
      return mobil.type === 'MPV'
})

console.log(arrayFindIndex, arrayMobil[arrayFindIndex])

const sortArrayMobil = arrayMobil. sort((mobil1, mobil2) => {
      return mobil1.type < mobil2.type ? -1 : 1;
})

console.log(sortArrayMobil)
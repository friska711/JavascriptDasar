function lulusKedokteran( 
    nilaiIPA, nilaiIPS, 
    nilaiMatematika, nilaiBahasa) {
        const lulus = nilaiIPA >70 &&
                   nilaiIPS >70 &&
                   nilaiMatematika >70 &&
                   nilaiBahasa >70 ;
        return lulus;
}

const nilaiIPAJohn =90,
      nilaiIPSJohn = 50,
      nilaiMatematikaJohn = 99,
      nilaiBahasaJohn = 80;
const nilaiIPAJane =90,
      nilaiIPSJane = 90,
      nilaiMatematikaJane = 90,
      nilaiBahasaJane = 90;

const kelulusanKedokteranJohn = lulusKedokteran(
    nilaiIPAJohn,
    nilaiIPSJohn,
    nilaiMatematikaJohn,
    nilaiBahasaJohn
)

const kelulusanKedokteranJane = lulusKedokteran(
    nilaiIPAJane,
    nilaiIPSJane,
    nilaiMatematikaJane,
    nilaiBahasaJane
)

console.log(`John lulus?`, kelulusanKedokteranJohn)
console.log(`Jane lulus?`, kelulusanKedokteranJane)
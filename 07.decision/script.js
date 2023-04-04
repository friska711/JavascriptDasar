const nilaiIPAJohn = 95,
      nilaiIPSJohn = 92,
      nilaiBahasaJohn = 99,
      nilaiMatematikaJohn = 98;

const jumlahSertifikatJohn = 10;

if (nilaiBahasaJohn > 70
    && nilaiIPSJohn > 70
    && nilaiIPAJohn > 70
    && nilaiMatematikaJohn > 70
){
    console.log(`si John lulus`)
} else {
    console.log(`si John ga lulus`)
}

if (nilaiBahasaJohn > 90
    && nilaiIPSJohn > 90
    && nilaiIPAJohn > 90
    && nilaiMatematikaJohn > 90){
        console.log(`si John lulus universitas negeri`)
} else if (
    nilaiBahasaJohn > 80
    && nilaiIPSJohn > 80
    && nilaiIPAJohn > 80
    && nilaiMatematikaJohn> 80
) {
    console.log(`si John bisa ikut seleksi mandiri universitas negeri`)
} else {
    console.log(`si John bisa masuk universitas swasta`)
}

if (nilaiBahasaJohn > 90
    && nilaiIPSJohn > 90
    && nilaiIPAJohn > 90
    && nilaiMatematikaJohn > 90){
        console.log(`si John lulus universitas negeri`)
        if(jumlahSertifikatJohn > 3 && jumlahSertifikatJohn < 5) {
            console.log(`si John lulus fakultas kedokteran`)
        } else if (jumlahSertifikatJohn >= 5){
            console.log(`si John lulus fakultas fisika`)
        }
        else if (jumlahSertifikatJohn > 10){
            console.log(`si John dapat beasiswa`)
        }
} else if (
    nilaiBahasaJohn > 80
    && nilaiIPSJohn > 80
    && nilaiIPAJohn > 80
    && nilaiMatematikaJohn> 80
) {
    console.log(`si John bisa ikut seleksi mandiri universitas negeri`)
} else {
    console.log(`si John bisa masuk universitas swasta`)
}

switch (jumlahSertifikatJohn) {
    case 10:
        console.log (`si John dapat beasiswa`)
        break
    case 9:
        console.log (`si John dapat beasiswa 50%`)
        break
    default:
        console.log(`si John tidak dapat beasiswa`)
}
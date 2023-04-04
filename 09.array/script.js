var gelas = [
    `air putih`,
    `jus apel`,
    `jus jeruk`,
    `air mineral`,
    1,
    2,
    100
]

console.log(gelas);
console.log(gelas[0]);
console.log(gelas[1]);
console.log(gelas[2]);
console.log(gelas[3]);

function printarray(array){
    for ( let i = 0; i < array.length; i++) {
        console.log(i, array[i]);
    }
    console.log(` `)
}
 printarray(gelas);
//menambahkan item ke dalam array
 gelas.push(`jus alpukat`);
 printarray(gelas);

 //menghapus item array
 delete gelas[0];
 printarray(gelas);
 // assign array variable
 gelas[gelas.length - 1] = `jus mangga`;
 printarray(gelas);

 //menghapus elemen dari array
 const gelasYangTerhapus = gelas.splice(0, 5)
 printarray(gelas);
 printarray(gelasYangTerhapus);

// untuk copy elemen array
const copy = gelas.slice(0, 3)
 printarray(copy);
 print(gelas);

 function hapusNumber(array) {
    let i=0;
    while( i < array.length) {
        if(typeof array [i] === `number`) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
 }

 hapusNumber(gelas);
 printarray(gelas);

 const sorted = gelas.sort(function (a, b) {
    if (a > b) {
        return -1
    } else {
        return 1
    }
 })
 printarray(gelas);
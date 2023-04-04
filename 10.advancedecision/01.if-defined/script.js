var a = undefined,
    b = null,
    c = ``,
    d = 0;

console.log(a, b, c, d);

if(a) {
    console.log(`a is defined`);
} else if ( a === undefined) {
    console.log(`a is not defined`);
}

if (b){
    console.log(`b is not null`);
} else {
    console.log(`b is null`);
}

if (c) {
    console.log(`c is not empty`);
} else {
    console.log(`c is empty`);
}

if (d) {
    console.log(` d is not zero`);
} else {
    console.log(`d is zero`);
}
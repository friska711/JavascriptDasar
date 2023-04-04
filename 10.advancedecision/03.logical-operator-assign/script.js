var x = 100;
var y = x || 200;
console.log(y)

var x2 = undefined;
var y2 = x2 && 200;
console.log(y2)

var profile = ``;

var button = profile && `My Account` || `Register`;

console.log(`button`, button);
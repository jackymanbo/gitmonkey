function test(edd, gtt) {
    console.log(edd);
    console.log(gtt);
}
//test(123,456);
let vv = function (edd, callback) {
    console.log(edd);
    var a = '1234411';
    var b = '13aaaaaa';
    callback(a,b);
}
vv('1234', function (a, b) {
    console.log(b);
    console.log(a);
})
var fs = require('fs');
var xml2js = require('xml2js');
var iconv = require('iconv-lite');

var xml = fs.readFileSync(__dirname + '/gg.xml', 'utf-8');

console.log('Source XML:');
console.log(xml);

/* 解析xml string成json物件 */
xml2js.parseString(xml, function (err, result) {
  console.log('Parsed Json:');
  console.dir(result.foo.phone);
  console.log(result.foo.message);
});
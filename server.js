var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
var fs = require('fs');


app.get('/', function (req, res) {
    res.sendfile('./index.html')
});

app.get('/config', function (req, res) {
    var phone = req.query.phone;
    var message = encodeURIComponent(req.query.message)

    res.send('電話為：' + phone +'\n內容：'+ decodeURIComponent(message) + '\n這是設定的文字ok');
    //console.log('電話為' + phone +'\n'+ decodeURIComponent(message) + '  這是設定的文字ok')
    var data = "<foo><phone>" + phone + "</phone><message>" + message + "</message></foo>";
    fs.writeFile(__dirname + '/gg.xml', data, function (error) { //把資料寫入檔案
        if (error) { //如果有錯誤，把訊息顯示並離開程式
            console.log('檔案寫入錯誤');
        }
    });

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
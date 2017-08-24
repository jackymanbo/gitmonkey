var host = '192.168.0.113';
var port = '9000';
var net = require('net');
var exec = require('child_process').exec;
var mode = '0';
var maxNum = 39;
var minNum = 1;
var playmax = 15000;
var playmin = 5000;
var mediamode = '0';
var request = require('request');
var shell = '';
var n = '';

net.createServer(function (sock) {
    console.log('ok')
    sock.on('data', function (data) {
        data = data.toString();
        ///console.log(data);
        if (data == 'mp33') {
            if (mode == '0') {
                mode = '1';
                mediamode = '1';
                if (data == 'mp33') {
                    var playm = Math.floor(Math.random() * (playmax - playmin + 1)) + playmin;
                    n = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
                    shell = 'madplay ./media/' + n +'.mp3'
                    console.log(shell);
                    mp3play(shell);
                    //console.log(playm + 'ms')
                    setTimeout(function () {
                        mediamode = '0';
                        mode = '0';
                        mp3stop();
                    }, playm)
                    //SMS();
                }
            } else if (data == 'stopmp3') {
                mp3stop();
            }
        }
    })
}).listen(port, host);


function mp3play(shell) {
    exec(shell, function (error, stdout, stderr) {
        if (mediamode == '1') {
            mp3play(shell);
        } else if (mediamode == '0') {
            mp3stop();
        }
    });
}

function mp3stop() {
    exec('killall -9 madplay', function (error, stdout, stderr) {
        mode = '0';
        mediamode = '0';
        if (error) {
            console.error('error: ' + error);
            return;
        }
    });
}

function SMS() {
    request({
        url: "http://api.twsms.com/smsSend.php?username=jackymanbo&password=manbo1013&mobile=0936783502&message=%E7%8C%B4%E5%AD%90%E4%BE%86%E4%BA%86%EF%BC%81",
        method: "GET"
    }, function (e, r, b) {
        if (!e && r.statusCode == 200) {
            console.log(b);
        }
        //console.log(e);
        //console.log(b);
        console.log('SMS!!');
    });
}
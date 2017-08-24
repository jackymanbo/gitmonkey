var linebot = require('linebot');
var express = require('express');

var bot = linebot({
   channelId: 'f0759fd2cfdc572eb73688a6cb311b24',
   channelSecret: 'FNuFKN3CCpcWPP9R+9Kl/Bw+Csg5jv1wval3vYt7Mr8Dhlx2nQ/pkiYj0iwQd+O9ucybITPTOAk2zkJ1bgUb18FEeF8oCn+rFdlJ4fsFdE32FQ25TGV25ii00mJ+goR4XMlf+cA5b691L45jL3eS9gdB04t89/1O/w1cDnyilFU=',
   channelAccessToken: 'U516b551c6400dd7fa01f1a203a4b6865'
});

bot.on('message', function (event) {
   event.reply(event.message.text).then(function (data) {
     console.log(data) 
   }).catch(function (error) {
    console.log(error);
   });
});

bot.listen('/linewebhook', 3000);
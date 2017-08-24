var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 'f0759fd2cfdc572eb73688a6cb311b24',
  channelSecret: 'FNuFKN3CCpcWPP9R+9Kl/Bw+Csg5jv1wval3vYt7Mr8Dhlx2nQ/pkiYj0iwQd+O9ucybITPTOAk2zkJ1bgUb18FEeF8oCn+rFdlJ4fsFdE32FQ25TGV25ii00mJ+goR4XMlf+cA5b691L45jL3eS9gdB04t89/1O/w1cDnyilFU=',
  channelAccessToken: 'U516b551c6400dd7fa01f1a203a4b6865'
});

bot.on('message', function (event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

bot.listen('/linewebhook', 3000);
const line = require('node-line-bot-api')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// need raw buffer for signature validation
app.use(bodyParser.json({
  verify(req, res, buf) {
    req.rawBody = buf
  }
}))

// init with auth
line.init({
  accessToken: 'FNuFKN3CCpcWPP9R+9Kl/Bw+Csg5jv1wval3vYt7Mr8Dhlx2nQ/pkiYj0iwQd+O9ucybITPTOAk2zkJ1bgUb18FEeF8oCn+rFdlJ4fsFdE32FQ25TGV25ii00mJ+goR4XMlf+cA5b691L45jL3eS9gdB04t89/1O/w1cDnyilFU=',
  // (Optional) for webhook signature validation
  channelSecret: 'f0759fd2cfdc572eb73688a6cb311b24'
})

app.post('/webhook/', line.validator.validateSignature(), function (req, res, next) {
  // get content from request body
  var promises = req.body.events.map(function (event) {
    // reply message
    console.log(event);
    return line.client.replyMessage({
      replyToken: event.replyToken,
      messages: [{
        type: 'text',
        text: event.message.text
      }]
    });
  });
  Promise.all(promises).then(function () {
    return res.json({
      success: true
    });
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!')
})
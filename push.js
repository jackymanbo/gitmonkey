const line = require('node-line-bot-api')

// init with auth
line.init({
    accessToken: 'FNuFKN3CCpcWPP9R+9Kl/Bw+Csg5jv1wval3vYt7Mr8Dhlx2nQ/pkiYj0iwQd+O9ucybITPTOAk2zkJ1bgUb18FEeF8oCn+rFdlJ4fsFdE32FQ25TGV25ii00mJ+goR4XMlf+cA5b691L45jL3eS9gdB04t89/1O/w1cDnyilFU=',
    // (Optional) for webhook signature validation
    channelSecret: 'f0759fd2cfdc572eb73688a6cb311b24'
})

// simple push message with user MID
line.client.pushMessage({
    to: 'C353620a5bb6738bb2a7bc00465780a86',
    messages: [{
        "type": "text",
        "text": "超級賽亞人嗎?"
    }]
})
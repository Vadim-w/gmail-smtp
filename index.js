const express = require('express')
const nodemailer = require("nodemailer");
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3010

app.use(cors())
app.use(bodyParser.json())

app.post('/sendMessage', async (req, res) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "vadim.morozov223@gmail.com",
            pass: "ProstoiParolGmail",
        },
    });

    let {message, contacts, name} = req.body

    let info = await transporter.sendMail({
        to: "vadim.morozov223@gmail.com",
        subject: "My portfolio ✔",
        html: `<b> Сообщение с портфолио:</b>
        <div>name: ${name}</div>
        <div>contacts: ${contacts}</div>
        <div>message: ${message}</div> `
    });

    res.send('send message!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
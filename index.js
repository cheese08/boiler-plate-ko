//백엔드의 시작점
//Terminal npm install express --save (express js 다운로드)

const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://goldgul:1234@boilerplate.u017b.mongodb.net/<boilerplate>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB connected...')).catch(err=>console.log(err));


app.get('/', (req, res) => {
  res.send('Hello World!~~안녕하세요~~테스트')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
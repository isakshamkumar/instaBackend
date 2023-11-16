const express = require('express')
const accounts=require('./accounts')

const app = express()

const cors = require('cors');

app.use(cors());
const port = 3005

app.get('/',(req,res)=>{
    res.send({accounts})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
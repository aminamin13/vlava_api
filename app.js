const express = require('express')
const cors = require('cors')
const xls = require('xlsx')

const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/services', (req, res) => {

  let wb = xls.readFile('data.xlsx');
  let ws = wb.Sheets['Sheet1'];
  let data = xls.utils.sheet_to_json(ws)
  res.send(data);




  //     let data = [

  //         {name:'Location', description:'desc1',icon:'map'},
  //         { name:'Alexa', description:'desc2',icon:'alexa'},
  //         { name:'Briefcase', description:'desc3',icon:'briefcase'},
  //     ]
  // res.send(data)


})
const _PORt = process.env.PORT || 3000
app.listen(_PORt)
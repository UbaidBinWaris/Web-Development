
const express = require('express')
const app = express()
const port = 3000

let title = "My EJS"
let header = "New EJS"
let search = "Search hare"
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html" , title , header , search)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

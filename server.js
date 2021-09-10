var express = require('express')
var app = express()
const PORT = 8000

app.get('/', (req, res) => {
   res.send("Backend working")
})

app.listen(PORT, () => {
    console.log("Server is up and running");
})
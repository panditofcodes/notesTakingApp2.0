const express = require('express')
const app = express()
PORT = 8080

app.get('/',(req,res) => {
    res.send('Hello from home')
} )

app.listen(PORT,()=>{
    console.log(`Server is live at ${PORT}`)
})
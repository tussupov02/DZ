const express = require('express');
const app = express();
const jsonRout = require('./routers/router.js');
const PORT = 8000;
const path = require(`path`)

app.use(express.static(`public`))
app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.get(`/`, (req,res)=>{
    console.log('ok')
    res.sendFile(path.join(__dirname+`/index.html`))
})

app.use(`/get`, jsonRout)

// app.use((req,res)=>{
//     res.status(404).sendFile(path.join(__dirname+`/error.html`))
// })


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
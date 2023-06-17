const express = require(`express`)
const path = require(`path`)
const app = express()

const regRouter = require(`./routes/router.js`)

const PORT = 3000;

app.use(express.static(`public`))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get(`/`, (req,res)=>{
    res.sendFile(path.join(__dirname+`/index.html`))
})

app.use(`/reg`, regRouter)

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname+`/error.html`))
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
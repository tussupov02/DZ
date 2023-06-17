const { json } = require('body-parser');
let express = require('express');
let path = require('path');
let app = express();
const jsonRoute= require('./routes/json-rout.js');
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});


app.use('/', jsonRoute)

app.use(function(req, res){
    res.status(404).send('<h1>ERROR</h1>')
})

app.listen(PORT, () => console.log(`Server running on port ${3000}`));
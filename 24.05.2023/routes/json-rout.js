const express = require('express');
const router = express.Router()
const fs = require('fs/promises')



router.get('/web', async (req, res) => {
    let data = await fs.readFile('./db/web.json', 'utf8');
    
   console.log('parsing...', JSON.parse(data))
   res.json(JSON.parse(data));

})

router.get('/csharp', async (req, res) => {
    let data = await fs.readFile('./db/csharp.json', 'utf8');
    
   console.log('parsing...', JSON.parse(data))
   res.json(JSON.parse(data));

})

router.get('/database', async (req, res) => {
    let data = await fs.readFile('./db/database.json', 'utf8');
    
   console.log('parsing...', JSON.parse(data))
   res.json(JSON.parse(data));

})

router.get('/gamedev', async (req, res) => {
    let data = await fs.readFile('./db/gamedev.json', 'utf8');
    
   console.log('parsing...', JSON.parse(data))
   res.json(JSON.parse(data));

})

module.exports = router
const express = require(`express`);
const router = express.Router();
const fs = require('fs/promises');

router.get(`/one`, async (req,res)=>{
    console.log(`parsing....`)
    let data = await fs.readFile(`./db/one.json`, `utf8`)
    res.json(data)
})
router.post(`/two`, async (req,res)=>{
    console.log(`parsing....`)
    let data = await fs.readFile(`./db/two.json`, `utf8`)
    data = JSON.parse(data)
    let text = req.body
    data.push(text)
    await fs.writeFile(`./db/two.json`, JSON.stringify(data))
    console.log(data)
    res.send(data)
})

module.exports = router;
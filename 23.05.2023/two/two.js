const fs = require(`fs`)
function open(path){
    fs.open(path, 'w', (err) => {
        if(err) throw err;
        console.log('norm');
    });
}
function append(path, argu){
    fs.appendFile(path, JSON.stringify(argu), `utf8`, (err)=>{
        if(err) throw Error(err)
    })
}
function read(path){
    fs.readFile(path,{encoding:`utf8`}, (err, data)=>{
        if(err) throw Error(err)
        let schet = JSON.parse(data)
        if(schet.count < schet.target){
            open(path)
            schet.count++
            append(path,schet)
            console.log(`dobavil`)
        }else if(schet.count >= schet.target){
            console.log(`Счётчик уже максимальный`)
        }
    })
}
read(`./asd.json`)
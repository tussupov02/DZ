const fs = require(`fs`);
function clear(path) {
    fs.open(path, `w`, (err) => {
        if (err) throw Error(err)
        console.log(`its good`)
    })
}
function read(path) {
    fs.readFile(path, { encoding: `utf8` }, (err, text) => {
        if (err) throw Error(err);
        console.log(text);
    });
}
function append(path, information) {
    clear(path)
    fs.open(path, `r+`, (err, data) => {
        if (err) throw Error(err);
        console.log(`Opened`);
        fs.appendFile(path, information, { encoding: `utf8` }, (err) => {
            if (err) throw Error(err);
            console.log(`ok`);
        });
    });
    read(path)
}
append(`./name.txt`, `Bahtiyar 02.09.1997`);
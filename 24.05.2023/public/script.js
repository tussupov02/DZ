const web = document.querySelector("#web")
const csharp = document.querySelector("#csharp")
const database = document.querySelector("#database")
const gamedev = document.querySelector("#gamedev")

const div = document.querySelector('div');

web.addEventListener('click', async()=>{
    let response = await fetch('/web/', {method: 'GET'});
    let data = await response.json()
    div.innerHTML = `<p>${data}<p>`
})
csharp.addEventListener('click', async()=>{
    let response = await fetch('/csharp/', {method: 'GET'});
    let data = await response.json()
    div.innerHTML = `<p>${data}<p>`
})
database.addEventListener('click', async()=>{
    let response = await fetch('/database/', {method: 'GET'});
    let data = await response.json()
    div.innerHTML = `<p>${data}<p>`
})
gamedev.addEventListener('click', async()=>{
    let response = await fetch('/gamedev/', {method: 'GET'});
    let data = await response.json()
    div.innerHTML = `<p>${data}<p>`
})
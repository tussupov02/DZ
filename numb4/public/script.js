let inp = document.querySelector('input')
document.querySelector('button').addEventListener('click', async()=>{
    
    let response = await fetch(`http://localhost:8000/get/two`, {
        method: `POST`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body:JSON.stringify({"key": inp.value}),
    })
    let data = await response.json();
    console.log(data)
})
async function getMet(){
    let response = await fetch("/get/one", {method: `get`})
    let data = await response.json();
    console.log(data)
}
getMet()
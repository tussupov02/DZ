let name= document.querySelector('#name');
let password= document.querySelector('#password');
document.querySelector('button').addEventListener('click', async()=>{
    let user={name: name.value, password: password.value}
    let body= JSON.stringify(user)
    let response = await fetch('http://localhost:3000/reg/user/', {method:"POST", headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body,
    });
      let data = await response.json();
      console.log(data)
      drowPost()
})

async function drowPost(){
    const div = document.querySelector('div');
    div.innerHTML=``;
    let response =await fetch('/reg/take');
    let data = await response.json();
    for(let post of data){
        let newDiv = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        newDiv.style.width=`100px`
        newDiv.style.height=`100px`
        newDiv.style.textAlign=`center`
        newDiv.style.border=`solid 2px black`
        div.style.width=`100%`;
        div.style.display=`flex`;
        div.style.justifyContent=`space-between`;
        h2.innerHTML=post.name;
        p.innerHTML=post.text;
        newDiv.appendChild(h2)
        newDiv.appendChild(p)
        div.appendChild(newDiv)
    }
}
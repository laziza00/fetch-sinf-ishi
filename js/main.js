
let form = document.querySelector('.form')
let input = document.querySelector(".input")
let form2 = document.querySelector('.form2')
let input2 = document.querySelector(".input2")
let form3 = document.querySelector('.form3')
let input3 = document.querySelector(".input3")




input.addEventListener("keyup", () => {

    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res)=> res.json())
        .then((data)=> {
        createId(data);
      })
  })
  
function createId(data){

    let elSearch = input2.value;
    let elList = document.querySelector(".box__list");
    elList.innerHTML = "";

    data.forEach((item) => {
      if(item.id==elSearch){
        let elItem = document.createElement("li");
        elItem.className = "box__item col-4";
  
        elItem.innerHTML = `
          <span class="d-block">Post ID: ${item.postId}</span>
          <span class="d-block">ID: ${item.id}</span>
          <h3>Name: ${item.name}</h3>
          <p>Body: ${item.body}</p>
          <p>Email: ${item.email}</p>
        `;
  
        elList.appendChild(elItem);
      }
    });
  }


input2.addEventListener("keyup", () => {

    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res)=> res.json())
        .then((data)=> {
        createName(data);
      })
  })
  
function createName(data){

    let elSearch = input2.value;
    let elList = document.querySelector(".box__list");
    elList.innerHTML = "";

    data.forEach((item) => {
      if(item.name .includes(elSearch)){
        let elItem = document.createElement("li");
        elItem.className = "box__item col-4";
  
        elItem.innerHTML = `
          <span class="d-block">Post ID: ${item.postId}</span>
          <span class="d-block">ID: ${item.id}</span>
          <h3>Name: ${item.name}</h3>
          <p>Body: ${item.body}</p>
          <p>Email: ${item.email}</p>
        `;
  
        elList.appendChild(elItem);
      }
    });
  }


input3.addEventListener("keyup", () => {

    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res)=> res.json())
        .then((data)=> {
        createEmail(data);
      })
  })
  
function createEmail(data){

    let elSearch = input3.value;
    let elList = document.querySelector(".box__list");
    elList.innerHTML = "";

    data.forEach((item) => {
      if(item.email .includes(elSearch)){
        let elItem = document.createElement("li");
        elItem.className = "box__item col-4";
  
        elItem.innerHTML = `
          <span class="d-block">Post ID: ${item.postId}</span>
          <span class="d-block">ID: ${item.id}</span>
          <h3>Name: ${item.name}</h3>
          <p>Body: ${item.body}</p>
          <p>Email: ${item.email}</p>
        `;
  
        elList.appendChild(elItem);
      }
    });
  }
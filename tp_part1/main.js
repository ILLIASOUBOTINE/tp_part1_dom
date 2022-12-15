const body = document.querySelector("body");
const div = document.querySelector(".modif");

let div_obj = {color:"white", text:"black"};
let indexRainbow = 0;
const arrRainbow = ["red","orange","yellow","green","turquoise","blue","violet"];


function creteElem(parent, elem) {
  let newElem = document.createElement(elem);
  parent.append(newElem);
  return newElem;
}


body.addEventListener("click",(e)=> {

  if (e.target.classList[0] === "petit" ) {
    
    div.classList.remove(`${div_obj.color}`);
    div_obj.color = `${e.target.classList[1]}`;
    div.classList.add(`${div_obj.color}`);
    div.classList.remove(`text`);
    // console.log(div.classList);
  }
  if (e.target.classList[1] === "grey" ) {
    if (div_obj.color !== "black") {
      div.classList.remove(`${div_obj.color}`);
      div_obj.color = "black";
     
    }else {
      div.classList.toggle(`${div_obj.color}`);
      div.classList.toggle(`text`);
    }
  }

  if (e.target.className === "gros rose") {
    div.classList.remove(`${div_obj.color}`);

    div_obj.color = `${arrRainbow[indexRainbow++]}`;
    if (indexRainbow === arrRainbow.length) {
      indexRainbow = 0;
    }

    div.classList.add(`${div_obj.color}`);
    div.classList.remove(`text`);
  }

  if (e.target.id === "border") {
    console.dir(e.target);
    div.style.borderWidth = (`${e.target.value}px`);
  }

  if (e.target.className === "hello moyen") {
    div.textContent += "Hello World!" ;
  }

  if (e.target.className === "custum moyen") {
    div.textContent += `${document.querySelector(".inp_txt").value}\n`;
  }

})

const h1 = document.querySelector("h1")
let dataString = sessionStorage.getItem("data");
let data = JSON.parse(dataString)
const img = document.querySelector("img")
console.log(data);

document.addEventListener("load", init())

function init(){
    getImage();
}

function getImage(){
    img.setAttribute("src", `${data.src.medium}`)
}
const h1 = document.querySelector("h1")
let dataString = sessionStorage.getItem("data");
let data = JSON.parse(dataString);
const img = document.querySelector("img");
const h2 = document.querySelector("h2");
const photographer = document.getElementById("photographer");

console.log(data);

document.addEventListener("load", init())

function init(){
    getInfo();
}

function getInfo(){
    img.setAttribute("src", `${data.src.medium}`);
    h2.innerHTML = `${data.photographer}`;
    photographer.setAttribute("href", `${data.photographer_url}`)
}
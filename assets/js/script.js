let dataMountains
const btnLoad = document.getElementById("btnLoad");
const btnLoad2 = document.getElementById("btnLoad2");
const btnView = document.querySelectorAll(".btnView");
const btnRemove = document.querySelectorAll(".btnRemove");
const imgDoggo = document.querySelectorAll(".imgDoggo");
const cards = document.querySelectorAll(".col-md-4");

document.addEventListener("load", init())

function init() {
    getApi();
    getApi2();
    eventListener();
}

async function getApi() {
    await fetch("https://api.pexels.com/v1/search?query=mountains", {
        headers: {
            Authorization: 'wTzX1CHG8w6AK8dYAD8cvPXV4bhucR2JXkEEQYxmh81fv7kgOx5mHpNZ'
        }
    })
        .then(response => response.json())
        .then(data => {
            dataMountains = data.photos;
        })
        .catch(error => console.log(error))
}

async function getApi2() {
    await fetch("https://api.pexels.com/v1/search?query=sunrise", {
        headers: {
            Authorization: 'wTzX1CHG8w6AK8dYAD8cvPXV4bhucR2JXkEEQYxmh81fv7kgOx5mHpNZ'
        }
    })
        .then(response => response.json())
        .then(data => {
            dataSunrise = data.photos;
        })
        .catch(error => console.log(error))
}

btnLoad.addEventListener("click", function (e) {
    e.preventDefault();
    for (i = 0; i < imgDoggo.length; i++) {
        imgDoggo[i].setAttribute("src", `${dataMountains[i].src.medium}`)
    }
})


btnLoad2.addEventListener("click", function (e) {
    e.preventDefault();
    for (i = 0; i < imgDoggo.length; i++) {
        imgDoggo[i].setAttribute("src", `${dataSunrise[i].src.medium}`)
    }
})

function eventListener() {
    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener("click", function() {          
            cards[i].style.display = "none";
        })
    }
}
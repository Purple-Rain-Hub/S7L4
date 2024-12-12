let dataMountains
const btnLoad = document.getElementById("btnLoad");
const btnLoad2 = document.getElementById("btnLoad2");
const btnView = document.querySelectorAll(".btnView");
const btnRemove = document.querySelectorAll(".btnRemove");
const imgDoggo = document.querySelectorAll(".imgDoggo");
const cards = document.querySelectorAll(".col-md-4");
const minutes = document.querySelectorAll(".text-muted");
const form = document.getElementById("form");
const input = document.getElementById("input");
let allData;

document.addEventListener("load", init())

function init() {
    getApi();
    getApi2();
    createEvents();
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
            imgEvent(data.photos)
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
            imgEvent(data.photos)
        })
        .catch(error => console.log(error))
}

btnLoad.addEventListener("click", function (e) {
    e.preventDefault();
    for (i = 0; i < imgDoggo.length; i++) {
        imgDoggo[i].setAttribute("src", `${dataMountains[i].src.medium}`)
        minutes[i].innerHTML = `${dataMountains[i].id}`;
    }

})


btnLoad2.addEventListener("click", function (e) {
    e.preventDefault();
    for (i = 0; i < imgDoggo.length; i++) {
        imgDoggo[i].setAttribute("src", `${dataSunrise[i].src.medium}`)
        minutes[i].innerHTML = `${dataSunrise[i].id}`;
    }
})

function createEvents() {
    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener("click", function () {
            cards[i].style.display = "none";
        })
    }

}

function showID() {
    for (let i = 0; i < minutes.length; i++) {
        minutes[i].innerHTML = `${dataMountains[i].id}`;
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    search(input.value)
})

async function search(value) {
    await fetch("https://api.pexels.com/v1/search?query=" + value, {
        headers: {
            Authorization: 'wTzX1CHG8w6AK8dYAD8cvPXV4bhucR2JXkEEQYxmh81fv7kgOx5mHpNZ'
        }
    })
        .then(response => response.json())
        .then(data => {
            dataValue = data.photos;
            imgEvent(data.photos)
            for (let i = 0; i < imgDoggo.length; i++) {
                imgDoggo[i].setAttribute("src", `${dataValue[i].src.medium}`)
                minutes[i].innerHTML = `${dataValue[i].id}`;
            }
        })
        .catch(error => console.log(error))
}

function imgEvent(data) {
    for (let i = 0; i < imgDoggo.length; i++) {
        imgDoggo[i].addEventListener("click", function () {
            sessionStorage.setItem("data", JSON.stringify(data[i]));
            location.href = "image.html";
        })
    }
}
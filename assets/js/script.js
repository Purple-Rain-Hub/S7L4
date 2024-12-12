let dataMountains
const btnLoad = document.getElementById("btnLoad");
const imgDoggo = document.querySelectorAll(".imgDoggo");

async function getApi() {
    await fetch("https://api.pexels.com/v1/search?query=mountains", {
        headers: {
            Authorization: 'wTzX1CHG8w6AK8dYAD8cvPXV4bhucR2JXkEEQYxmh81fv7kgOx5mHpNZ'
        }
    })
        .then(response => response.json())
        .then(data => {
            dataMountains = data.photos;
            console.log(dataMountains[1].src.medium);

        });
}
getApi();


btnLoad.addEventListener("click", function (e) {
    e.preventDefault();
    for(i=0; i<imgDoggo.length; i++){
        imgDoggo[i].setAttribute("src", `${dataMountains[i].src.medium}`)
    }

})

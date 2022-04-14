const img = document.getElementById("js--img")
let randomNumber = Math.floor(Math.random() * 250 + 1);

let pokemon = fetch( "https://pokeapi.co/api/v2/pokemon/" +randomNumber)
    
.then(function(response){
    return response.json();
})
.then(function(realData){
    img.src = realData.sprites.front_default
});


const jaofnee = document.getElementById("js--jaofnee")

let randomNumber1 = Math.floor(Math.random() * 2 + 0 );
console.log(randomNumber1 )

jaofnee.innerText = "Ga je hem pakken of niet "

function vangButton(){
    if (randomNumber1 === 1){
        jaofnee.innerText = "Gepakt!"
    }
    else{
        jaofnee.innerText = "Gefaalt!"
    }
}



const title = document.getElementById('js--showTitle')
const be = document.getElementById("js--showBe")

let show = fetch("https://api.tvmaze.com/search/shows?q=phineas%20and%20ferb")

.then(function(response){
    return response.json();
})
.then(function(realData){
    title.innerText = realData[0].show.name
    be.innerHTML = realData[0].show.summary	
})

const input = document.getElementById("js--input")
const h2 = document.getElementById('h2-1')
const age = document.getElementById("js--age")

input.onkeyup = function (event) {
    if (event.keyCode === 13) {
        let naam = input.value
        let agify = fetch("https://api.agify.io/?name=" + naam + "&country_id=NL")
            .then(function (response) {
                return response.json();
            })
            .then(function (echteData) {
                age.innerText = echteData.age
            })
        age.style.visibility = 'visible'
        age.style.fontSize = "4rem"
        h2.style.visibility = 'hidden'
        input.style.visibility = 'hidden'
    }

    
}


   


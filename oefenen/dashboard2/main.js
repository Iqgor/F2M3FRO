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

let randomNumber1 = Math.floor(Math.random() * 4 + 1 );
console.log(randomNumber1)

jaofnee.innerText = "Ga je hem pakken of niet "

function vangButton(){
    if (randomNumber1 <=+ 2){
        jaofnee.innerText = "Gepakt!"
    }
    else{
        jaofnee.innerText = "Gefaalt!"
    }


    
}



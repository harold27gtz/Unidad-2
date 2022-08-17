const peso = document.getElementById("peso");
const pesos = document.getElementById("pesos");
const pesO = document.getElementById("pesO");
const cancion = document.getElementById("cancion");


peso.addEventListener("click", Event =>{
    cancion();
})

pesos.addEventListener("click", Event =>{
    cancion2();
})

pesO.addEventListener("click", Event =>{
    cancion2();
})

let unpeso = 0;
let dospesos = 0;
let diezpesos = 0;

function cancion1(){
    if(unpeso <= 2){
        document.getElementById("peso")
        unpeso++;

    }else{
        alert("Ya puede escuchar musica")
    }
}
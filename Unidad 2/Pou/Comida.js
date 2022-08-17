const CarneOP = document.getElementById("Carne");
const LecheOP = document.getElementById("Leche");
const Pou = document.getElementById("POU");
    
CarneOP.addEventListener("click", event =>{
    darComer();
})

LecheOP.addEventListener("click", () =>{
    darComer();
})

let comerC = 0;
let comerL = 0;

function darComer(){
    if(comerC <= 2 ){
        
        document.getElementById('Carne');
        comerC++;
    }else{
        alert("Pou esta lleno");
    }
    if(comerL < 5){
        
        document.getElementById('Leche');
        comerL++;
    }else {

    }   
}
// function temporizador(){
//     ocultarBotones();
//     setTimeout(function(){
//         neutral();
//         mostrarBotones();
//     }, 5000)
// temporiCarnezador();


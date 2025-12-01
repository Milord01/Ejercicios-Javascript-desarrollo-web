//1. Acciones a los botones
//2. Botón verde asociado a jugador 1
//3. Botón rojo asociado a jugador 2
//4. Botón de reset
//5. Select de cantidad de puntos a jugar
//6. Lógica de juego

// Aquí comienza tu código
const botonJ1 = document.querySelector("#p1Button");
const botonJ2 = document.querySelector("#p2Button");
const botonReset = document.querySelector("#reset");
const displayJ1 = document.querySelector("#p1Display");
const displayJ2 = document.querySelector("#p2Display");
const selectPuntos = document.querySelector("#playto");

let ptsJ1 = 0;
let ptsJ2 = 0;
let ptsGanar = 3;
let juegoTerminado = false;

botonJ1.addEventListener("click", function(){
    if(!juegoTerminado){
        ptsJ1++;
        displayJ1.textContent = ptsJ1;

        if(ptsJ1 === ptsGanar){
            juegoTerminado = true;
            displayJ1.classList.add("has-text-success");
            displayJ2.classList.add("has-text-danger");
            botonJ1.disabled = true;
            botonJ2.disabled = true;}}});

botonJ2.addEventListener("click", function(){
    if(!juegoTerminado){
        ptsJ2++;
        displayJ2.textContent = ptsJ2;
        if(ptsJ2 === ptsGanar){
            juegoTerminado = true;
            displayJ2.classList.add("has-text-success");
            displayJ1.classList.add("has-text-danger");
            botonJ1.disabled = true;
            botonJ2.disabled = true;}}
});


function reiniciar(){
    ptsJ1 = 0;
    ptsJ2 = 0;
    juegoTerminado = false;

    displayJ1.textContent = 0;
    displayJ2.textContent = 0;
    displayJ1.classList.remove("has-text-success", "has-text-danger");
    displayJ2.classList.remove("has-text-success", "has-text-danger");

    botonJ1.disabled = false;
    botonJ2.disabled = false;}
botonReset.addEventListener("click", reiniciar);
selectPuntos.addEventListener("change", function(){
    ptsGanar = parseInt(this.value);
    reiniciar();
});
let numeroSecreeto = 0;
let numeriIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;  

console.log(numeroSecreeto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);


    if(numeroDeUsuario === numeroSecreeto){
        console.log(numeroSecreeto);
        asignarTextoElemento('p',`Acertaste el Número en ${numeriIntentos} ${(numeriIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar'). removeAttribute('disabled');
    }else {
        if(numeroDeUsuario > numeroSecreeto){
            asignarTextoElemento('p','El número ingresado es Mayor');
        }else {
            asignarTextoElemento('p','El número ingresado es Menor')
        }
        numeriIntentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
document.querySelector('#ValorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya tenemos todos los numeros sorteados
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreeto = generarNumeroSecreto();
    numeriIntentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de números
    //generar número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar'). setAttribute('disabled','true');

}

condicionesIniciales();
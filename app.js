let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
	let elementoHtml = document.querySelector(elemento);

	elementoHtml.innerHTML = texto;
}

function verificarIntento() {
	let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);


	if (numeroSecreto === numeroUsuario) {
		asignarTextoElemento('p', `Acertaste el nùmero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
		document.getElementById('reiniciar').removeAttribute('disabled')
	} else {
		if (numeroUsuario > numeroSecreto) {
			asignarTextoElemento('p', 'El numero secreto es menor.');
		} else {
			asignarTextoElemento('p', 'El numero secreto es mayor.');
		}
		intentos++;
		limpiarCaja();
	}

	return
}
function limpiarCaja() {
	document.querySelector('#valorUsuario').value = '';

}
function condicionesIniciales() {
	asignarTextoElemento('h1', 'Juego del nùmero secreto');
	asignarTextoElemento('p', `Indica un nùmero del 1 al ${numeroMaximo}`);
	numeroSecreto = generarNumeroSecreto();
	intentos = 1;

}
function reiniciarJuego() {
	// Limpiar caja
	limpiarCaja();
	//Indicar  mensaje de intervalo de nùmeros 
	//Generar el numero aletorio 
	//Inicializar el numero de intentos 
	condicionesIniciales();
	//Deshabilitar el boton de nuevo juego
	document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecreto() {
	let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
	console.log(numeroGenerado);
	// console.log(listaNumerosSorteados);

	if (listaNumerosSorteados.length == numeroMaximo) {
		asignarTextoElemento('p', 'Ya se sortearon todos los nùmeros posibles');
	} else {
		if (listaNumerosSorteados.includes(numeroGenerado)) {
			return generarNumeroSecreto();
		} else {
			listaNumerosSorteados.push(numeroGenerado);
			return numeroGenerado;
		}
	}
}



condicionesIniciales();
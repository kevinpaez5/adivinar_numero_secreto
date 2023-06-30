const readline = require (`readline-sync`);
const {generarNumeroAleatorio, verificacionAdivinanza} = require (`./adivinanza`);

const obtenerNumeroUsuario = () => {
    return readline.question('Ingresa un numero: ')};

let juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('Bienvenido intenta adivinar el numero secreto!');
    console.log('Intenta adivinar el numero del 1 al 100.\n');

    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificacionAdivinanza (numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();
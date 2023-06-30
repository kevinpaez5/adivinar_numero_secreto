//Generando el numero aleatorio.
const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100 )+ 1;};

//Verificar numero de la adivinanza.
let verificacionAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroSecreto == numeroAdivinado) {
        console.log ('Felicidades adivinaste el numero secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
        console.log ('El numero secreto es menor, intenta nuevamente!');
    } else {
        console.log ('El numero secreto es mayor, intenta nuevamente!');
    }
};

module.exports = {generarNumeroAleatorio, verificacionAdivinanza};
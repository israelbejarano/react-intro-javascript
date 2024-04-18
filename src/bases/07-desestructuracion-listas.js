const personajes = ['personaje 1', 'personaje 2', 'personaje 3'];
const [ , , p3] = personajes;
console.log(p3);

const devuelveLista = () => {
    return ['abc', 123];
}

const [letras, numeros] = devuelveLista();
console.log(letras, numeros);

const usaState = (valor) => {
    return [valor, () => {console.log('Hola mundo!')}];
}

const [nombre, setNombre] = usaState('Celia');
console.log(nombre);
setNombre();
// funciones

const saludar = function(nombre) {
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`
const saludar4 = () => `Hola Mundo`

console.log(saludar('Juan'));
console.log(saludar('Rita'));
console.log(saludar('Pedro'));
console.log(saludar4());

const getUser = () => ({
    uid: '234fsd3s34ed-w34fwr',
    username: 'juan.sin.nombre'
});

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
    uid: '234fsd3s34ed-w34fwr',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('María');
console.log(usuarioActivo);
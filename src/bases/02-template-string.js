// Template strings

const nombre = 'Israel';
const apellido = 'Bejarano';

const nombreCompleto = `${nombre} ${apellido}`;

function getSaludo(nombre) {
    return `hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);
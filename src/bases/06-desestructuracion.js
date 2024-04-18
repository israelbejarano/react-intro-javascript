// desestructuracion
// asignacion desestructurante

const persona = {
    nomre: 'Alma',
    edad: 35,
    clave: 'profesora'
};

const {edad, nombre, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const usaContext = ({ clave, edad, nombre, rango = 'jefe de estudios'}) => {
    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: 14.234234,
            lng: -34.56756
        }
    }
}

// const {nombreClave, anios, latlng} = usaContext(persona);

const {nombreClave, anios, latlng:{lat, lng}} = usaContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
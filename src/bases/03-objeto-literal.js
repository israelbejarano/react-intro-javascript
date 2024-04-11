// objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Madrid',
        zip: '28000',
        lat: 14.3232,
        lng: 34.929292929,
    }
};

const persona2 = {...persona};

persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);

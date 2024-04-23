// promesas
import { getHeroeById } from './08-imp-exp';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log(heroe);
// }).catch(err => console.error(err));

const getHeroeByIdAsync = (id) => {

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            }
            else {
                reject('No se pudo encontrar el heroe')
            }
        }, 2000);
    });
    return promesa
}

getHeroeByIdAsync(4).then(heroe => console.log('Heroe: ', heroe)).catch(err => console.warn(err));
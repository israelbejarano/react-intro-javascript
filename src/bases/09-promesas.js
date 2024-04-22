// promesas
import { getHeroeById } from './08-imp-exp';

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        resolve(heroe);
    }, 2000);
});

promesa.then((heroe) => {
    console.log(heroe);
}).catch(err => console.error(err));
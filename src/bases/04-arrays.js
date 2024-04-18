const lista = [1, 2, 3, 4];

let lista2 = [...lista, 5];

const lista3 = lista2.map(function(numero) {
    return numero*2;
});

console.log(lista);
console.log(lista2);
console.log(lista3);
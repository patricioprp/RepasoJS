//Arreglos,map y object.key
const carrito = ['producto 1','producto 2','producto 3'];

const appContenedor = document.querySelector('#app');

carrito.map(producto => {
    return 'el producto es' + producto;
});
//objectKey
const persona = {
    nombre:'patricio',
    trabajo:'Desarrollador Web',
    edad:34
}

console.log(Object.keys(persona));
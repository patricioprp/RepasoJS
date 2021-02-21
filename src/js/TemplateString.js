const nombre = 'Patricio'
const trabajo = 'Desarrollador Web'

//Forma antigua de concatenar js

console.log(
    ' hola ' + nombre + ' trabajas de ' + trabajo
);

//Forma nueva de concatenar js

console.log(
    ` hola ${nombre} trabajas de ${trabajo}`
);

//concatenar con multiples lineas
//es facil equivocarse y dificil depurar el error porque el mensaje de error es ambiguo

const contenedorApp = document.querySelector('#app');
//forma antigua
// let html = '<ul>'+
//                  '<li>Nombre:'+nombre+'</li>'+
//                  '<li>Trabajo:'+trabajo+'</li>'+
//             '</ul>';
//forma nueva

let html = 
`<ul>
<li>Nombre: ${nombre}</li>
<li>Apellido: ${trabajo}</li>
</ul>`;
contenedorApp.innerHTML = html;

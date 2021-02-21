//metodos en arreglos

//creamos un arreglos de objetos

const personas = [
    {nombre: 'Juan', edad:14, aprendiendo: 'JavaScript'},
    {nombre: 'Jose', edad:17, aprendiendo: 'PHP'},
    {nombre: 'Pablo', edad:21, aprendiendo: 'adobe'},
    {nombre: 'Ana', edad:34, aprendiendo: 'c++'},
    {nombre: 'Alejandra', edad:44, aprendiendo: 'react'},
]
console.log(personas);
//filtrando mayores de 18 años

 const mayores = personas.filter(persona => {
    return persona.edad > 18;
});
console.log(mayores);

// que aprende alejandra y su edad

const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra';
});

console.log(alejandra);

//sumando el total de las edades

const total = personas.reduce((edadTotal,persona)=>{
    return edadTotal + persona.edad;
},0);
//obteniendo la longitud del array
const longitud = personas.length;
//mostrando el promedio de edades
console.log(total/longitud);
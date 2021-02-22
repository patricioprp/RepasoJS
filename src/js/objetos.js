//Objetos

//Object literal

const persona = {
    nombre:'Juan',
    profesion:'Desarrollador Web',
    edad:500
}

console.log(persona);

//Object Constructor
function Tarea(nombre,urgencia) {
this.nombre = nombre;
this.urgencia = urgencia;

}

//creando una nueva tarea

const tarea1 = new Tarea('Aprender js','Urgente');
console.log(tarea1);
console.log(tarea1.nombre);
console.log(tarea1.urgencia);

const tarea2 = new Tarea('Practicar js','Alta');

console.log(tarea2);
console.log(tarea2.nombre);
console.log(tarea2.urgencia);
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
//Agregar un prototype a tarea
Tarea.prototype.mostrar = function mostrarInformacionTarea(){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}


const tarea1 = new Tarea('Practicar js','Alta');

console.log(tarea1.mostrar());

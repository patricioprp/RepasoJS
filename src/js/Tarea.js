


// export const nombreTarea = 'Pasear al perro';

// //Exportando una funcion
// export const crearTarea = (tarea,urgencia) => {
//     return `la Tarea ${tarea} tiene una urgencia de ${urgencia}`
// }

// export const TareaCompletada = () => {
//     console.log(`La tarea se completo`);
// }
//Escribir clases

export default  class Tarea{
    constructor(nombre,prioridad){
     this.nombre = nombre;
     this.prioridad = prioridad;
    }

    mostrar(){
        console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
    }
}



// let tarea1 = new Tarea('Aprender js','Alta');
// let tarea2 = new Tarea('Estudiar','Media');
// let tarea3 = new Tarea('Trabajar','baja');
// let tarea4 = new Tarea('Viajar','Alta');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());

//Compras
// let compra1 = new ComprasPendientes('Comprar Carne','media-alta',23);
// compra1.mostrar();
//Eescribir clases

class Tarea{
    constructor(nombre,prioridad){
     this.nombre = nombre;
     this.prioridad = prioridad;
    }

    mostrar(){
        console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea{
    constructor(nombre,prioridad,cantidad){
        super(nombre,prioridad);
        this.cantidad = cantidad;
    }

    mostrar(){
        super.mostrar();
        console.log(` y la cantidad de ${this.cantidad}`);
    }
}

let tarea1 = new Tarea('Aprender js','Alta');
let tarea2 = new Tarea('Estudiar','Media');
let tarea3 = new Tarea('Trabajar','baja');
let tarea4 = new Tarea('Viajar','Alta');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());

//Compras
let compra1 = new ComprasPendientes('Comprar Carne','media-alta',23);
compra1.mostrar();
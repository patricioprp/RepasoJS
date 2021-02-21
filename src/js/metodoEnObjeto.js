//metodos o funciones de un objeto

const persona = {
    nombre:'patricio',
    trabajo:'Desarrollador Web',
    edad:34,
    musicaRock:true,
    mostrarInformacion(){
        console.log(`${this.nombre} es ${this.trabajo} y tiene ${this.edad} años`);
    }
}

persona.mostrarInformacion();
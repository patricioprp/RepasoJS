//Destructuring de objetos
const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    framework: ['React','Vuejs','Angular']
    
}

//Destructuring es extraer valores de un objeto
let {nueva} = aprendiendoJS.version;

console.log(nueva);
//Function declaration
saludar('patricio');
function saludar(nombre){
console.log(`hola ${nombre}`);
}


//function expression

const cliente = function(cliente){
console.log(`cliente: ${cliente}`);
}

cliente('patricio');
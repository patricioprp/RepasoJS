//Promise

const aplicarDescuentos = new Promise((resolve,reject) => {
    setTimeout( () => {
        let descuento = false;
        if(descuento){
            resolve('descuento aplicado')
        }else{
            reject('no se pudo aplicar el descuento');
        }
    },3000);
});

aplicarDescuentos.then(resultado => {
    console.log(resultado);
}).catch( error =>{
    console.log(error);
});
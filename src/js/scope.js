//variables const = constante
//si no la seteamos con un valor nos dara error, al igual que si queremos cambiarle el valor
//no se puede cambiar el valor de una constante
//habitualmente se los usa para almacenar el valor de un id de html
// const aprendiendo='java';
// aprendiendo = true
// console.log(aprendiendo)


// let se puede definir sin setear, se la puede redefinir

// let aprendiendo = 'react';
// aprendiendo = true
// console.log(aprendiendo)


//scope , contexto en el que esta disponible
//en este caso tanto dentro como fuera del if imprime tango porque se define como var

// var musica ='rock'

// if(musica){
//    var musica = 'tango'
//     console.log('dentro del if ' + musica)
// }
// console.log('fuera del if '+ musica)

//dentro del if imprime tango, fuera del if rock
let musica ='rock'

if(musica){
   let musica = 'tango'
    console.log('dentro del if ' + musica)
}
console.log('fuera del if '+ musica)
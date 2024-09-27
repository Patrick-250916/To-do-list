// tres TIPOS DE FUNCIONES

// 1.funcion basica
function operador(one, two){  // Argumentos
    let result = one + two; // Parametros
    console.log(result);
};
operador(16, 9);

// 2. funcion Anonima
let anonimus = function(){
    console.log(`Hola soy una funcion anonima`);
}
anonimus()

// 3.funcion Arrow con Flecha => 
let resta = (one, two)=>{
    let number = one - two;
    console.log(number);
}
resta(16, 9);

// Funciona solo un parametro o argumento LE QUITAMOS LOS ()
const meLlamas = celular => console.log(`Hola recibiendo la solicitud ${celular}`);
meLlamas('bebe123');
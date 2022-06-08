//callbacks

//Funções aceitam qualquer tipo de dado como argumento

function imprimirDado(dado){
    console.log('outras tarefas');
    console.log(dado());
}

imprimirDado(function(){
    return 'Hello world'
})
//Callback significa 'chame de volta'
/* é uma função que é colocada 
dentro de outra função
e depois de algum tempo ela 
vai ser chamada de volta */


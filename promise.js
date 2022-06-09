let aceitar = true //controle

console.log('pedir uber');
const promessa = new Promise((resolve, reject)=>{
    if(aceitar){
        return resolve('pedido aceito')
    }
    return reject('pedido negado')
})
promessa
    .then(result => console.log(result))
    .catch(erro=> console.log(erro))
    .finally(()=> console.log('finalizada'))

console.log('aguardando');
function pegarUssario(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 11);
            if (numero > 5) {
                resolve(`Número ${numero} é maior que 5`);
            } else {
                reject(`Número ${numero} é menor ou igual a 5`);
            }
        }, 2000);
    });
}

// const result = pegarUssario()
// result.then(msg => console.log(msg))
async function mostrarUsuario(){
    try{
    const usuario = await pegarUssario()
    console.log(usuario)
    }catch(err){
        console.error(err)
    }    
}
mostrarUsuario()
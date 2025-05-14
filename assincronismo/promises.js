// function login(usuario, senha) {
//     return new Promise((resolve, reject)=> {
//         //executar a minha funçao assincrona
//         setTimeout(() => {
//         if(usuario == 'kaua' && senha === 'teste123') {
//             resolve('Login realizado com sucesso')
//          } else {
//             reject('erro no login')
//           }
//     },2000)
  
// })
// }
// const result = login('kaua', 'teste123')

// console.log(result)

// result.then(msg => console.log(msg)).catch(err => console.log(err))

const tarefa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('tarefa 1')
    }, 2000)
})
const tarefa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('tarefa 2')
    }, 4000)
})
const tarefa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('tarefa 3')
    }, 6000)
})

Promise.all([tarefa1, tarefa2, tarefa3]).then
(resultados => console.log('tudo finalizado')
    )

    Promise.race([tarefa1, tarefa2, tarefa3]).then(
        resultado => console.log('a primeira a terminar foi: ',resultado)
    )
    

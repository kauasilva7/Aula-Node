const http = require('http')

const PORTA = 8000  

const server = http.createServer((req, res) => {
   const rota = req.url
   if(rota == '/soma'){
    const resultado = somar(1,2)
    res.end(`O resultado da soma é: ${resultado}`)
   } else if (rota == '/diminuir'){
    const resultado = diminuir(1,2)
    res.end(`O resultado da subtração é: ${resultado}`)
   } else if (rota == '/dividir'){
    const resultado = dividir(1,2)
    res.end(`O resultado da divisão é: ${resultado}`)
   } else if (rota == '/multiplicar'){
    const resultado = multiplicar(1,2)
    res.end(`O resultado da multiplicação é: ${resultado}`)
   } 



}

)

server.listen(PORTA, ()=> {
    console.log(`O servidor esta rodando na porta ${PORTA}`)
})

function somar (num1, num2){
    return num1 + num2
}
function diminuir (num1, num2){
    return num1 - num2
}
function dividir (num1, num2){
    return num1 / num2
}
function multiplicar (num1, num2){
    return num1 * num2
}
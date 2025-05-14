// console.log(1)

// setTimeout(() => {console.log(2)}, 2000)


// console.log(3)

// async function pedirPizza(callback, sabor){
//     console.log(`Fazendo uma pizza de sabor${sabor}`)
//     setTimeout(()=>{console.log('Pizza pronta'),callback()}, 5000)
    
// }

// function comerPizza(){
//     console.log("Comendo PIzza")
// }

// pedirPizza(comerPizza, ' calabresa')






// function passo1(callback){
//     setTimeout(()=>{
//         console.log('passo1')
//         callback()
//     }, 1000)
// }

// function passo2(callback){
//     setTimeout(()=>{
//         console.log('passo2')
//         callback()
//     }, 2000)
// }

// function passo3(callback){
//     setTimeout(()=>{
//         console.log('passo3')
//         callback()
//     }, 3000)
// }

// passo1(()=>{
//     passo2(()=>{
//         passo3(()=>{console.log('fim')})
//     })
// })




function PrepararMacarrao(callback){
    setTimeout(()=>{
        console.log('PreparaMacarrao')
        callback()
    }, 1000)
}

function FerverAgua(callback){
    setTimeout(()=>{
        console.log('Fervendo a agua')
        callback()
    }, 2000)
}

function CozinharMacarrao(callback){
    setTimeout(()=>{
        console.log('Cozinhando o macarrão')
        callback()
    }, 3000)
}

function EscorrerAgua(callback){
    setTimeout(()=>{
        console.log('Escorrendo a agua')
        callback()
    }, 4000)
}

function ServirPrato(callback){
    setTimeout(()=>{
        console.log('servindo o prato')
        callback()
    }, 5000)
}

PrepararMacarrao(()=>{
    FerverAgua(()=>{
        CozinharMacarrao(()=>{
            EscorrerAgua(()=>{
                ServirPrato(()=>{console.log('Seu prato está servido')})
            })
        })
    })
})


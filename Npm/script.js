import  {express} from 'express';
function kmParaMilha(km){
   return km * 0.621371;  

}


function milhaParaKm(milha){
    return milha / 0.621371;
}


function pesParaMetro(pes){
    return pes * 0.3048;
}


function metrosParaPé(metros){
    return metros / 0.3048;
}


function polegadaParaCentimetro(polegada){
   return polegada * 2.54;
}


function centimetroParaPolegada(centimetro){
    return centimetro / 2.54;
}

export default { 
    kmParaMilha,
    milhaParaKm,
    pesParaMetro,
    metrosParaPé,
    polegadaParaCentimetro,
    centimetroParaPolegada,
};
const funcoes = require('teste-sanai') 
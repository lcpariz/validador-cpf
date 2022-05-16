// FUNÇÃO VERIFICA CPF
function verificaCPF(cpf) {
    var numeros = 0;
    for(let i = 0; i < 9; i++) {
        // MULTIPLICANDO CADA DIGITO DO CPF E SOMANDO
        numeros += parseInt(cpf.charAt(i)) * (10 -i);
    }
    verificar = numeros % 11;
    // CONDICIONAL PRIMEIRO DIGITO
    if(verificar < 2) {
        digitoVerificador = 0;
        if(digitoVerificador != parseInt(cpf.charAt(9))) {
            primeiroDigito = false;
        } else {
            primeiroDigito = true;
        }
    } else {
        digitoVerificador = 11 - verificar;
        if(digitoVerificador == parseInt(cpf.charAt(9))) {
            primeiroDigito = true;
        } else {
            primeiroDigito = false;
        }
    } 
    console.log("Digito verificador 1 " + digitoVerificador);
    
    // CONDICIONAL SEGUNDO DIGITO VERIFICADOR
    numeros = 0;
    digitoVerificador = 0;
    verificar = 0;
    for(let i = 0; i < 10; i++) {
        // MULTIPLICANDO CADA DIGITO DO CPF E SOMANDO
        numeros += parseInt(cpf.charAt(i)) * (11 -i);
    }
    verificar = numeros % 11;
    console.log("Resto da divisão " + verificar);
    if(verificar < 2) {
        digitoVerificador = 0;
        if(digitoVerificador != parseInt(cpf.charAt(10))) {
            segundoDigito = false;
        } else {
            segundoDigito = true;
        }
    } else {
        digitoVerificador = 11 - verificar;
        if(digitoVerificador == parseInt(cpf.charAt(10))) {
            segundoDigito = true;
        } else {
            segundoDigito = false;
        }
    }
    console.log ("primeiroDigito " + primeiroDigito + 
     " segundoDigito " + segundoDigito);
    console.log("Digito verificador 2 " + digitoVerificador);
    if(primeiroDigito && segundoDigito === true) {
        return true;
    } else {
        return false;
    }
}   


function validarCPF() {
    // LIMPANDO RETORNO PARA USUÁRIO
    document.getElementById("error").style.display = "none";
    document.getElementById("success").style.display = "none";
    
    // ENTRADA CPF
    var cpf = document.getElementById("cpf-input").value;
    console.log(cpf);
    
    // VERIFICAÇÃO SE POSSUI APENAS NÚMEROS
    if(isNaN(cpf)) {
        document.getElementById("error").style.display = "block";
    } else {
        var retornoCPF = verificaCPF(cpf);
        if(retornoCPF === true) {
            document.getElementById("success").style.display = "block";
        }
        else {
            document.getElementById("error").style.display = "block";
        }
    }
    console.log(retornoCPF);
}
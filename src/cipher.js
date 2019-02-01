let cipher = {};

//Decisão do usuário: Codificar frase
let encodeBtn = () => {
    document.getElementById("code").classList.remove("hide"); 
    document.getElementById("decode").classList.add("hide");
}

//Decisão do usuário: Descodificar frase
let decodeBtn = () => {
    document.getElementById("decode").classList.remove("hide");
    document.getElementById("code").classList.add("hide");   
}    



//Função para botão Codificar
let encode = () => {
    let phraseTyped = document.getElementById("phrase").value;
    let displacement = document.getElementById("desloc").value;
    let result = cipher.encode(phraseTyped, displacement);
    document.getElementById("phraseEncoded").innerHTML = result;
}

cipher.encode = (string, offset) => {
    let finalPhrase = [];
    let deslocChar = "";
    let cipherChar = "";
    offset = parseInt(offset);
    
    for (let i in string){
        let char = string.charCodeAt(i);
        char = parseInt(char);
        while (offset < 0){
         offset += 26;   
        }    
        if(char > 64 && char < 91){ 
            deslocChar = (((char - 65) + offset) % 26) + 65;
            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase.push(cipherChar);
        }
        else if (char > 96 && char < 123) {
            deslocChar = (((char - 97) + offset) % 26) + 97;
            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase.push(cipherChar);
        }
        else {
            cipherChar = String.fromCharCode(char);
            finalPhrase.push(cipherChar);
            }
    }
    return finalPhrase.join('');
}



//Função para botão descodificar
let decode = () => {
    let phraseCoded = document.getElementById("codedPhrase").value;
    let code = document.getElementById("deslocCode").value;
    let resultado = cipher.decode(phraseCoded, code);
    document.getElementById("phraseDecoded").innerHTML = resultado;
}

cipher.decode = (string, offset) => {
    let finalPhrase = [];
    let deslocChar = "";
    let cipherChar = "";

    for (let i in string){
        let char = string.charCodeAt(i);
        char = parseInt(char);
        offset = parseInt(offset);
        while (offset < 0){
            offset += 26;   
           }  
        if (char > 64 && char < 91) {
            deslocChar = (((char - 90) - offset) % 26) + 90;
            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase.push(cipherChar);
        }
        else if (char > 96 && char < 123) {
            deslocChar = (((char - 122) - offset) % 26) + 122;
            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase.push(cipherChar);
        }
        else {
            cipherChar = String.fromCharCode(char);
            finalPhrase.push(cipherChar);
        }
    }
    return finalPhrase.join('');
}


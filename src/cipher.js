/* window.cipher = {
  
};
*/
function encode(){
    let phraseTyped = document.getElementById("phrase").value;
    let displacement = document.getElementById("desloc").value;
    let result = cipher(phraseTyped, displacement);
    document.getElementById("phraseEncoded").innerHTML = result;
}

function cipher(phrase, desloc){
    let finalPhrase = "";
    
    for (let i = 0; i < phrase.length; i++){
        let deslocChar = "";
        let cipherChar = "";

        let char = phrase.charCodeAt(i);
        char = parseInt(char);
        desloc = parseInt(desloc);
        //let especial = phrase;
                
        if (char > 64 && char < 91) { 
            if (desloc % 26 == 0){
                deslocChar = (((char - 65 + 2) + desloc) % 26) + 65;
            }
            else {
                deslocChar = (((char - 65) + desloc) % 26) + 65;
            }
            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase = finalPhrase + cipherChar;
        }
        if (char > 96 && char < 123) {
            if (desloc % 26 == 0){
                deslocChar = (((char - 97 + 2) + desloc) % 26) + 97;
            }
            else {
                deslocChar = (((char - 97) + desloc) % 26) + 97;
            }
            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase = finalPhrase + cipherChar;
        }
        if (char == 32) {
            cipherChar = String.fromCharCode(32);
            finalPhrase = finalPhrase + cipherChar;
        }

    }
    return finalPhrase;
}

function decode(){
    let phraseCoded = document.getElementById("codedPhrase").value;
    let code = document.getElementById("deslocCode").value;
    let resultado = decodePhrase(phraseCoded, code);
    document.getElementById("phraseDecoded").innerHTML = resultado;
}

function decodePhrase(phrase, desloc){
    let finalPhrase = "";
    
    for (let i = 0; i < phrase.length; i++){
        let deslocChar = "";
        let cipherChar = "";
        
        let char = phrase.charCodeAt(i);
        char = parseInt(char);
        desloc = parseInt(desloc);
        //let especial = phrase;
                
        if (char > 64 && char < 91) { 
            if (desloc % 26 == 0){
                deslocChar = (((char - 90 - 2) - desloc) % 26) + 90;
        }
            else {
                deslocChar = (((char - 90) - desloc) % 26) + 90;
            }

            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase = finalPhrase + cipherChar;
        }
        if (char > 96 && char < 123) {
            if (desloc % 26 == 0){
                deslocChar = (((char - 122 - 2) - desloc) % 26) + 122;
            }
            else {
                deslocChar = (((char - 122) - desloc) % 26) + 122;
            }
            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase = finalPhrase + cipherChar;
        }
        if (char == 32 ) {
            cipherChar = String.fromCharCode(32);
            finalPhrase = finalPhrase + cipherChar;
        }
    }
    return finalPhrase;
}

/*

else {
                let teste = String.fromCharCode(char);
                finalPhrase = finalPhrase + teste;
        }

        
        else if (!string || !/^[a-zA-Z\s]*$/.test(string)) {
        especial = especial.charCodeAt(i);    
        deslocChar = parseInt(especial) + desloc;
        cipherChar = String.fromCharCode(deslocChar);
        finalPhrase = finalPhrase + cipherChar;
        }
        else if (char == 32) {
        cipherChar = " ";
        finalPhrase = finalPhrase + cipherChar;
        }
        */

 

    
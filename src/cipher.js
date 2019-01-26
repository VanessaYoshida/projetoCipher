/* window.cipher = {
  
};
*/

function cipher(phrase, desloc){
    let finalPhrase = "";

    for (let i = 0; i < phrase.length; i++){
        let deslocChar = "";
        let cipherChar = "";

        let char = phrase.charCodeAt(i);
        let especial = phrase.charCodeAt(i);
        char = parseInt(char);
        let desloc = parseInt(desloc);
                
        if (char > 64 && char < 91 && char != (char % 26 == 0)) { 
            deslocChar = (((char - 65) + desloc) % 26);
            if (char % 26 == 0){
                deslocChar = deslocChar + 3;
            }
            else {
                deslocChar = deslocChar + 65;
            }
            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase = finalPhrase + cipherChar;
        }
        else if (char > 96 && char < 123 && char != (char % 26 == 0)) {
            deslocChar = (((char- 97) + desloc) % 26);
            if (char % 26 == 0){
                deslocChar = deslocChar + 3;
            }
            else {
                deslocChar = deslocChar + 97;
            }
            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase = finalPhrase + cipherChar;
        }
        else if (especial > 127 && especial < 238) {
        deslocChar = (((especial - 128) + desloc) % 109);
        cipherChar = String.fromCharCode(deslocChar);
        finalPhrase = finalPhrase + cipherChar;
        }
        else if (char == 32) {
        cipherChar = " ";
        finalPhrase = finalPhrase + cipherChar;
        }
      
    }
    return finalPhrase;
}

function encode(){
    let phraseNormal = document.getElementById("phrase").value;
    let deslocamento = document.getElementById("desloc").value;
    let resultado = cipher(phraseNormal, deslocamento);
    document.getElementById("phraseEncoded").innerHTML = resultado;
}



 

    
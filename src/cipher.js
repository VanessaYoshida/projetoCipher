/* window.cipher = {
  
};
*/

function cipher(phrase, desloc){
    let finalPhrase = "";

    for (let i = 0; i < phrase.length; i++){
        let deslocChar = "";
        let cipherChar = "";

        let char = phrase.charCodeAt(i);
        if (char > 64 && char < 91 && char != (char % 26 == 0)) { 
            deslocChar = (((parseInt(char)- 65) + parseInt(desloc)) % 26) + 65;
            if (char = (char % 26 == 0)){
                deslocChar = deslocChar + 3;
            }
            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase = finalPhrase + cipherChar;
        }
        if (char > 96 && char < 123 && char != (char % 26 == 0)) {
            deslocChar = (((parseInt(char)- 97) + parseInt(desloc)) % 26) + 97;
            if (char = (char % 26 == 0)){
                deslocChar = deslocChar + 3;
            }
            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase = finalPhrase + cipherChar;
        }
        else {
        deslocChar = parseInt(char) + parseInt(desloc);
        cipherChar = String.fromCharCode(deslocChar);
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



 

    
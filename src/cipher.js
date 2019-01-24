/* window.cipher = {
  
};
*/

function cipher(phrase, desloc){
    console.log(phrase, desloc);
    let finalPhrase = "";
    for (let i = 0; i < phrase.length; i++){
        let char = phrase.charCodeAt(i);
        let deslocChar = parseInt(char) + parseInt(desloc);
        let cipherChar = String.fromCharCode(deslocChar);
        finalPhrase = finalPhrase + cipherChar;
    }
    return finalPhrase;
}

function encode(){
    let phraseNormal = document.getElementById("phrase").value;
    let deslocamento = document.getElementById("desloc").value;
    let resultado = cipher(phraseNormal, deslocamento);
    document.getElementById("phraseEncoded").innerHTML = resultado;
}

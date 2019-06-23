let cipher = {};

let conversion = (category) => {
    let phraseTyped = document.getElementById("phrase").value;
    let displacement = document.getElementById("desloc").value;
    let result = cipher.conversion(phraseTyped, displacement, category);
    document.getElementById("phraseEncoded").innerHTML = result;
}

cipher.conversion = (string, offset, category) => {
    let finalPhrase = [];
    let deslocChar = "";
    let cipherChar = "";
    offset = parseInt(offset);
    
    for (let i in string){
        let char = string.charCodeAt(i);
        char = parseInt(char);
        offset = parseInt(offset);
        while (offset < 0){
            offset += 26;   
        }    
        if(char > 64 && char < 91){ 
            deslocChar = category === 'codificar' ?
            (((char - 65) + offset) % 26) + 65 :
            (((char - 90) - offset) % 26) + 90;
            cipherChar = String.fromCharCode(deslocChar);
            finalPhrase.push(cipherChar);
        }
        else if (char > 96 && char < 123) {
            deslocChar = category === 'codificar' ?
            (((char - 97) + offset) % 26) + 97 :
            (((char - 122) - offset) % 26) + 122;
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

clean = () => {
    document.querySelector("#phrase").value = "";
    document.querySelector("#desloc").value = "";
    document.getElementById("phraseEncoded").innerHTML = "";
}    

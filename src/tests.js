
// Cifrar frase
var resultado = cipher.encode("aBc", 1);
if (resultado === "bCd") {
    console.log("Teste passou");
} else {
    console.log("A função cypher retornou um erro: Para abc deslocamento 1 retornou " + resultado);
}


var resultado = cipher.encode("z", 1);
if (resultado === "a") {
    console.log("Teste passou");
} else {
    console.log("A função cypher retornou um erro: Para abc deslocamento 1 retornou " + resultado);
}

var resultado = cipher.encode("A B", 1);
if (resultado === "B C") {
    console.log("Teste passou");
} else {
    console.log("A função cypher retornou um erro: Para abc deslocamento 1 retornou " + resultado);
}

// Decifrar frase
var resultado = cipher.decode("bCd", 1);
if (resultado === "aBc") {
    console.log("Teste passou");
} else {
    console.log("A função cypher retornou um erro: Para abc deslocamento 1 retornou " + resultado);
}

var resultado = cipher.decode("a", 1);
if (resultado === "z") {
    console.log("Teste passou");
} else {
    console.log("A função cypher retornou um erro: Para abc deslocamento 1 retornou " + resultado);
}

var resultado = cipher.decode("B C", 1);
if (resultado === "A B") {
    console.log("Teste passou");
} else {
    console.log("A função cypher retornou um erro: Para abc deslocamento 1 retornou " + resultado);
}
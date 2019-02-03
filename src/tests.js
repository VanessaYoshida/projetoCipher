
// Cifrar frase
var resultado = cipher.encode("aBc", 1);
if (resultado === "bCd") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para aBc deslocamento 1 retornou ${resultado}');
}

var resultado = cipher.encode("z", 27);
if (resultado === "a") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para z deslocamento 27 retornou ${resultado}');
}

var resultado = cipher.encode("A B", 53);
if (resultado === "B C") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para A B deslocamento 53 retornou ${resultado}');
}

// Cifrar frase negativo
var resultado = cipher.encode("M", -10);
if (resultado === "C") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para M deslocamento -10 retornou ${resultado}');
}

var resultado = cipher.encode("M", -53);
if (resultado === "L") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para M deslocamento -53 retornou ${resultado}');
}


var resultado = cipher.encode("M", -2599);
if (resultado === "N") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para M deslocamento -2599 retornou" ${resultado}');
}
 
// Decifrar frase
var resultado = cipher.decode("bCd", 1);
if (resultado === "aBc") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para bCd deslocamento 1 retornou ${resultado}');
}

var resultado = cipher.decode("a", 53);
if (resultado === "z") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para a deslocamento 53 retornou ${resultado}');
}

var resultado = cipher.decode("B C", 1);
if (resultado === "A B") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para B C deslocamento 1 retornou ${resultado}');
}

// Decifrar frase negativo
var resultado = cipher.decode("zAb", -1);
if (resultado === "aBc") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para zAb deslocamento -1 retornou ${resultado}');
}

var resultado = cipher.decode("cd E", -53);
if (resultado === "de F") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para cd E deslocamento -53 retornou ${resultado}');
}

var resultado = cipher.decode("cde", -79);
if (resultado === "def") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para cde deslocamento -79 retornou ${resultado}');
}
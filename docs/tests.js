
// Cifrar frase
let resultTest1 = cipher.conversion("aBc", 1, "codificar");
if (resultTest1 === "bCd") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para aBc deslocamento 1 retornou ${resultTest1}');
}

let resultTest2 = cipher.conversion("z", 27, "codificar");
if (resultTest2 === "a") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para z deslocamento 27 retornou ${resultTest2}');
}

let resultTest3 = cipher.conversion("A B", 53, "codificar");
if (resultTest3 === "B C") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para A B deslocamento 53 retornou ${resultTest3}');
}

// Cifrar frase negativo
let resultTest4 = cipher.conversion("M", -10, "codificar");
if (resultTest4 === "C") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para M deslocamento -10 retornou ${resultTest4}');
}

let resultTest5 = cipher.conversion("M", -53, "codificar");
if (resultTest5 === "L") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para M deslocamento -53 retornou ${resultTest5}');
}


let resultTest6 = cipher.conversion("M", -2599, "codificar");
if (resultTest6 === "N") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para M deslocamento -2599 retornou" ${resultTest6}');
}
 
// Decifrar frase
let resultTest7 = cipher.conversion("bCd", 1, "descodificar");
if (resultTest7 === "aBc") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para bCd deslocamento 1 retornou ${resultTest7}');
}

let resultTest8 = cipher.conversion("a", 53, "descodificar");
if (resultTest8 === "z") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para a deslocamento 53 retornou ${resultTest8}');
}

let resultTest9 = cipher.conversion("B C", 1, "descodificar");
if (resultTest9 === "A B") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para B C deslocamento 1 retornou ${resultTest9}');
}

// Decifrar frase negativo
let resultTest10 = cipher.conversion("zAb", -1, "descodificar");
if (resultTest10 === "aBc") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para zAb deslocamento -1 retornou ${resultTest10}');
}

let resultTest11 = cipher.conversion("cd E", -53, "descodificar");
if (resultTest11 === "de F") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para cd E deslocamento -53 retornou ${resultTest11}');
}

let resultTest12 = cipher.conversion("cde", -79, "descodificar");
if (resultTest12 === "def") {
    console.log("Teste passou");
} else {
    console.log('A função cypher retornou um erro: Para cde deslocamento -79 retornou ${resultTest12}');
}
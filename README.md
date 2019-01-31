Projeto Cipher - Vanessa Alexsandra Yoshida de O Murakami

# Cifra de César

## Objetivo do Cipher
O Cipher foi deselvolvido com o propósito de codificar e descodificar um texto. Nele o usuário precisa digitar uma mensagem e também um número de deslocamento para conseguir codificar essa mensagem. 
Ele funciona basicamente assim: coletamos a mensagem que foi inserida, e depois deslocamos as letras conforme o número que o usuário digitar. 
Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Então é o usuário que vai decidir quantas casas ele quer deslocar. Isso é interessante pois se torna uma codificação mais segura.
E além da opção de codificar, o Cipher também descodifica mensagens. Só que para isso, o usuário já precisa ter a mensagem codificada e saber qual o número correto de deslocamento que foi utilizado, senão não irá funcionar.
O usuário pode passar uma mensagem codificada para alguém e passar o número de deslocamento, assim a pessoa poderá entrar no site e descodificar a mensagem. Legal né?

## Como utilizar o Cipher
O usuário deve entrar no site e escolher se quer codificar uma mensagem ou se quer descodificar alguma mensagem. Lembrando: Se o usuário desejar descodificar uma mensagem, ele precisa ter os dados corretos, que são: a mensagem codificada e o número de deslocamento que foi utilizada para codificar o texto.
Na tela principal terá dois botões para escolher essas opções acima citadas.
A qualquer momento o usuário pode clicar em qualquer um dos botões.

## Diagrama de Bloco
![Diagrama de Bloco](https://github.com/VanessaYoshida/projetoCipher/blob/master/src/img/DiagramaCipher.png)

## Exemplo de usuário que precisa do Cipher

O aniversário da sua mãe está se aproximando e você está organizando uma festa
surpresa. Para manter a festa em segredo foi criado um grupo de Whatsapp com
amigos e familiares. O problema é que as vezes sua mãe utiliza o seu celular
e pode ser que ela veja as suas mensagens. Como a festa é surpresa, você
decide criar uma aplicação que permita enviar mensagens criptografadas e depois
descriptografar. Então agora é a hora de aplicar os seus super poderes 😎

## Cipher foi criado com o método Cifra de César

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.
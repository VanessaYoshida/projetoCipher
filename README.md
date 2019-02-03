Projeto Cipher - Vanessa Yoshida 

# Cifra de César

## Objetivo do Cipher
O Cipher foi deselvolvido com o propósito de codificar e descodificar uma mensagem.
Nele o usuário precisa digitar uma mensagem e também um número de deslocamento para conseguir codificar essa mensagem. 
Ele funciona basicamente assim: coletamos a mensagem que foi inserida, e depois deslocamos as letras conforme o número que o usuário digitar. 
Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

No exemplo acima a letra A por exemplo, andou três letras do alfabeto, se tornando a letra D. Então podemos enviar uma mensagem para outra pessoa onde a letra D significa A, e assim por diante com todas as letras da mensagem. Para a pessoa descifrar o código é só dizer para ela qual o número de deslocamento, e então ela tem que voltar essa quantidade de casas e descobrir a mensagem que foi enviada. Mas imagina se a pessoa quer cifrar com deslocamento de 22 casas? Para quem vai descifrar, é um processo bem complicado e demorado. Então desenvolvemos esse codificador que faz isso para o usuário, ele pode digitar a mensagem, escolher o número de deslocamento e apertar o botão de codificar. Pronto, a mensagem já estará codificada. Fácil né?
Então é o usuário que vai decidir quantas casas ele quer deslocar. Isso é interessante pois se torna uma codificação mais segura.
E além da opção de codificar, o Cipher também descodifica mensagens. Só que para isso, o usuário já precisa ter a mensagem codificada e saber qual o número correto de deslocamento que foi utilizado, senão não irá funcionar.
O usuário pode passar uma mensagem codificada para alguém e passar o número de deslocamento, assim a pessoa poderá entrar no site e descodificar a mensagem em instantes. 

## Como utilizar o Cipher
O usuário deve entrar no site e escolher se quer codificar uma mensagem ou se quer descodificar alguma mensagem. Lembrando: Se o usuário desejar descodificar uma mensagem, ele precisa ter os dados corretos, que são: a mensagem codificada e o número de deslocamento que foi utilizada para codificar o texto.
O Cipher foi desenvolvido dessa maneira, porque estamos pensando em como ele pode ser útil para o usuário. Pensamos em dois tipos de usuários: quem vai codificar uma mensagem e enviar para outra pessoa, e também o usuário que recebeu a mensagem codificada e quer descodificar. Por isso na tela principal terá dois botões para escolher essas opções acima citadas. Quem entrar no site, decide qual o tipo de ação que quer fazer, e ela entrará já na opção desejada. Mas caso ela também queira trocar de ação (por exemplo, ela acabou de descodificar uma mensagem, e quer dar uma resposta para a outra pessoa, ela pode entrar agora no codificar), clicando no botão acima que deseja, e o Cipher já troca de categoria. 
A qualquer momento o usuário pode clicar em qualquer um dos botões.
O Cipher foi feito dessa forma pensando em dois tipos de usuários:
Quem envia a mensagem codificada e quem recebe a mensagem descodificada. 
Podem ser usuários de todos os tipos, por exemplo pessoas que querem fazer brincadeiras ou mandar mensagens ocultas.

## Requisitos
O Cipher foi programado em ES6 e de acordo com o site [ES6 e o suporte dos navegadores](http://www.timeraposa.com.br/2017/12/es6-e-o-suporte-dos-navegadores/) ES6 não é suportado por navegadores mais antigos, que foram desenvolvidos antes do seu lançamento. Esses navegadores mais antigos foram desenvolvidos para se adaptar à versão do JavaScript naquela época (que era a ES5.1). Se você tentar rodar seu código ES6 em um navegador antigo, ele não funcionará.

## Diagrama de Bloco
Segue abaixo o Diagrama de Blocos de como o Cipher funciona. 

![Diagrama de Bloco](https://github.com/VanessaYoshida/projetoCipher/blob/master/src/img/DiagramaCipher.png)

## Exemplos de usuário que precisa do Cipher
Exemplo 1:
O aniversário da sua mãe está se aproximando e você está organizando uma festa
surpresa. Para manter a festa em segredo foi criado um grupo de Whatsapp com
amigos e familiares. O problema é que as vezes sua mãe utiliza o seu celular
e pode ser que ela veja as suas mensagens. Como a festa é surpresa, você
pode usar o Cipher para enviar mensagens criptografadas e depois seus familiares
descriptografarem.

Exemplo 2:
Você quer mandar uma mensagem bonita para sua esposa, mas para ficar engraçado você pode mandar uma mensagem criptograda para ela e pedir para ela descriptografar. Ela vai adorar s2

Exemplo 3:
Você quer criar uma senha para o instagram mas está sem idéias, você pode testar alguns tipos e escolher o que você vai lembrar melhor. Mas não se esqueça viu? kkk
QUalquer coisa, anote sua frase e o deslocamento em um diário, por via das dúvidas.

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

## Como o Cipher foi programado
O usuário terá duas opções: Codificar ou Descodificar. 
Tem uma div para mostrar ou a tela de codificar ou a tela para descodificar uma mensagem, onde ambas estarão ocultas aguandando o usuário chamá-las. 
Quando ele clicar em um dos botões de sua preferêcia, ele entrará em uma execução que está programada em cipher.js. Dependendo da escolha do usuário, ele entrará em uma das funções: encodeBtn ou decodeBtn, essas funções fazem aparecer uma das div's para a pessoa preencher os dados, e ao mesmo tempo faz a outra div permanecer/ficar oculta. 
Nessa tela que aparecer, o usuário digita a mensagem e o deslocamento. Quando ele clicar para executar a ação de codificar / descodificar, ele chamará a função encode(); ou a função decode();. 
As funções encode / decode, recebem a mensagem que o usuário digitou e armazena em uma variável. E recebe o deslocamento e armazena em uma variável. 
Depois ele passa esses valores para outra função: que se chama cipher.encode ou cipher.decode. Essas funções vão fazer o processo de codificação ou descodificação, e vão passar o resultado para as funções anteriores (encode / decode), que vai receber o resultado e entregar esse resultado na tela.



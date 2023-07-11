console.log('\n ** Hoje vamos ver métodos de vetores, objetos e funções anônimas **');
console.log('\n ** Vamos criar um vetor (note que usamos colchetes). Em seguida, vamos percorrer cada um dos valores do vetor e imprimi-los utilizando FOREACH: ');

let listaVetor = ['banana', 'maçã', 'pera', 'morango', 'melancia', 'uva']
let itemNumber=1


 listaVetor.forEach((item) => {
    console.log(`Fruta ${itemNumber}: ${item}`); //STRING TEMPLATE LITERAL + FUNÇÃO SETA
    itemNumber++;
 });

 console.log('\n ** Agora, vamos filtrar os itens que começam com a letra M - utilizando método FILTER ');

 let itensLetraM = listaVetor.filter( function(item) {    //função anônima
    return item.startsWith('m');
 });


itensLetraM.forEach((item) => {     //função seta
    console.log(` ${item}`);
    
 });

console.log('\n ** Agora vamos criar um vetor de numeros.. **');
let numeros = [7,5,3,9,6,2];

numeros.forEach((numero)=>{console.log(numero)});   //função seta

console.log('\n ** Agora vamos dobrar os valores do vetor utilizando MAP **');

let numerosDobrados = numeros.map(function(numero) {return numero * 2;});

numerosDobrados.forEach((numero)=>{console.log(numero)});  //função seta

console.log('Agora vou retirar o ultimo elemento utilizando POP');
numeros.pop();
numeros.forEach((numero)=>{console.log(numero)});   //função seta

console.log('Agora vou incluir um elemento utilizando PUSH');
numeros.push('olá eu sou uma string no array de numeros. isso é permitido no javascript devido aos tipos dinâmicos!');
numeros.forEach((numero)=>{console.log(numero)});   //função seta

console.log('Agora vamos criar um objeto chamado Endereço. note que usamos chaves:');
// criando objeto utilizando OBJECT LITERALS
let endereco={
   Rua: 'Moreira de Godoi' ,
   Numero: '876' ,
   CEP: '897897777' ,
   Bairro: 'Ipiranga',
   Cidade: 'Sao Paulo'
}

console.log('Eu poderia utilizar console.log para imprimir cada um dos valores, mas vou fazer uma função que usa o FOR..IN: \n')

//primeiro vou declarar uma funcao que percorre e imprime cada nome de campo e valor
function mostraEndereco(endereco){
   for (let campo in endereco)
       console.log(campo,endereco[campo]);

}

mostraEndereco(endereco);

console.log('\n tambem podemos criar objetos utilizando funções:')

//Factory function - função fábrica
function criarEndereco(rua, numero, cep, bairro, cidade){
   return { rua, numero, cep, bairro, cidade };
}

//criando um novo objeto chamando a função fábrica:
let endereco2 = criarEndereco('Nazaré','304', '12345678','Mooca',  'Rio de Janeiro');

//imprimindo os valores:
console.log('\n endereço criado utilizando fábrica: \n')
mostraEndereco(endereco2);


//Constructor function - função construtor
//atenção: pascal-case, uso de THIS, ponto e virgula
function Endereco(rua, numero, cep, bairro, cidade){
   this.Rua = rua;
   this.numero = numero;
   this.cep = cep;
   this.bairro = bairro;
   this.cidade = cidade;
}

//chama da função construtor:
let endereco3 = new Endereco('das laranjas', '111', '98765438', 'Penha', 'Curitiba');

//imprimindo os valores:
console.log('\n endereço criado utilizando construtor: \n')
mostraEndereco(endereco2);

console.log('\n também podemos ter listas de objetos \n');

let produtos = [
   { id: 1 , nome: 'sapato' , cor: 'preto'},
   { id: 2 , nome: 'sandalia' , cor: 'marron'},
   { id: 3 , nome: 'chinelo' , cor: 'azul'}
]

// percorrendo cada propriedade e cada valor de cada objeto do veotr produtos:
produtos.forEach(produto => mostraEndereco(produto));
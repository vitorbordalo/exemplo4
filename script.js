// //WHILE

// let a=0;
// while(a <10){
//     // console.log("o valor de é:",a)
//     //string literais
//     console.log(`O valor do while ${a}`)
//     a++;
// }

// //do while
// let b=0;
// do{
//     // console.log("do while",b)
//     console.log(`do while ${b}`)
//     b++;
// }while(b <100)

// JOGO DA ADVINHAÇÃO

//declarando as variaveis
// let palpite;
// const sorteio =Math.floor(Math.random() * 10)+1;

// do{
//     palpite = parseInt(prompt("Escolha um numero entre 1 e 10"));
//     if(palpite !== sorteio){
//         alert(`Tente novamante`)
//     }
// }while(palpite !== sorteio)

// alert(`Parabéns Você Ganhou ${palpite}`)

//FUNÇÕES 
// function saudacao(nome){
//     console.log("Seja Bem-Vindo",nome)
// }
// saudacao("fiap")
// function semaforo(){
//     let sinal1 = "Verde"
//     let sinal2 = "Amarelo"
//     let sinal3 = "Vermelho"

//     alert(`O semaforo ${sinal1}`)
//     alert(`O semaforo ${sinal2}`)
//     alert(`O semaforo ${sinal3}`)
// }
// semaforo();

//VAR acessa dentro e fora, LET só acessa dentro do bloco

// function exemplo(){
//     if (true){
//         var num=100;
//         console.log("Dentro do bloco if", num)
//     }
//     console.log("Dentro do bloco da função", num)
// }
// exemplo();

//CRIE UM PROGRAMA PARA VERIFICAR SE UM NÚMERO É PAR 
function verificaPar(numero){
    if (numero % 2 === 0){
        console.log("O numero é par")
    }
   else{
    console.log("o nuumero é impar")
   }
}
verificaPar(22)
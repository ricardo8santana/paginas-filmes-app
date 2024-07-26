// Função de declaração sem parâmetros
function saudacao(){
    return("Good morning!")
}
//alert(saudacao());

//Função de declaração com parâmetros
function saudacaoNomeada(nome){
    return `Good mornig, ${nome}`
}
//alert(saudacaoNomeada("Riccardo"))

//Função aninhadas
/*
function soma(a, b){
    return(a+b)
}
function sub(a){
    return(soma(4,5) - a)
}
*/
/*
alert(soma(4, 5, 7))
function soma(a, b, c){
    let s = (a + b)

    function sub(){
        return s-c
    }
        return sub()
}

//Funções de expressão
/*
 alert(mult(2, 6))
 */
const mult = function(a, b){
    return (a * b) 
}


 // Arrow Function

 const verificaPar = (n) => {
    let r = ''
    n % 2 == 0 ? r = `${n} é par` : r = `${n} é ímpar`
    return r;
 }
// alert(verificaPar(2) + verificaPar(3))

const vParReduzida = (n) => n % 2 == 0 ? `${n} é par`: n = `${n} é par`
 
      
//alert(vParReduzida(6) + vParReduzida(96))

function PcGamer(led, placaVideo, processador){
    this.cled = led
    this.cPlacaVideo = placaVideo
    this.cProcessador = processador

}
PcGamer.prototype.idLed = function(){
    if(this.led == true){
        this.led=false
    }else{
        this.led=true
    }
}
const pc1 = new PcGamer(true, "GTX", "Celeron")
const pc2 = new PcGamer(false, "RTX", "Pentium")

//1º
const dobro = (num) => {
    let d = num * num
    return d
}
alert(dobro(5))
  
//2º

function   valor (a, b, c, d, e ){
  let = a, b, c, d, e
      
    return ( a + b + c + d + e)/5
}
alert(valor(1,2,3,4,5,6))

//3º

const quadrado = (num) => {
    let q = num * num
    return q
}
 alert(quadrado(5))
 //4º
 function Livro (titulo, autor, ano){
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
   
  }
  Livro.prototype.detalhes = function(){
    const d = this.titulo + this.autor
    return d;
  }
  Livro.prototype.anoAtual = function(){
    return this.ano;
  }
   const Livro2 = new Livro("Mindset", "Carol Dweck", 2017);
   alert(Livro2.detalhes());

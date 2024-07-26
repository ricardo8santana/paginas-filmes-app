let nome = document.getElementById("name")
let idade = document.getElementById("year")
let result = document.getElementById("result")
let ani = document.getElementById("ani")
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let op  = document.getElementById("valOp")
let resultOp = document.getElementById("resultOp")

const calcIdade = () =>{
   let ano = 2024 - idade.value

    ani.checked === true ? ano : ano -=1

   /* if(ani.checked === true){
   ano
  }else{
  ano -= 1
   */

    if(nome.value === " && idade.value === "){

        result.textContent = 'Por favor, preencha os campos'

    }else if(nome.value === "&& idade.value !=="){
            result.textContent = `Olá, ${nome.value}. Você nasceu em ${ano}`

    }else if(nome.value !== "&& idade.value ==="){
            result.textContent = `Olá, ${nome.value}.  por favor preencha sua idade ${ano}`
    
        
    }else{
        result.textContent = `Olá, ${nome.value}. Você nasceu em ${ano}`

    }
 }
 
 const soma = (a ,b) => a+b;
 const sub =  (a, b) => a-b;
 const mult = (a, b) => a*b;
 const div =  (a, b) => a/b;
 const expo = (a, b) => a**b;


 const operacao = () => {
    let n1 = parseFloat(num1.value)
    let n2 = parseFloat(num2.value)

    if(op.value ==='soma'){
        resultOp.textontent = `O result é: ${soma(n1, n2)}`

 }else if(op.value === 'subtracao'){
    resultOp.textContent = `O result é: ${sub(n1, n2)}`

 }else if(op.value === 'multiplicacao'){
    resultOp.textContent = `O result é: ${mult(n1, n2)}`
 }else if(op.value === 'divisao'){
    resultOp.textContent = `O result é: ${div(n1, n2)}`
 }else if(op.value === 'potenciacao'){
    resultOp.textContent = `O result é: ${expo(n1, n2)}`
 }
}

 
   
    
    



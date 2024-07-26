let quiz1 = document.getElementById("correto1")
let quiz2 = document.getElementById("correto2")
let quiz3 = document.getElementById("correto3")
let quiz4 = document.getElementById("correto4")
let quiz5 = document.getElementById("correto5")
let quiz6 = document.getElementById("correto6")
let quiz7 = document.getElementById("correto7")
let quiz8 = document.getElementById("correto8")
let quiz9 = document.getElementById("errado1")
let quiz10 = document.getElementById("errado2")
let quiz11 = document.getElementById("errado3")
let quiz12 = document.getElementById("errado4")
let quiz13 = document.getElementById("errado5")
let quiz14 = document.getElementById("errado6")
let quiz15 = document.getElementById("errado7")
let quiz16 = document.getElementById("errado8")
let RespostaOp = document.getElementById("RespostaOp")

let soma = 0
const pergunta = () =>{
   if(quiz1.checked ){
      soma += 1
   }if(quiz2.checked){
      soma += 1
   }if(quiz3.checked){
      soma += 1
   }if(quiz4.checked){
      soma += 1
   }if(quiz5.checked){
      soma += 1
   }if(quiz6.checked){
      soma += 1
   }if(quiz7.checked){
      soma += 1
   }if(quiz8.checked){
      soma +=1
   }
   alert(soma) 
   soma = 0
}
const desmacarInput = (input) =>{
   if(input === quiz1){
      quiz9.checked = false
   }else if(input === quiz9){
      quiz1.checked = false

   } else if(input === quiz2){
      quiz10.checked = false
   }else if(input === quiz10){
      quiz2.checked = false

   }else if(input === quiz3){
      quiz11.checked = false
   }else if(input === quiz11){
      quiz3.checked = false

   }else if(input === quiz4){
      quiz12.checked = false
   }else if(input === quiz12){
      quiz4.checked = false

   }else if(input === quiz5){
      quiz13.checked = false
   }else if(input === quiz13){
      quiz5.checked = false

   }else if(input === quiz6){
      quiz14.checked = false
   }else if(input === quiz14){
      quiz6.checked = false

   }else if(input === quiz7){
      quiz15.checked = false
   }else if(input === quiz15){
      quiz7.checked = false
   }else if(input === quiz8){
      quiz16.checked = false
   }else if(input === quiz16){
      quiz8.checked = false
   }

}

quiz1.addEventListener('click', () =>{
   desmacarInput(quiz1)
})

quiz9.addEventListener('click', () =>{
      desmacarInput(quiz9)
})

quiz2.addEventListener('click', () =>{
   desmacarInput(quiz2)
});
quiz10.addEventListener('click', () =>{
   desmacarInput(quiz10)
});

quiz3.addEventListener('click', () =>{
   desmacarInput(quiz3)
})

quiz11.addEventListener('click', () => {
   desmacarInput(quiz11)
})
quiz4.addEventListener('click', () => {
   desmacarInput(quiz4)
})
quiz12.addEventListener('click', () => {
   desmacarInput(quiz12)
})

quiz5.addEventListener('click', () => {
   desmacarInput(quiz5)
})
quiz13.addEventListener('click', () => {
   desmacarInput(quiz13)
})

quiz6.addEventListener('click', () => {
   desmacarInput(quiz6)
})
quiz14.addEventListener('click', () => {
   desmacarInput(quiz14)
})

quiz7.addEventListener('click', () => {
   desmacarInput(quiz7)
})
quiz15.addEventListener('click', () => {
   desmacarInput(quiz15)
})


quiz8.addEventListener('click', () => {
   desmacarInput(quiz8)
})
quiz16.addEventListener('click', () => {
   desmacarInput(quiz16)
})
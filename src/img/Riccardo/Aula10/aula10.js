/*
   1º exercicio
let x = parseInt(prompt("Digite um número"));
let y = parseInt(prompt("Digite outro número"));

if( x > 0 && y >0){
	alert("  primeiro quadrante");
}else if(x <0 && y>0){
    alert("  segundo quadrante");
}else if(x <0 && y<0){
    alert("  terceiro quadrante");
}else if(x < 0 && y <0){
    alert("  quarto quadrante");
}
    else alert("origem");

  2º exercicio
let j= parseInt(prompt("jogador1, escolha 1 = pedra, 2 = papel, 3 = tesoura"))
let g = parseInt(prompt("jogador2, escolha 1 = pedra,2  = papel,3 = tesoura"))


if (j == 1 && g == 2 ) {
    alert(" jogador2 ganhou")
} else if(j == 1 && g == 3){
    alert(" jogador1 ganhou")
}else if(j == 2 && g == 1){
    alert("jogador 1 ganhou")
} else if(j == 2 && g == 3){
    alert("jogador 2 ganhou")
}else if(j == 3 && g == 1){
    alert("jogador 1 ganhou")
}else if(j == 3 && g == 2){
    alert("jogador 2 ganhou")
}else if(j == g){
    alert("empates")
}


3º exercicio
let g = prompt("Escolha o gênero")
let c = prompt("qual sua idade")

if (g == "ação"){
    if ( c >= 18){
        alert("filme o Todo poderoso") 
    }else if(c >=16){
        alert("proximo filme mortal kombat ")
    }else if(c >=14){
        alert(" filme Sim Senhor")
    }else if(c >= 12){
        alert("proximo filme o homem aranha")
    }else if(c >=10){
        alert("Filme Duro de Matar")
    }
}
  if (g == "Animação"){
    if (c >= 18){
        alert("filme o Todo poderoso") 
    }else if(c >=16){
        alert("proximo filme mortal kombat ")
    }else if(c >=14){
        alert(" filme Sim Senhor")
    }else if(c >= 12){
        alert("proximo filme o homem aranha")
    }else if(c >=10){
        alert("Filme Duro de Matar")
    }
  }

  if (g == "Aventura"){
    if (c >=18){
        alert("Tom raider")
    }else if(c >=16){
        alert("proximo filme mortal kombat ")
    }else if(c >=14){
        alert(" filme Sim Senhor")
    }else if(c >= 12){
        alert("proximo filme o homem aranha")
    }else if(c >=10){
        alert("Filme Duro de Matar")
    }
  }
  if (g == "Comédia"){
    if (c >=18){
        alert("O Mentiroso")
    }else if(c >=16){
        alert("proximo filme mortal kombat ")
    }else if(c >=14){
        alert(" filme Sim Senhor")
    }else if(c >= 12){
        alert("proximo filme o homem aranha")
    }else if(c >=10){
        alert("Filme Duro de Matar")
    }
  }


 4º exercicio


let c = (prompt("Escolha unidades de medidas"))
let v = parseFloat(prompt("Digite o valor a ser convertido"))
if (c == "metros"){
    alert(" valor será", v * 100 )
   
}else if(c == "centimetros"){
    alert("valor será", v*1000 )
}
*/
  
/*
    1º
let ano = parseInt(prompt("Digite o ano  de nascimento"))
let anoAtual = parseInt(prompt("Ano Atual"))

if(ano >= 16){
    alert("Poderá votar")

}else if(ano <= 16){
    alert("não votar esse ano")
}  
   

 2º exercício
let m = parseInt(prompt("maçãs compradas"))
let t = parseFloat(prompt("Valor Total de Compras"))

if (m <= 12){
    alert("valor será", m * 0,30 )
}else if(m > 12){
    alert( "valor total será", t * 0,25)
}


3º
let anguloA = parseInt(prompt("Digite o ângulo A:"));
let anguloB = parseInt(prompt("Digite o ângulo B:"));
let anguloC = parseInt(prompt("Digite o ângulo C:"));
if(anguloA === 90 || anguloB === 90 || anguloC === 90 ){
	alert("Triângulo retângulo");
}else if(anguloA > 90 || anguloB > 90 || anguloC > 90){
	alert("Triângulo obtusângulo");
}else if(anguloA < 90 || anguloB < 90 || anguloC < 90){
	alert("Triângulo acutângulo");
}

4º
let combustivel = prompt("Digite 'G' para gasolina ou 'A' para álcool:");
let quantidade = parseInt(prompt("Quantos litros você deseja comprar?"));

let precoAlcool = (quantidade * 4.20);
let descAlcool_3 = (precoAlcool * 3) / 100;
let descAlcool_5 = ((precoAlcool * 5) / 100);

let precoGasolina = (quantidade * 5.15);
let descGasolina_4 = ((precoGasolina * 4) / 100);
let descGasolina_6 = ((precoGasolina * 6) / 100);


switch (combustivel) {
	case "A":
		if(quantidade <= 20){
			alert(`O valor total é de R$: ${precoAlcool - descAlcool_3}`);
		}else if(quantidade > 20){
			alert(`O valor total é de R$: ${precoAlcool - descAlcool_5}`);
		}
		break;
	case "G":
		if(quantidade <= 20){
			alert(`O valor total é de R$: ${precoGasolina - descGasolina_4}`);
		}else if(quantidade > 20){
			alert(`O valor total é de R$: ${precoGasolina - descGasolina_6}`);
		}
		break;
}

5º
let ano = parseInt(prompt("Digite um ano:"));

if ((ano % 4 === 0) && (ano % 100 !== 0)) {
	alert("O ano é bissexto");
}else if ((ano % 4 === 0) && (ano % 100 === 0) && (ano % 400 === 0)) {
	alert("O ano é bissexto");
} else alert("O ano não é bissexto");

*/
//1º

const number = [3,6,7,9,4,10];
let i = 0 

while (num[3,6,7,9,4,10]){
    if(num > number){
        number = num
    }
    contador ++
}else{
    alert("informe o maior número")
}
// 2º                                                                                      
const numbers = 59
let i = 0

while ()
//3º
let = num
while (i < 10) {
    text += "Soma deles " + i;
    i++;
  }
//4º
l //5 primeiros múltiplos de 3
let resultado = " ";


for (i = 0; i < 5; i++ ){ 
	resultado += (i * 3) + ", ";
}
alert(resultado);
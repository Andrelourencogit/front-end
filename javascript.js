//Converting Values
//pode ser implicito(a sera uma string)
var a = 12 +"";
//usando a função para converter
var b = String(a);
// usando Numer para converter para numero
var c = Number(a);
//data para milisegundo
var d = new Date("Mon, 18 Aug 2014 08:53:36 CDT");
+d //resultado será em milisegundo

//OBJETOS
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
}; 

  //ARRAYS
  var cars = ["Saab", "Volvo", "BMW"];
  var cars = new Array("Saab", "Volvo", "BMW");
  cars.push("FERRARI"); //add no fim
  cars.join(" * ");//retorna todo o conteudo separado pelo *
  cars.pop();//remove o ultimo elemnto
  cars.shift();//remove o primeiro elemento
  cars.unshift("Fiat");//add na primeira posição
  cars.reverse();//reverte o array


  var numbers = [45, 4, 9, 16, 25];
  var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

var sum = numbers.reduce(myFunction);

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value, index, array) {
  return total + value;
}


//DATE
var d = new Date();
/*getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()	Get the time. ECMAScript 5.*/


//BUTTON    
<button type="button" onclick="myFunction()">Try it</button>

//MATH
Math.round();

//FUCTION
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
   }
   function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
  }

//OUTPUT
document.getElementById("demo").innerHTML = 5 + 6;
document.write();
window.alert();
console.log();


////////////////////////////////////////
//funções uteis 
var e = "variavel tipo string"
var num = 100.412;
typeof e;//string
e.indexOf("tipo");//vai retorna o numero onde aparece a primeiira letra da palavra
e.lastIndexOf("locate");//retorana a posicao da ultima letra
e.slice(7, 13);//retorna o conteudo entre a posição 7 e 11
e.substr(7, 6);//um conteudo iniciando na posição 6 e com tamanho 6
            //se for negativo(substr(-7) o parametro ele pega as 7 ultimas 
e.length;
e.split(" ");//dividira a string a cada espaço vazio
e.replace("string","numero");//trocaria string por o nome numero
e.trim();//remove os espaços em branco desnecessarios numa string
parseInt(  );
e.toLowerCase();
e.toUpperCase();

num.toFixed(0)//vai arrendodar o numero...se tiver numero vai retornar a casa decimal 

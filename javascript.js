




alert("hola");

/*Uso de variables. Una variable funciona como recipiente
Almacena datos y sus datos pueden variar/cambiar*/

/*Las variables se pueden 
DECLARAR 		VAR NUMERO, LET NUMERO, CONST NOMBRE
INICIALIZAR		VAR NUMERO = 15 , LET MANZANAS = 15
Y MODIFICAR 	VAR NUMERO = 20 , LET MANZANAS = 20
*/


/*DECLARAMOS
*/
var numero;
let number;
const otro = "CAIN";  /*CONST SIEMPRE SE DEBE 
INICIALIZAR CUANDO SE DECLARA*/


/*INICIAMOS*/

numero = "30";

/*MODIFICAMOS*/

numero = "21";


alert(numero);





recipiente = "papel";
recipiente = "barbijo";


/*USO FUNCION ALERT. Nos permite mostrar algo en pantalla*/

alert(recipiente);


const nombre = "juan";
/* nombre = "pedro"; SALTA ERROR EN CONSOLA Y NO EJECTUTA*/

alert(nombre);

/*BUEN USO DE CONST = 3.1416*/


/*TIPOS DE DATOS
STRING ="", ''
NUMBER = 19, 5 , 40 
BOOLEAN = TRUE, FALSE O  0, 1
*/

/*
DATOS ESPECIALES
UNDEFINED
NULL
Nan 
*/


let mango, uva, naranja;
let cocodrilo ="animal", pez="oceano";


mango = "5";
mango = "carlo";

uva = 9;
naranja = 0;

alert(mango, uva, naranja);

 
alert(mango);
alert(uva);
alert("naranja");

alert(cocodrilo);
alert(pez);

let valor = null;

alert(valor);

let mouse, teclado;
mouse = "click"
teclado = 5;


alert( mouse * teclado);






/*USO DEL PROMPT*/

prompt("hola amigo, como te estas?");


let favanimal = prompt("como te llamas pibe?");

alert( " hola " + favanimal + " bienvenido "  );




/*OPERADORES EN JAVASCRIPT*/

/*OPERADORES DE ASIGNACION*/



/*ADICCION*/


let anum = 10;
anum += 5;

document.write(anum);

/*SUSTRACCION*/

let bnum = 10;
bnum -= 5;

document.write(bnum);

/*MULTIPLICACION*/


let cnum = 10;
cnum *= 5;

document.write(cnum);

/*DIVISION*/

let dnum = 10;
dnum /= 5;

document.write(dnum);

/*ASIGNACIONDERESTO*/

let fnum = 10;
fnum %= 4;

/*Nos arroja lo que sobra de una division si no es exacta*/

document.write(fnum);


/*EXPONENCIACION*/


let gnum = 5;
gnum **= 2;

document.write(gnum);

/*OPERADORES ARITMETICOS*/

/*SUMA*/


hnum = 10;
hanum = 5;

afinal = hnum + hanum;

alert(afinal);


/*DECREMENTO*/


inum = 10;
ianum = 5;

inum--; 	/*SE SUPONE QUE PRIMERO SE TIENE QUE ASIGNAR
Y DESPUES DECLARAR
PERO AQUI FUNCIONA EN AMBOS LADOS
ASI QUE RESTA 2 VECES*/
 
bfinal =  inum--;

alert(inum);





/*DIVISION*/


jnum = 10;
janum = 5;

cfinal = jnum / janum;

alert(cfinal);

/*EXPONENCIACION*/

knum = 5;
dfinal = knum**3; /*CUBO  */

alert(dfinal)

/*INCREMENTO*/


lnum = 10;
lanum = 5;

lnum++;		/*SE SUPONE QUE PRIMERO SE TIENE QUE ASIGNAR
Y DESPUES DECLARAR
PERO AQUI FUNCIONA EN AMBOS LADOS
ASI QUE RESTA 2 VECES*/
 
cfinal =  lnum++;

alert(lnum);





/*REMAINING*/

mnum = 10;
manum = 3;

dfinal = mnum%manum;

alert(dfinal);

/*RESTA*/

nnum = 10;
nanum = 5;
efinal = nnum - nanum;
alert(efinal);

/*NEGACION UNARIA*/

onum = 10;
oanum = 5;
ffinal = -onum;

alert(ffinal);

/*CONCATENACION*/

saludo ="¡hola pedro!";
pregunta = " ¿como estas?"

frase = saludo + pregunta;

document.write(frase);

num1 = "5";
num2 = "6";

document.write(num1 + num2);

num3 = "5";
num4 = 5;

/*result = "" + num3 + num4;*/

/*METODO DE CADENA CONCAT*/

result = num3.concat(num4);

document.write(result)


sentence1 = "me rasque las espalda";
sentence2 = sentence1 + " porque me picaba " + sentence1;

document.write(sentence2)


sentence3 = "pero mira como concateno";
sentence4 =  ` ${sentence3} bomba no? ` ;

document.write(sentence4);

htmlcode =  `<div>
<h1>Soy un titulo capo</h1>
</div>` ;

document.write(htmlcode)

 /*OPERADORES*/

/*OPERADORES DE COMPARACION*/

/*IGUALDAD ==*/
/*SON IGUALES?*/
let num = 1;
let num1 = 1;

document.write(num == num1); /*TRUE*/

let num2 = 2;
let num3 = 3;

document.write(num2 == num3);	/*FALSE*/


/*INIIGUALDAD  !=*/
/*SON DIFERENTES?*/

let num4 = 4;
let num5 = 5;

document.write(num4 != num5); /*TRUE*/

let num6 = "7"; 
/*INCLUSO SI EL VALOR NO ES 
DEL MISMO TIPO  */
let num7 = 7;

document.write(num6 != num7); /*FALSE*/

/*IDENTIDAD ===*/

let num8 = "7";
let num9 = 7;

document.write(num8 === num9); /*FALSE*/

let num10 = "JUAN";
let num11 = "JUAN";

document.write(num10 === num11); /*TRUE*/


/*NO IDENTIDAD !==*/
/*COMPARA SI SON ESTRICTAMENTE DIFERENTES*/

let num12 =  "90";
let num13 =  90;

document.write(num12 !== num13);/*TRUE*/

let num14 = 39;
let num15 = 39;

document.write(num14 !== num15);/*FALSE*/

/*MAYOR QUE*/

let num16 = 5;
let num17 = 9;

document.write(num16 > num17);/*FALSE*/

let num18 = 7;
let num19 = 5;

document.write(num18 > num19);/*TRUE*/


/*MENOR QUE*/

let num20 = 5;
let num21 = 9;

document.write(num20 < num21);/*TRUE*/

let num22 = 7;
let num23 = 5;

document.write(num22 < num23);/*FALSE*/

/*MENOR O IGUAL QUE*/

let num24 = 5;
let num25 = 5;

document.write(num24 <= num25);


/*MAYOR O IGUAL QUE*/

let num26 = 9;
let num27 = 11;

document.write(num26 >= num27);






/*OPERADORES LOGICOS*/


/* &  ||  !NOT */

let valor1 = true;

let valor2 = true;

// let resultado = true;

let resultado1 = valor1 && valor2;

let resultado2 = valor1 || valor2;

let resultado3 = !valor1

document.write(resultado3);
// &

document.write(true && false); //FALSE

document.write(false && false); //FALSE

document.write(true && true); //TRUE

// OR 

//DEVUELVE VERDADERO SI SE CUMPLE UNA DE LAS DOS
//CONDICIONES

let num1 = 8;
let num2 = 9;

afirmacion1 = num1 < num2; 
afirmacion2 = num1 > num2;

document.write(afirmacion1 || afirmacion2);

// NOT

let num3 =1, num4 =4;

afirmacion3 = num3 < num4;

// TRANSFORMA LA CONDICION DE TRUE A FALSE Y
// VICEVERSA
document.write(!afirmacion3);




//EJERCICIO1

 anum1 = 5;
 anum2 = 10;
 anum3 = 15;
 anum4 = 20;
 anum5 = 25;

		
// op = (anum1 < anum2 || anum2 < anum3) && (!(anum1 != anum2) && anum5 != anum3);

// document.write(op);


//EJERCICIO2

op = (anum5 > anum2 && anum4 < anum3) || (!(anum1 === anum2) || anum3 != anum3);



document.write(op);

// CAMEL CASE
/* Escribir la segund palabra en mayuscula
y las que le seguin cuando hay muchas palabras*/
//  document.getElementById()


// CONDICIONALES

//	IF, ELSE IF , ELSE IF


let nombre= prompt( "como te llamas?" );

if (nombre == "alexander" ){
	alert("hola rey, como va?")
	alert("tu nombre es " + nombre);
}

// PODEMOS PERMITIRNOS INDEFINIDOS ELSE´S IF

else if (nombre == "alexadner"){
	alert("tu nombre esta mal escrito amig");


}
else{
	alert("vos no sabes como te llamas amigao?");
}
;

let MoneyJhon = prompt("cuanto dinero tenes joni?");

// let MoneyDave = prompt("y vos davi?");

// let MoneyCharls = prompt("que dice mi charli?");


/*CONVERTIR STRING A NUMEROS*/

// MoneyJhon = parseInt(MoneyJhon);

if (MoneyJhon > 0.6 && MoneyJhon <  1){
	alert("comprate un agua rey");

	let vuelto = (MoneyJhon - 0.6);

	alert("este es tu vuelto "+vuelto)
}

else if  (MoneyJhon >= 1 &&  MoneyJhon < 1.6){
	alert("comprate el helado de cremma");
	let vuelto = (MoneyJhon - 1);

	alert("este es tu vuelto "+vuelto)
}
else if  (MoneyJhon >= 1.6 && MoneyJhon < 1.7){
	alert("comprate el sorbete de chocolate");
}
else if  (MoneyJhon >= 1.7 && MoneyJhon < 1.8){
	alert("comprate el sorbete de limo");
}
else if  (MoneyJhon >= 1.8 && MoneyJhon < 2.9){
	alert("comprate el doble bola");
}
else if  (MoneyJhon >= 2.9){
	alert("comprate un galon y unas pizzas");
}

else{
	alert("anda pedi mas a tu mama");
}
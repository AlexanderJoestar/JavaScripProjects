// CHAPTER 2

// ARRAYS 

let alimentos = ["verdura"," fruta", 5, 100];
// GUARDAN ELEMENTOS , COMIENZA EN LA POSICION 0



alert(alimentos);

document.write(alimentos[3]);


// ARRAYS ASOCIATIVOS
let pc = {
	nombre: "minepc",
	procesador:"ryzen 4500",
	ram: "16gb",
	espacio: "500mb"
};

let cp = ["tupc", "ryzensolo", "5gb", "1tb"];

// document.write(cp[2]);

document.write(pc["procesador"]);


let nombre = pc["nombre"]
let procesador = pc["procesador"]
let ram = pc["ram"]
let espacio = pc["espacio"]

frase = `el nombre de mi pc es :${nombre} <br>
el procesador de mi pc es :${procesador} <br>
la memoria ram de mi pc es :${ram} <br>
el espacio de mi pc es :${espacio}`;

document.write(frase);

// BUCLES E ITERACION

// WHILE

let numero = 0;

while (numero < 6) {
	
	document.write(numero +"<br>");
	numero ++;
}

document.write(numero);

// DO WHILE

let num = 0;

do{

	num++;
	document.write(num + "<br>");

}

while(num <= 6)

// BREAK 

let num = 0;

while (num < 100){

	num++;
	document.write(num);

	if(num == 10){
		break;
	}
}

//SENTENCIAS

// FOR

//SE DIVIDE EN 3 PARTES
// DECLARAMOS
// INICIAMOS
// ITERMAOS



for (let i = 0; i < 6; i++) {
	document.write(i);
}

for (let i = 6; i >= 0; i--) {
	document.write(i);
}

let i;
for (i = 6; i >= 0; i--) {
	document.write(i);
}

let j = 6;
for (j; j >= 0; j--) {
	document.write(j);
}

for (let k = 0; k < 6; k++) {
	if ( k == 3) {
		continue; //SE SALTA EL ELEMENTO 3
				// TIENE QUE ESTAR ANTES DE MOSTRARLO CON EL DOCWRITE
	}
	
	document.write(k);

	
}

// FOR IN AND OFF

let animales = ["gato", "perro", "pato"];
animales.edad = 20;

for (animal in animales) {

	//MUESTRA LOS INDICES CUANDO NO ESTA EL VALOR
	//EXPLICITO ENTRE PARENTESIS

	document.write(animales[animal] + "<br>");
};



for (animal of animales) {

// MUESTRA EL VALOR DE MANERA IMPLICITA
	document.write(animal + "<br>");
};

document.write(animales.edad);





//LABEL

array1 = ["maria", "carlo", "leo"];
array2 = ["pedro", "juan", array1, "alexito"];

forTest:

for (let array in array2) {

	if(array == 2){

		for(array of array1){

			document.write(array +"<br>")
			break forTest;
		}
	}else{
		document.write(array2[array]+"<br>");
	}
	
}

//FUNCIONES

//DECLARAR FUNCION

function saludar(){
	respuesta = prompt("hola alex, como te fue hoy?");

if(respuesta  == "bien"){
	alert("como me alegro ammigo, mejora lo mas que podas");
}
else{
	alert("una pena, anda llora")
}
}

// AQUI SE LLAMA LA FUNCION
saludar(); 
saludar();

greeting = function(){
	answer = prompt("hola alex, como te fue hoy?");

if(answer  == "bien"){
	alert("como me alegro ammigo, mejora lo mas que podas");
}
else{
	alert("una pena, anda llora")
}

}

greeting();


// RETURN

function saludar(){
	
	alert("hola");	
	return "la funcion se ha ejecutado";
}

saludo = saludar();

document.write(saludo);

// PARAMETROS


 function suma(num1, num2){
 	let res = num1 + num2;
 document.write(res);
}

suma(12, 44);


 function suma(num1, num2){
 	let res = num1 + num2;
 	return res;
}

let resultado = suma(14, 44);
document.write(resultado);

//CREAR UNA FUNCION


function saludar(nombre){
	let frase = `¡Hola ${nombre} , como estas?`;
	document.write(frase)
}

saludar("querido")


// OTRA FORMA DE CREAR UNA FUNCION

const saludar = function(nombre){
	let frase = `¡Hola ${nombre} ¿Como estas?`;
	document.write(frase)
}

saludar("querido amigo")

// FUNCIONES FLECHAS

const saludar = (nombre)=>{
	let frase = `¡Hola ${nombre} ¿Como estas?`;
	document.write(frase)
}

saludar("querido amigo")
			 	

//FOR EACH

// PROBLEMA 1

let free = false;

const validarCliente = (time)=>{
	let edad = prompt("Cual es tu edad?");

	if (edad >= 18){
		if(time >= 2 && time < 7 && !free){
			alert("podes, pasar gratis porque sos la primer persona depues de las 2 am")
			free = true;
		}else{
			alert(`podes pasar si pagas. son las ${time}`)
		}

	}
	else{
		alert("no sos mayor, no entras");
	}

}


validarCliente(23);
validarCliente(7);
validarCliente(2);
validarCliente(2);

// PROBLEMA 2

let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++){
	alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)),0]
}

const tomarAsistencia = (nombre,p)=>{
	let presencia = prompt(nombre);
	if (presencia == "p" || presencia =="P" ){
		alumnosTotales[p][1]++;
	}
}

for (let i = 0; i < 30; i++) {
	for (alumno in alumnosTotales) {
	tomarAsistencia(alumnosTotales[alumno][0], alumno);
	}
}

for (let alumno in alumnosTotales){
	let resultado = `${alumnosTotales[alumno][0]}:<br>
    _______Presencias: ${alumnosTotales[alumno][1]}<br>
    _______Ausencias: ${30 - alumnosTotales[alumno][1]}`;
	if (30 - alumnosTotales[alumno][1] > 18) {
		resultado+= " reprobado por inasistencia<br><br>";
	}else{
		resultado+= "<br><br>"
	}
	document.write(resultado)
}

//PROBLEMA 3

const sumar = (num1, num2) =>{
	return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2) =>{
	return parseInt(num1) - parseInt(num2);
}

const dividir = (num1, num2) =>{
	return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1, num2) =>{
	return parseInt(num1) * parseInt(num2);
}

alert("¿Que operacion deseas realizar?");


let operacion = prompt("1: suma, 2: resta, 3: division, 4:multiplicacion");

if (operacion == 1){
	let numero1 = prompt("ingrese un numero");
	let numero2 = prompt("ingrese otro numero");
	let resultado = sumar(numero1, numero2);
	alert(`tu resultado es ${resultado}`);
}

else if (operacion == 2){
	let numero1 = prompt("ingrese un numero");
	let numero2 = prompt("ingrese otro numero");
	let resultado = restar(numero1, numero2);
	alert(`tu resultado es ${resultado}`);

}

else if (operacion == 3){
	let numero1 = prompt("ingrese un numero");
	let numero2 = prompt("ingrese otro numero");
	let resultado = dividir(numero1, numero2);
	alert(`tu resultado es ${resultado}`);

}

else if (operacion == 4){
	let numero1 = prompt("ingrese un numero");
	let numero2 = prompt("ingrese otro numero");
	let resultado = multiplicar(numero1, numero2);
	alert(`tu resultado es ${resultado}`);

}

else{
	alert("no se ha encontrado esa operacion");

}


//CAPITULO 3
//PROGRAMACION ORIENTADO A OBJETOS(POO)

class animal{
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy un ${this.especie}, tengo ${this.edad}, y mi color es 
		${this.color}`;
	}
	verInfo(){
		document.write(this.info + "<br>")
	}
		// POLIMORFISMO TENEMOS DIFERENTES ANIMALES Y UN OBJETO 
		// QUE SOLO UN ANIMAL RECIBE
	ladrar(){
		if (this.especie == "canino"){
			document.write("¡Woaow!"+"<br>");

		}else{
			document.write("No puede ladrar, es un " + this.especie +"<br>")
		}

	}

	trabajar(){
		if (this.color == "negro"){
			document.write("vos laburas"+"<br>")
		}
		else{
			document.write("vos agradece tu privilegio " + this.color+"<br>")
		}

	}
}

// ESTO SUSTITUYE LO DE ABAJO
let perro = new animal("canino", 5 ,"negro");
let gato = new animal("felino", 2 ,"blanco");
let pajaro = new animal("ave", 1 ,"verde");

// ESTO


// document.write(perro.info +" <br>")
// document.write(gato.info +" <br>")
// document.write(pajaro.info +" <br>")

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

perro.ladrar();
gato.ladrar();
pajaro.ladrar();

perro.trabajar();
gato.trabajar();
pajaro.trabajar();


//HERENCIA

class animal{
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy un ${this.especie}, tengo ${this.edad}, y mi color es 
		${this.color}`;
	}
	verInfo(){
		document.write(this.info + "<br>")
	}
}

class canino extends animal{
	constructor(especie,edad, color, raza){
		super(especie,edad,color);
		this.raza = raza;

	}
	ladrar(){
		alert("WAW");
	}

}




let perro = new canino("canino", 5 ,"negro","doberman");
let gato = new animal("felino", 2 ,"blanco");
let pajaro = new animal("ave", 1 ,"verde");



perro.ladrar();


perro.verInfo();
gato.verInfo();
pajaro.verInfo();


// METODOS ESTATICOS



class animal{
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy un ${this.especie}, tengo ${this.edad}, y mi color es 
		${this.color}`;
	}
	verInfo(){
		document.write(this.info + "<br>")
	}
}

class canino extends animal{
	constructor(especie,edad, color, raza){
		super(especie,edad,color);
		this.raza = raza;

	}
	static ladrar(){
		alert("WAW");
	}

}




let gato = new animal("felino", 2 ,"blanco");
let pajaro = new animal("ave", 1 ,"verde");



canino.ladrar();
gato.ladrar();


// METODOS ESTATICOS
// SETTERS Y GETTERS



class animal{
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy un ${this.especie}, tengo ${this.edad}, y mi color es 
		${this.color}`;
	}
	verInfo(){
		document.write(this.info + "<br>")
	}

class canino extends animal{
	constructor(especie,edad, color, raza){
		super(especie,edad,color);
		this.raza = null;

	}
	set setRaza(newName){
		this.raza = newName;
	}

	get getRaza(){
		return this.raza;
	}

}



const perro = new canino("perro", 5, "negro", "doberman")
const gato = new animal("felino", 2 ,"blanco");
const pajaro = new animal("ave", 1 ,"verde");



perro.setRaza = "Pedro";
document.write(perro.getRaza);

// KOFLA EXCERCISES 


// PARTE1

class celular{
	constructor (color, peso, rdp,rdc, ram){
		this.color = color;
		this.peso = peso;
		this.resolucionDePantalla = rdp;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;

	}

	toggleOnOff(){
		if(this.encendido == false){
			alert("celular encendido");
				this.encendido = true;
		}
		else{
			alert("el celular esta apagado");
			this.encendido = false;  
		}
	}
	reiniciar(){
		if (this.encendido == true){
			alert("reiniciando el celular");
		}
		else{
			alert("el celular no se puede reiniciar")
		}
	}
	tomarFoto(){
		alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
	}
	grabarVideo(){
		alert(`grabando video en: ${this.resolucionDeCamara}`);
	}

	mobileInfo(){
		return `
		color:<b>${this.color}</b><br>
		peso:<b>${this.peso}</b><br>
		resolucion De Camara:<b>${this.resolucionDeCamara}</b><br>
		resolucion De Pantalla:<b>${this.resolucionDePantalla}</b><br>
		memoria Ram:<b></b>${this.memoriaRam}<br>

		`;

	}
}

// PARTE2


class celularGamaAlta extends celular{
	constructor(color, peso, rdp, rdc, ram, ce){
	super(color, peso, rdp, rdc, ram);
	this.camaraExtra = ce;

	}
	grabarCamaraLenta(){
		alert("Estas grabando en camara lenta");
	}
	reconocimientoFacial(){
		alert("Vamos a escanear tu rostro");
	}
	infoGamaAlta(){
		return this.mobileInfo() + `Resolucion de camara extra:${this.camaraExtra}`
	}
}



samsumng = new celularGamaAlta("rojo", "130g","5.2inch","Full HD", "32GB", "4K"); 
iphone = new celularGamaAlta("verde", "150g","5inch","Full HD", "32GB", "4k"); 


document.write(`
	${samsumng.infoGamaAlta()}<br>
	${iphone.infoGamaAlta()}<br>
	
`);


// CODIGO EJECUCION DE CLASE PADRE

// const samsumng = new celular("black", "1LB", "5pulgadas", "4k", "8GB");
// const iphone = new celular("darkblue", ".5LB", "5pulgadas", "4k", "6GB");
// const xiaomi = new celular("white", ".5LB", "5pulgadas", "1200px", "12GB");


// samsumng.toggleOnOff();
// samsumng.tomarFoto();
// samsumng.grabarVideo();
// samsumng.reiniciar();
// samsumng.toggleOnOff();

// document.write(`
// 	${samsumng.mobileInfo()}<br>
// 	${iphone.mobileInfo()}<br>
// 	${xiaomi.mobileInfo()}

// `);


document.write(`
	${samsumng.InfoGamaAlta()}<br>
	${iphone.InfoGamaAlta()}
	
`);


// PARTE3
// //MINE
// class app {
// 	constructor(descargas, puntuacion,peso){
// 		this.descargas = descargas;
// 		this.puntuacion = puntuacion;
// 		this.peso = peso;
// 		this.instalada = true;
// 		this.iniciar = false;

// 	}

// 	instalar(){
// 		if (this.instalada == false){
// 			this.instalada = true;
// 			alert("app instalada correctamente")
// 		}
// 		else{
// 			let desinstalar = prompt("desea desinstalar? si, no");
// 			if(desinstalar == "si"){
// 				alert("se ha desinstalado correctamente");
// 				this.instalada = false;
// 			}
// 			else{
// 				this.instalada = true;

// 			}
// 		}
// 	}

// 	abrir(){
// 		if (this.iniciar == false && this.instalada == true){
// 			this.iniciar  = true;
// 			alert("app abierta");
// 		}
// 		else{
// 			this.iniciar = false;
// 			alert("app cerrada")
// 			}
// 	}


// }

 
// clashRoyale = new app("4mill", "4 estrellas", "1GB");


// clashRoyale.instalar();
// clashRoyale.abrir();

// DALTO

class app {
	constructor(descargas, puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.instalada = false;
		this.iniciar = false;

	}

	instalar(){
		if (this.instalada == false){
			this.instalada = true;
			alert("app instalada correctamente")
		}
			
}


	desinstalar(){
		if (this.instalada == true){
			this.instalada = false;
			alert("app desinstalada correctamente")
		}
			
}

	abrir(){
		if (this.iniciar == false && this.instalada == true){
			this.iniciar  = true;
			alert("app abierta");
		}
		
	}
	cerrar(){
		if (this.iniciar == true && this.instalada == true){
			this.iniciar  = false;
			alert("app cerrada");
		}

	}
	appInfo(){
		return `
			Descargas: ${this.descargas}</br>
			Puntuacion:${this.puntuacion}</br>
			Peso: ${this.peso}</br>
		`
	}



}

 
const clashRoyale = new app("4mill", "4 estrellas", "1GB");
const clasha = new app("5mill", "4 estrellas", "1GB");
const clashb = new app("1mill", "3 estrellas", ".5GB");
const clashc = new app(".9mill", "2 estrellas", "1.5GB");
const clashd = new app(".5mill", "1 estrellas", "1.2GB");
const clashe = new app("2mill", "1 estrellas", "1GB");
const clashf = new app("4mill", "3 estrellas", "1GB");


// clashRoyale.instalar();
// clashRoyale.abrir();
// clashRoyale.cerrar();
// clashRoyale.desinstalar();




document.write(`
${clashRoyale.appInfo()}
${clasha.appInfo()}<br>
${clashb.appInfo()}<br>
${clashc.appInfo()}<br>
${clashd.appInfo()}<br>
${clashe.appInfo()}<br>
${clashf.appInfo()}`)

// PARTE 4
// METODOS DE CADENA MAS COMUNES

// CONCACT  UNE OBJETOS

let cadena = "cadena de prueba";
let cadena2 = "cadena2";
resultado = cadena.concat(cadena2);

document.write(resultado);



// STARTS WITH 
let lana = "nose que poner";
let lana2 = "nose";

result = lana.startsWith(lana2);
document.write(result);

// ENDS WITH 
let lona = "nose que poner";
let lona2 = "poner";

result = lona.endsWith(lona2);
document.write(result);

// INCLUDES 

let lila = "nose que poner";
let lila2 = "que";

result = lila.includes(lila2);
document.write(result);

//OTRA FORMA DE INCLUDES
let lala = "nose que poner";
let lala2 = "que"; //SE PUEDE OMNITIR EN ESTE CASO

result = lala.includes("que");
document.write(result);

// INDEX OF

let lela = "nose que poner";
let lela2 = "que"; 

result = lela.indexOf("que"); //DEVUELVE EN QUE POSICION EMPIEZA EL OBJETO "QUE"

document.write(lela2[0]);//MUESTRA EN QUE POSICION ESTA EL OBJETO

// LAST INDEX OF

let lula = "nose que que poner";
let lula2 = "que"; 

result = lula.lastIndexOf("que"); //DEVUELVE EN QUE POSICION TERMINA EL OBJETO "QUE"
//SI HAY MAS DE U OBJETO CON EL MIMO VALOR , EN ESTE CASO "QUE"

document.write(lula[9]);

document.write(lula2[0] + lula2[1] + lula2[2]);




// PADSTART()

let loli = "u";
let loli2 = "";

let res = loli.padStart(10, "123") + "<br>";
// ASIGNA EL NUMERO DE CARACTERES ("10") QUE LA CADENA TENDRA
// Y  ASIGNA EL CONTENIDO DE RELLENO ("123"). ASI TENEMOS "111U"

document.write(res);


// PADEND( )

let lolita = "uva";
let lolita2 = "";

let resu = lolita.padEnd(10, "123");
//RELLENA AL FINAL UVA 1231231

document.write(resu);

//REPEAT

let chain = "palabra "
//REPITE LA PALABRA DENTRO DE LA CADENA

let show = chain.repeat("2");

document.write(show);

// SPLIT ()

 let cadena = "hola como estas";

 //PUEDE SEPARAR CON COMAS O ESPACIOS
 // DETECTA EL ESPACIO O COMA
 // TAMBIEN PUEDE OMNITIR LA PALABRA SI LA COLOCAMOS DENTRO DEL SPLIT

 resultado = cadena.split(" ");

document.write(resultado[0]);

// SUBSTRING 

// DEVUELVE LO QUE SELECCIONAMOS

let cadenaa = "ABCDEFG";

// PASAMOS DESDE DONDE EMPIEZA HASTA DONDE TERMINA EL SUBSTRING
resultadoa = cadenaa.substring(1,6);
document.write(resultadoa);

//  TO LOWER CASE 
// CONVIERTE A MINUSCULA

let cadenaa = "ohla aigo";

resultadoa = cadenaa.toLowerCase();

document.write(resultadoa);

//  TO UPPER CASE 
// CONVIERTE A MAYUSCULA

let cadenaa = "ohla aigo";

resultadoa = cadenaa.toUpperCase();

document.write(resultadoa);

//  TO UPPER CASE 
// CONVIERTE A MAYUSCULA

let cadenaa = "ohla aigo";

resultadoa = cadenaa.toUpperCase();

document.write(resultadoa);


// TO STRING 
// CONVIERTE A CADENA

let cadena = 50;
// let resultado = cadena;

let resultado = cadena.toString(); 

document.write(5 + resultado);


// METODOS DE ARRAYS

// POP

let nombres = ["pedro", "maria", "jorge", "tanmaulipa"];


// MUESTRA Y SACA EL ULTIMO ELEMENTO
let resultado = nombres.pop();
document.write(resultado);
document.write(nombres);


// SHIFT

let nombres = ["pedro", "maria", "jorge", "tanmaulipa"];


// MUESTRA Y SACA EL PRIMER ELEMENTO
let resultado = nombres.shift();
document.write(resultado);
document.write(nombres);

// PUSH

let nombres = ["pedro", "maria", "jorge", "tanmaulipa"];
 
document.write(nombres + "<br>");

//AÑADE UN NUEVO ELEMENTO AL FINAL DEL ARRAY
let resultado = nombres.push("calito","mario");


//MUESTRA LA POSICION DEL ELEMENTO
document.write(resultado);
//MOSTRAMOS EL ELEMENTO
document.write(nombres);

// REVERSE

let nombres = ["pedro", "maria", "jorge", "tanmaulipa"];

document.write(nombres + "<br>");

// REVIERTE LOS ELEMENTOS DEL ARRAY
let resultado = nombres.reverse();


document.write(nombres);



// UNSHIFT  

let numeros = [ 3, 4, 5];

document.write(numeros + "<br>");


// AGREGA ELEMENTOS AL PRINCIPIO
numeros.unshift(0,1,2)

document.write(numeros)


// SORT
// ORDENA , ORDEN LEXICOGRAFICO
// NUMEROS Y LETRAS

let numeros = ["i", "a", "e"];

document.write(numeros + "<br>");

numeros.sort()

document.write(numeros + "<br>");

// SPLICE

// SE LE PASA DONDE INICIA, POSICION Y SU ALCANCE
// POSICION 0 ALCANCE HASTA LAS POSITION 2.
// TAMBIEN PUEDE AGREGAR ELEMENTOS Y ELIMINAR


let numeros = ["i", "a", "e"];

document.write(numeros + "<br>");

numeros.splice(0, 2,"uuh", "ahhh" );

document.write(numeros + "<br>");

// METODOS ACCESORES
// CONVIERTE A STRING Y PERMITE SEPARAR LOS ELEMENTOS
//JOIN

let numero = ["abecedario", "manzana", "pan", "harina"];

document.write(numero + "<br>");

let resultado = numero.join("<br>elemento: ");

document.write("elemento: " + resultado);

// SLICE 

let numeros = ["aeiou", "manzana", "pan", "juan"]

document.write(numeros + "<br>");
//EMPIEZA EN EL ELEMENTO 0 Y LLEGA AL ELEMENTO 2, NO INCLUYE EL ELEMENTO 2
let resultado = numeros.slice(0);

document.write(resultado);

// METODOS DE REPETICION
// FILTER

let numeros = ["abecedario", "manzana", "dedo", "bobo", "pedro"];

// RECORRE EL ARRAY , LOS MUESTRA DE 1 EN 1.
numeros.filter(numero => document.write(numero + "<br>"))


// TAMBIEN PUEDE SELECCIONAR ELEMENTOS SEGUN SU LENGTH

let numbers = ["abecedario", "manzana", "dedo", "bobo", "pedro"];
resultado = numbers.filter(number => number.length <= 4 );
document.write(resultado)





// FOR EACH

let numeros = ["abecedario", "manzana", "dedo", "bobo", "pedro"];

// RECORRE EL ARRAY , LOS MUESTRA DE 1 EN 1.
numeros.forEach(numero => document.write(numero + "<br>"))



//OBJETO MATH

// MATH SQUARE ROOT

let numero = Math.sqrt(16);

document.write(numero +"<br>");

// MATH CUBIC ROOT

number = Math.cbrt(27);

document.write(number +"<br>");

// MAX (SOLO RECIBE NUMEROS)
// DEVUELVE EL NUMERO MAS GRANDE

let num = Math.max(2, 5, 10, 20);

document.write(num+"<br>");

// DEVUELVE EL NUMERO MAS PEQUEÑO


num = Math.min(2,4,59,10);
document.write(num+"<br>");


// RANDOM
// DA UN NUMERO ALEATORIO ENTRE 0 Y 1

num = Math.random()*100;


// ENCONTRE ESTE METODO PARA MOSTRAR SOLO LOS NUMEROS...
// ENTEROS NO CON DECIMALES
// FUNCIONA CON UN NUMERO , CON 2 NO

// document.write(num[0,3]+"<br>");

// DALTO POR OTRO LADO HIZO ASI
 
//GENERA UN NUMERO RANDOM CON DECIMALES
num = num.toString();
numero = num[0] + num[1];
document.write(numero);


// ROUND 
// REDONDEA EL NUMERO
//PERO SI ES NO LANZA EL 100 PORQUE NO PUEDE LLEGAR A 10 YA QUE EL ALGORITMO GENERA ENTRE 0 Y 1 NO OLVIDAR

num = Math.random()*100;
//EL 99 LO REDONDEA POR ESO NO GENERA 100 NI 1
num = Math.round(num);

document.write(num);

// FLOOR
// NO LLEGA A MOSTRAR LOS NUMERO ENTRE 1 Y 100 INCLUIDOS ESTOS DOS
let num = Math.random()*99;
num = Math.floor(num + 1);

document.write(num + "<br>")

// FROUND 

let num = Math.fround(9.79999999);

document.write(num);


// TRUNC
// ELIMINA LOS DECIMALES

 let num = Math.trunc(9.6)
 document.write(num);


 // PI

let numero = Math.PI;

document.write(numero);


// E CONSTANTENTE DE EULER  LN2
// LN10, LOG2E, LOG10E


let num = Math.E;
// let num = Math.LN2;
// let num = Math.LN10;
// let num = Math.LOG2E;
// let num = Math.LOG10E;

document.write(num);

// KOFLA PROBLEMA A
// MEJORANDO CALCULADORA 

class Calculadora{
	constructor(){

	}


sumar(num1, num2){
	return parseInt(num1) + parseInt(num2);
}

restar(num1, num2){
	return parseInt(num1) - parseInt(num2);
}

dividir(num1, num2){
	return parseInt(num1) / parseInt(num2);
}

multiplicar(num1, num2){
	return parseInt(num1) * parseInt(num2);
}
potenciar(num, num2){
	
	return num**num2;
}

raizCuadrada(num){
	return Math.sqrt(num);
}
raizCubica(num){
	return Math.cbrt(num);
}

}

const calculadora = new Calculadora();


alert("¿Que operacion deseas realizar?");


let operacion = prompt("1: suma, 2: resta, 3: division, 4:multiplicacion, 5:potenciacion, 6:raizCuadrada, 7:raizCubica");

if (operacion == 1){
	let numero1 = prompt("ingrese un numero");
	let numero2 = prompt("ingrese otro numero");
	let resultado = calculadora.sumar(numero1, numero2);
	alert(`tu resultado es ${resultado}`);
}

else if (operacion == 2){
	let numero1 = prompt("ingrese un numero");
	let numero2 = prompt("ingrese otro numero");
	let resultado = calculadora.restar(numero1, numero2);
	alert(`tu resultado es ${resultado}`);

}

else if (operacion == 3){
	let numero1 = prompt("ingrese un numero");
	let numero2 = prompt("ingrese otro numero");
	let resultado = calculadora.dividir(numero1, numero2);
	alert(`tu resultado es ${resultado}`);

}

else if (operacion == 4){
	let numero1 = prompt("ingrese un numero");
	let numero2 = prompt("ingrese otro numero");
	let resultado = calculadora.multiplicar(numero1, numero2);
	alert(`tu resultado es ${resultado}`);

}
else if (operacion == 5){
	let numero1 = prompt("ingrese un numero a potenciar");
	let numero2 = prompt("ingrese el numero potenciador");

	let resultado = calculadora.potenciar(numero1, numero2);
	alert(`tu resultado es ${resultado}`);

}

else if (operacion == 6){
	let numero1 = prompt("ingrese un numero para calcular su raiz cuadrada");

	let resultado = calculadora.raizCuadrada(numero1);
	alert(`tu resultado es ${resultado}`);

}

else if (operacion == 7){
	let numero1 = prompt("ingrese un numero  para calcular su raiz cubica");

	let resultado = calculadora.raizCubica(numero1);
	alert(`tu resultado es ${resultado}`);

}

else{
	alert("no se ha encontrado esa operacion");

}


// KOFLA PROBLEMA A

const obtenerInformation = (materia) =>{
	materias = {
		fisica: ["PEREZ","pedro","pepito", "kofla","maria"],
		programacion: ["PEREZ","pedro", "juan", "pepito"],
		logica: ["JUAN","pedro", "juan", "pepito", "kofla","maria"],
		quimica: ["REY","pedro", "juan", "pepito", "kofla","maria"]

	}
	if (materias[materia] ) {
		return [materias[materia], materia, materias];
	}
	else{
		return materias;
	}
}


const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformation(materia);

if (informacion !== false) {
	let profesor = obtenerInformation(materia)[0][0];
	let alumnos = obtenerInformation(materia)[0];
	alumnos.shift();
	document.write(`El profesor de ${informacion[1]} es: ${profesor}<br>
	Los alumnos son: ${alumnos}<br>
	`)
}
}

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformation(materias);
	let clasesPresentes = []; 
	let cantidadTotal = 0;
	for (info in informacion){
		if (informacion[info].includes(alumno)){
			cantidadTotal++;
			clasesPresentes.push(" " + info);

		}
	}
	return `${alumno} está en ${cantidadTotal} clases: está cursando : ${clasesPresentes}<br>`;
}


mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("juan"));
document.write(cantidadDeClases("pedro"));

//KOFLA B
let materias = {
		fisica: ["PEREZ","pedro","pepito", "kofla","maria"],
		programacion: ["PEREZ","pedro", "juan", "pepito"],
		logica: ["JUAN","pedro", "juan", "pepito", "kofla","maria"],
		quimica: ["REY","pedro", "juan", "pepito", "kofla","maria"]
}

const inscribir = (alumno, materia)=>{
	personas = materias[materia];

	if (personas.length >= 21) {
		document.write(`Lo siento ${alumno}, la clase ${materia} ya está llena<br>`)
	}
	else{
		personas.push(alumno);
		if (materia == "fisica") {
			materias = {
			fisica: personas,
			
	}
}
else if (materia == "programacion"){
	materias = {
		
		programacion: personas,
		

	}
}
else if (materia == "logica"){
	materias = {
		
		logica: personas,


	}
}
else if (materia == "quimica"){
	materias = {
		
		quimica: personas


	}
}
	document.write(`Felicidades ${alumno}!, te has inscrito a ${materia} correctamente.<br>`)

	}
}


document.write(materias["fisica"] + "<br>");


inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");
inscribir("juan", "fisica");




document.write(materias["fisica"] + "<br>");


// CAPITULO 5
// CONSOLA

console.assert( 5 > 7) //MUESTRA NADA, SI ES FALSO MUESTRA ERROR
console.clear() //LIMPIA LA CONSOLA
console.error() //MUESTRA UN ERROR
console.info()	//DA UNA INFORMACION
console.log()
console.table()	//MUESTRA UN ARRAY
console.warn()	//MUESTRA UNA ADVERTENCIA
console.dir()	//MUESTRA UN ARRAY TAMBIEN

// FUNCIONES DE CONTEO

// COUNT

// CUENTA CUANTAS VECES SE EJECUTO EL COUNT 
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
// RESETEA LA CUENTA
console.countReset()
console.count()
console.count()
console.count()
console.count()

// FUNCIONES DE CONTEO

//CONSOLE.GROUP
// AGRUPA

//CONSOLE.GROUPCOLLAPSED
// MUESTRA EL GRUPO CERRADO

// FUNCIONES DE TEMPORIZACION
// TIME  	INICIA UN TEMPORIZADOR
// CONSOLE.TIME   CUENTA
// CONSOLE.TIMELOG  MUESTRA LO QUE CONTÓ
// CONSOLE.TIMEEND TERMINA EL CONTEO MOSTRANDO CUANTO DURÓ


// PROBLEMA A KOFLA
const materias = {
	fisica: [90,6, 4,"fisica"],
	matematica: [84,8, 2, "matematica"],
	logica:  [92,8, 4, "logica"],
	quimica:  [96,8, 4, "quimica"],
	calculo: [91,6, 3,"calculo"],
	programacion:  [79,7, 4,"programacion"],
	biologia:  [75,9, 2,"biologia"],
	bbddd:  [98,9, 1,"bbdd"],
	algebra:  [100,10, 4,"algebra"]
}

const aprobado = ()=>{
	for (materia in materias){
		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos = materias[materia][2]


		console.log(materias[materia][3]);

		if (asistencias >= 90){
			console.log("Cumplio con las asistencias")
			asistencias = true;

		}
		else{
			console.log("Falta de asistencias")
		}
		if (promedio >= 7) {
			console.log(`El promedio es ${promedio}. Igual o por encima del requerido`)
			promedio = true;

		}
		else{
			console.log(`El promedio es ${promedio}. Menor al requerido `)
		}
		if (trabajos >= 3) {
			console.log("Usted cumplio con los trabajos")
			trabajos = true;

		}
		else{
			console.log("Usted no cumplio con los trabajos")

		}

		if (asistencias == true && trabajos == true && promedio == true) {
			console.log(`Usted aprobó ${materias[materia][3]}`)
		}
		else{
			console.log(`Usted reprobó ${materias[materia][3]}`)

		}

	}

}

aprobado()


// PROBLEMA B KOFLA

let trabajo = "240 minutos";
let trabajoPractico = "100 minutos";
let estudio = "100 minutos";
let tareasHogar = "30 minutos";
let descanso = "10 minutos";

console.log("TAREAS");


for (let i = 1; i <= 14; i++) {
	if (i == 1) {
	
		console.group("semana 1")
	}
	console.groupCollapsed("dia" + i);
	console.log(trabajo);
	console.log(descanso);
	console.log(estudio);
	console.log(trabajoPractico);
	console.log(tareasHogar);
	console.groupEnd();

	if (i == 7) {
		console.groupEnd();
		console.groupCollapsed("semana 2");

	}

}

console.groupEnd();


// CAPITULO 6

// DOM

parrafo = document.getElementById("parrafo");
document.write(parrafo)

parrafo = document.getElementsByTagName("p");
document.write(parrafo[0])


text = document.querySelector(".text");
document.write(text)

text = document.querySelectorAll(".text");
document.write(text[0])

// ÈSTO DE ARRIBA SE RELACION CON LO SIGUIENTE EN HTML

// <!--METODO DE SELECCION DE ELEMENTOS-->

// 	<p id="parrafo">Este es un texto de prueba</p>

// 	<p class="text">Este es un texto de prueba 2</p>

// 	<script src="javascript.js"></script>




// METODO PARA DEFINIR, OBTENER Y ELIMINAR ATRIBUTOS

const edad = document.querySelector(".Edad");

document.write(edad)

edad.setAttribute("type", "range")

let edadModi = edad.setAttribute("type", "password");

document.write(edad.getAttribute("type",""))

document.write(edadModi)

edad.removeAttribute("type", "password");
document.write(edadModi)


// ATIBUTOS GLOBALES

const titulo = document.querySelector(".titulo")

// CONTENT EDITABLE
// PODEMOS EDITAR EL CONTENIDO DEL TAG
// titulo.setAttribute("contentEditable", "true") 


// DIRECTION LTR RTL 
// titulo.setAttribute("dir", "ltr")

// // HIDDEN
// titulo.setAttribute("hidden")

// TABINDEX
// PARA HACER FOCUS 
titulo.setAttribute("tabindex","0");

// TITLE
// CAMBIAMOS EL TITULO
titulo.setAttribute("title","cambiamos el title")




// // ATRIBUTOS DE INPUTS
// const input = document.querySelector(".test");


// // CLASS NAME
// // MUESTRA LA CLASE DEL TAG
// document.write(input.className)


// MUESTRA EL VALOR ASIGNADO
// document.write(input.value)

//MODIFICA EL TYPE 
// document.write(input.type = "")


// // ACCEPT
// input.accept = "/txt"

//MINLENGHT
// input.minLength = 5;

// input.setAttribute("minLength", 9);

// PLACEHOLDER

// input.placeholder = "qu pasa mami, no te gusta el 3"

// REQUIRED

// input.required = "required";

// ATRIBUTO STYLE

const subtitlo = document.querySelector(".subtitlo");
subtitlo.style.color = "#00f";
subtitlo.style.transition = "color 1.5s"; 


const body = document.querySelector("body");
body.style.backgroundColor = "red";

// CLASES, CLASSLIST Y METODOS DE CLASSLIST

const subtitlo = document.querySelector(".subtitlo");


// ADD
// AGREGAMOS UNA CLASE
subtitlo.classList.add("grande");

// REMOVEMOS LA CLASE  
subtitlo.classList.remove("pequeno");

// ITEM, RETORNA UN VALOR
// TOMANDO LAS CLASES COMO VALOR, SEGUN SU POSICION.

// let valor = subtitlo.classList.item(1);

// document.write(valor)

// CONTAINS 
// VERIFICA, POR EJEMPLO SI UN ELEMENTO TIENE LA CLASE

let valor2 = subtitlo.classList.contains("fuerte")

document.write(valor2)

// TOGGLE
// AGREGA LA CLASE SI FALTA Y LA REMUEVE SI LA TIENE
// CON EL PARAMETRO TRUE INDICAMOS QUE SI TIENE LA CLASE NO LA NECESITA REMOVER
// Y CON FALSE LE DECIMOS QUE LA SAQUE SI LA TIENE Y SI NO LA TIENE, QUE NO LA AGREGUE

let valor3 = subtitlo.classList.toggle("debil",true)



document.write(valor3)

// REPLACE
// REMPLAZA LA CLASE
let valor4 = subtitlo.classList.replace("subtitlo", "title")

document.write(valor4)

// CREACION DE ELEMENTOS

// OBTENCION Y MODIFICACION DE ELEMENTOS EN HTML

const subtitlo = document.querySelector(".subtitlo");

// TEXTCONTENT
// DEVUELE EL MISMO RESULTADO SIN LOS HTML TAGS
// TAMBIEN MUESTRA LOS ELEMENTOS HIDDEN
let resultado = subtitlo.textContent;
document.write(resultado)


// INNERHTML
// MUESTRA EL CONTENIDO HTML

let res = subtitlo.innerHTML;
alert(res)

// OUTTERHTML
// MUESTRA EL CODIGO HTML

let re = subtitlo.outerHTML;
alert(re)


// CREACION DE ELEMENTOS

const contenedor = document.querySelector(".contenedor");



const text = document.createTextNode("some text")

// ALMACENAMOS PARA OPTIMIZAR
const fragmento = document.createDocumentFragment();


for (i = 0; i < 20; i++) {
// AGREGAMOS CONTENIDO AL ELEMENTO
// CREAMOS EL ELEMENTO
const item = document.createElement("LI");
item.textContent = "Este es un item se supone";
fragmento.appendChild(item)

// DESPLAGAMOS LA INFORMACION
contenedor.appendChild(fragmento)

}


// OBTENCION Y MODIFICADOR DE CHILDS   

// FIRSTCHILD
const contenedor = document.querySelector(".contenedor");
const primerHijo = contenedor.firstChild;

console.log(primerHijo)

// LASTCHILD
const LastHijo = contenedor.lastChild;

console.log(LastHijo)

// FIRST ELEMENT CHILD

const firstelement = contenedor.firstElementChild;

console.log(firstelement)

// LAST ELEMENT CHILD

const lastelement = contenedor.lastElementChild;

console.log(lastelement)

// CHILDNODES MUESTRA TODOS LOS HIJOS
const children = contenedor.childNodes;
console.log(children)

// CHILDREN DEVUELVE LOS HIJOS SIN TEXTO

const hijos = contenedor.children;
console.log(hijos)


// LO RECORREMOS AUNQUE NO SEA UN ARRAY
for ( hijo of hijos ) {
	console.log(hijo)
}

// METODO CHILD

const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo"
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2")


// REPLACE
contenedor.replaceChild(h2_nuevo, h2_antiguo)
// REMOVE
// contenedor.removeChild(h2_nuevo)

// VERIFICA SI TIENE EL HIJO

let verificar = h2_nuevo.hasChildNodes();

if(verificar ){
	document.write("El elemento tiene hijos")

}
else{
	document.write("El elemento no tiene hijos")


}


const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo"
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2")


// PROPIEDADES DE LOS PADRES
// PARENT NODE

const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo"
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2")


// MUESTRA QUIEN ES EL PADRE TAG
// DIV CONTENEDOR
console.log(h2_antiguo.parentElement)

// PROPIEDADES DE LOS SIBLINGS


const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo"
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2")


// // MUESTRA EL SIGUIENTE HERMANO
console.log(h2_antiguo.nextSibling)

// // MUESTRA EL ULTUMO
console.log(h2_antiguo.previousSibling)

// // NEXT ELEMENT SIBLING

console.log(h2_antiguo.nextElementSibling)

// ELEMENTO HACIA ARRIBA MAS CERCANO

console.log(contenedor.closest(".div"))
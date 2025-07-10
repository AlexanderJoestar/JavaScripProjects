const contenedor = document.querySelector(".flex-container");

const button = document.querySelector(".send-button");
button.value = button.value.toUpperCase();


function crearLlaves(nombre, modelo, precio){
	img = `<img class="llave-img" src="llave.png">`;
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p>Precio: $${precio}</p>`;
	return[img, nombre, modelo, precio];
}

// const llave = crearLlaves("llave 1", "modelo X", "0.50");


// contenedor.innerHTML = llave[0] + llave[1] + llave[2] + llave[3]

const changeHidden  = (number)=>{
	document.querySelector(".key-data").value = number;

}

let documentFragment = document.createDocumentFragment();

for ( i = 0; i <= 20; i++) {

	let preciorandom = Math.round(Math.random()*10+30);
	let modelorandom = Math.round(Math.random()*100);
	let llave = crearLlaves(`Llave ${i}`, `modelo ${modelorandom}`, preciorandom);


	let div = document. createElement("DIV");
	div.addEventListener("click",() =>{changeHidden(modelorandom)});
	div.tabIndex = i;
	div.classList.add(`item-${i}`, `flex-item`);
	div.innerHTML =  llave[0] + llave[1] + llave[2] + llave[3];
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment)
function evalua(){
	var texto = document.getElementById("cadena").value;
	var mensaje= '';

if(texto===texto.toUpperCase()&&texto!=texto.toLowerCase()){
	var mensaje="Tu cadena solamente contiene mayusculas";

}else if (texto!=texto.toUpperCase()&&texto===texto.toLowerCase()) {
	var mensaje="Tu cadena solo contiene minusculas";
}else{
	var mensaje="Tu cadena contiene mayusculas y minusculas";

}
document.getElementById("parrafo").innerText=mensaje;

}



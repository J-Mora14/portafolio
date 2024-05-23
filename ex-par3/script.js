// Esta función evalúa si una frase es un palíndromo
function palindromo(cadena) {
    var resultado = "La frase \"" + cadena + "\" \n";
    
    // Convertir la cadena a minúsculas y eliminar espacios
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    // Comparar la cadena original con su reverso
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
    var iguales = true;
    for (var i in letras) {
        if (letras[i] != letrasReves[i]) {
            iguales = false;
            break;
        }
    }

    if (iguales) {
        resultado += " es un palíndromo";
    } else {
        resultado += " no es un palíndromo";
    }
    return resultado;
}

// Esta función se ejecuta al pulsar el botón para evaluar la frase
function evaluarPalindromo() {
    var frase = document.getElementById("frase").value;
    var result = palindromo(frase);
    document.getElementById("result").innerText = result;
}

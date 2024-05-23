
window.onload = function() {
    var numero = prompt("Ingresa un número para ver su tabla de multiplicar:");
        generarTablaMultiplicar(parseInt(numero));
};

function generarTablaMultiplicar(numero) {
    var tabla = "<table border='1'>"; 
    tabla += "<tr><th>Producto</th><th>Resultado</th></tr>";
    for (var i = 1; i <= 10; i++) {
        tabla += "<tr>";
        tabla += "<td>" + numero + " x " + i + "</td>"; 
        tabla += "<td>" + numero * i + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    document.getElementById('tablaMultiplicar').innerHTML = tabla;
};
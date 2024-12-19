
/* "document.getElementById" selecciona el elemento del documento por medio del valor
del atributo "id"que se le haya asignado.*/

function Escribir(valor) {
    var num1 = document.getElementById("num1");
    num1.value += valor;
}

function limpiar() {
    document.getElementById("num1").value = "";
}


function Eliminar() {

    const num1 = document.getElementById("num1");
    num1.value = num1.value.slice(0, .1);

}

function calcular() {
    var num1 = document.getElementById("num1").value;

    try {
         var resultado = eval(num1);
        document.getElementById("num1").value = resultado;
    } catch (e) {
       document.getElementById("num1").value = "Error";
    }
}


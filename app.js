//Porcentaje

//Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número.

const numero = Number(prompt("Por favor ingresa un número"));
const porcentaje = Number(prompt("Por favor ingresa el porcentaje"));
//alert("El porcentaje es: " + numero * porcentaje / 100 + "%");

const resultado = (numero * porcentaje) / 100;
alert(`El ${porcentaje} % de ${numero} es: ${resultado}.`);




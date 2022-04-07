//codigo cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden " + ladoCuadrado + "CM" )

function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log("El perimetro es " + perimetroCuadrado)


function areaCuadrado(lado) {
    return lado * lado;
} 
//console.log("El Area es " + areaCuadrado + "CM^2")

console.groupEnd();
//codigo triagulo

console.group("Triangulo");

//const ladotriangulo1 = 6;
//const ladotriangulo2 = 6;
//const basetriangulo = 4;
//const alturatriangulo = 5.5;

//console.log("los lados del triangulo miden " 
//+ ladotriangulo1 + "CM, " 
//+ ladotriangulo2 + "CM, " 
//+ basetriangulo + "CM")

function perimetrotriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
//console.log("El perimetro es " + perimetrotriangulo)


function areaTriangulo(base, altura) {
    return base * altura / 2;
}
//console.log("El Area es " + areaTriangulo + "CM^2")

console.groupEnd();

//codigo circulo

console.group("Circulo");

//const Radio = 4;
//const pi = Math.PI;


function perimetroCirculo (radio) {
    return 2 * radio * Math.PI;
}
//console.log("El perimetro es " + perimetroCirculo)


function areaCirculo(radio) {
    return Math.PI * (radio * radio);
}
//console.log("El Area es " + areaCirculo + "CM^2")

console.groupEnd();
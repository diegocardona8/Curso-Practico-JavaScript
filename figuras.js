//Código del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

var perimetroCuadrado = ladoCuadrado * 4;

console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);


const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`El área del cuadrado es: ${areaCuadrado} cm*2 `);

console.groupEnd();

//Código del Triangulo

console.group("Triangulos");

const ladoTringualo1 = 6;
const ladoTringualo2 = 6;
const baseTringualo1 = 4;
const alturaTriangulo = 5.5;


console.log(`los lados del triaungulo miden: 
${ladoTringualo1} cm 
${ladoTringualo2} cm 
${baseTringualo1} cm   
`);
 
console.log(`La altura del triangulo es: ${alturaTriangulo} cm`);

//Perimetro

const perimetroTriangulo = ladoTringualo1 + ladoTringualo2 + baseTringualo1;

console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`);

//Área 

const areaTriangulo = (baseTringualo1 * alturaTriangulo)/2;

console.log(`El Área del triangulo es: ${areaTriangulo} cm^2`);

console.groupEnd();

//Código del circulo

console.group("Círculos");

//Radio

const radioCirculo = 4;

console.log(`El Radio del circulo es: ${radioCirculo} cm`);

//Diametro

const diametroCirculo = radioCirculo * 2;

console.log(`El diametro del circulo es: ${diametroCirculo} `);

//PI

const PI = Math.PI;

console.log(`El resultado de pi es ${PI}`);

//Circunferencia - Perimetro

const perimetroCirculo = diametroCirculo * PI;

console.log(`El perimetro del circulo es: ${perimetroCirculo} `);

//ÁREA

const areaCirculo =(radioCirculo * radioCirculo) * PI;

console.log(`El área del circulo es: ${areaCirculo} cm^2`);

console.groupEnd();

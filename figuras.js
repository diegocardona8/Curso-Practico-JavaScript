//CÓDIGO DEL CUADRADO

console.group("Cuadrado");

    // const ladoCuadrado = 5;
    // console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

    function perimetroCuadrado(lado){

        return lado * 4;
    }

    // console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

    function areacuadrado (lado){

        return lado * lado;
    }

    // const areaCuadrado = ladoCuadrado * ladoCuadrado;

    // console.log(`El área del cuadrado es: ${areaCuadrado} cm*2 `);

console.groupEnd();

//CÓDIGO DEL TRIANGULO

console.group("Triangulos");

    // const ladoTringualo1 = 6;
    // const ladoTringualo2 = 6;
    // const baseTringualo1 = 4;
    // const alturaTriangulo = 5.5;


    // console.log(`los lados del triaungulo miden: 
    // ${ladoTringualo1} cm 
    // ${ladoTringualo2} cm 
    // ${baseTringualo1} cm   
    // `);
    
    // console.log(`La altura del triangulo es: ${alturaTriangulo} cm`);

    //Perimetro


    function perimetroTriangulo (lado1, lado2, base){

        return lado1 + lado2 + base;
    }


    //Área 

    function areaTriangulo(base, altura){

        return (base * altura) / 2;
    } 



console.groupEnd();

//CÓDIGO DEL CIRCULO

console.group("Círculos");

    //Radio

    // const radioCirculo = 4;

    // console.log(`El Radio del circulo es: ${radioCirculo} cm`);

    //Diametro

    function diametroCirculo (radio){

        return radio * 2;
    } 

    //PI

    const PI = Math.PI;

    console.log(`El resultado de pi es ${PI}`);

    //Circunferencia - Perimetro

    function perimetroCirculo (radio){

        const diametro = diametroCirculo(radio);
        return  diametro * PI; 
    }

    //ÁREA

    function areaCirculo (radio){

        
        return  (radio * radio ) * PI; 
    }

    
console.groupEnd();

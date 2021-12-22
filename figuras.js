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

        return (lado1 + lado2 + base);
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


// NIVEL INTERMEDIO:  Interacción con el HTML


//CUADRADO

function calcularPerimetroCuadrado(){

    const input = document.getElementById("inputCuadrado"); // Esta linea nos trae como tal la etiqueta, la lee 
    const value = input.value; // obtenemos el valor 

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
    
}

function calcularAreaCuadrado(){

    const input = document.getElementById("inputCuadrado"); // Esta linea nos trae como tal la etiqueta, la lee 
    const value = input.value; // obtenemos el valor 

    const area = areacuadrado(value);
    alert(area);
    
}


//TRIANGULO

function calcularPerimetroTriangulo(){

    const inputlado1 = document.getElementById("inputTrianguloLado1");
    const value1 = Number(inputlado1.value);

    const inputlado2 = document.getElementById("inputTrianguloLado2");
    const value2 = Number(inputlado2.value);

    const inputbase = document.getElementById("inputTrianguloBase");
    const value3 = Number (inputbase.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);

}

function calcularAreaTriangulo(){

    const inputbase = document.getElementById("inputTrianguloBase");
    const value1 = Number(inputbase.value);

    const inputaltura = document.getElementById("inputTrianguloAltura");
    const value2 = Number (inputaltura.value);

    const area = areaTriangulo (value1,value2);
    alert(area);
}

//CIRCULO


function calcularPerimetroCirculo(){

    const inputradio = document.getElementById("inputCirculo");
    const value1 = Number(inputradio.value);

    const perimetro = perimetroCirculo(value1);
    alert(perimetro);

}

function calcularAreaCirculo(){

    const inputradio = document.getElementById("inputCirculo");
    const value1 = Number(inputradio.value);

    const area = areaCirculo(value1);
    alert(area);
    

}


// TRIANGULO ISÓSCELES


function alturaTrianguloIsos (ladoa,ladob,base){

    if (ladoa === ladob && ladoa != base){

        const altura = Math.sqrt( (Math.pow(ladoa,2)) - (Math.pow(base,2) / 4));
        
        alert(`Es un Triángulo isósceles y su altura es : ${altura}` );
    }else{

        alert("No es un Triángulo Isósceles ");
    }

}

function calcularAlturaTrianguloIsosceles(){

    const inputLadoa = document.getElementById("inputLadoa");
    const value1 = Number(inputLadoa.value);

    const inputLadob = document.getElementById("inputLadob");
    const value2 = Number(inputLadob.value);

    const inputbase = document.getElementById("inputbase");
    const value3 = Number(inputbase.value);

    const altura = alturaTrianguloIsos(value1,value2,value3);
}

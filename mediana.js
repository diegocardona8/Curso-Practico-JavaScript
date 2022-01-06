
function calcularMediana(lista){

    // Orden de la lista ingresada 

    const lista1 = lista.sort((a,b)=>a - b);

    // Conociendo la mitad de la Lista (Posición)

    const mitadLista1 = parseInt(lista1.length / 2);

    //Función Validar si es par o no 

    function ispar(numero){

        if (numero % 2 === 0){
    
            return true;
    
        }else{
    
            return false;
        }
    }


    let mediana;

    //Validación 

    if (ispar(lista1.length) ){

        const elemento1 = lista1[mitadLista1-1];
        const elemento2 = lista1[mitadLista1];
    
        const promedioelementos = calcularMediaAritmetrica([
            elemento1, 
            elemento2,
        ]);
    
        mediana = promedioelementos;
    
    }else{
    
        mediana = lista1[mitadLista1];
    }

    return mediana ;

}


// Calcular el promedio (suma de los elementos)

function calcularMediaAritmetrica(lista){
    
    const sumaLista = lista.reduce(
        
        function (valorAcumulado , nuevoElemento){

            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

//OJO REVISAR , PODEMOS APLICAR PRINCIPIOS SOLID Y RESUMIR MUCHAS FUNCIONES



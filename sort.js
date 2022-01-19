const edades = [75,19,10,90,25,100];


//Ordenado Ascendente

const ascendente = edades.sort((a,b)=>{

    return a - b; //-1

});

//Ordenado Descendente  

const descendente = edades.sort((a,b)=>{

    return b - a; //1

});

//Ordenado Sin cambios   

const sincambios = edades.sort((a,b)=>{

    return 0;

});

console.log(edades);
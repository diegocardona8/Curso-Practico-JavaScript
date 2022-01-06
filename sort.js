const edades = [75,19,10,90,25,100];


//Ordenado Ascendiente 

const descendente = edades.sort((a,b)=>{

    return a - b; //-1

});

//Ordenado Descendiente   

const ascendente = edades.sort((a,b)=>{

    return b - a; //1

});

//Ordenado Sin cambios   

const sincambios = edades.sort((a,b)=>{

    return 0;

});

console.log(edades);
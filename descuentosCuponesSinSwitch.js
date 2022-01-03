
function calcularPrecioConDescuento (precio,descuento){

    const porcentajeDelPrecioConDescuento  = 100 - descuento;
    const precioConDescuento  = (precio * porcentajeDelPrecioConDescuento)/100;

    return precioConDescuento;
    
}

function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;



    //Metodo Hash Table Objetos
    // Variable descuento
    // Le pasamos a Cupones couponValue(el que escribio el usuario)
    //Recuperamos el valor del porcentaje segun el nombre del cupon
    
        
    const descuento = cupones[couponValue] ;

    if(!cupones[couponValue] ){

        alert (`El cupon ${couponValue} no existe`  );

    }else{

    const precioConDescuento  = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");

    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

    }

}

//Objeto "cupones" con los nombres de los cupones y respectivos valores de descuento

const cupones = {

    Diego : 15,
    Lupe : 30,
    Alejandro: 50

};





function calcularPrecioConDescuento (precio,descuento){

    const porcentajeDelPrecioConDescuento  = 100 - descuento;
    const precioConDescuento  = (precio * porcentajeDelPrecioConDescuento)/100;
    
}

function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    

    // Variable que guarda una función.
    // Se utilizará en el metodo find del array
    // Este método utiliza expresiones Lambda
    // El nombre del alias es "Coupon"
    // Coupon recorrera cada index del arreglo
    // El nombre del elemento (.name) se verifica con el valor del cupon (nombre), introducido por el usuario

    const isCouponValueValid = function (coupon){

        return coupon.name === couponValue;
    };

    // Variable Almacena el cupon del usuario,Pero...
    // Su valor debe ser  igual al cupon ingresado por el usuario

    const userCoupon = coupons.find(isCouponValueValid);


    if(!userCoupon){

        alert ("El cupón" + couponValue + "No es valido");

    }else{

        const descuento = userCoupon.discount;

    
        const precioConDescuento  = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");

        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
    
}

const coupons = [

    {

        name:"Diego",
        discount:15,

    },

    {
        name:"Lupe",
        discount:30,
    },
    {
        name:"Alejandro",
        discount:50,
    }

];


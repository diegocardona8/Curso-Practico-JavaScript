
function calculateDiscountedPrice (price,discount){

    const percentageDiscountedPrice = 100 - discount;
    const priceDiscount = (price * percentageDiscountedPrice)/100;

    return priceDiscount ; 

}

// console.log({

//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,

// }); 
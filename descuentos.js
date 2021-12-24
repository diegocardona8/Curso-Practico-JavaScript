
function calculateDiscountedPrice (price,discount){

    const percentageDiscountedPrice = 100 - discount;
    const priceDiscount = (price * percentageDiscountedPrice)/100;
    

    return priceDiscount ; 

    
}

function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const priceWidthDiscount = calculateDiscountedPrice(priceValue,discountValue);

    const resultP = document.getElementById("ResultP");

    resultP.innerText = "El precio con descuento es $" + priceWidthDiscount;
    
}
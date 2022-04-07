


function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
return precioConDescuento;
}

function calcularPrecioConCupon (precio, cupon) {
    const porcentajePrecioCupon = 100 - cupon;
    const precioConCupon = (precio * porcentajePrecioCupon) / 100;
    return precioConCupon
}
 


function ClickPd (){
const inputPrice = document.getElementById("InputPrice");
const priceValue = inputPrice.value;

const inputDiscount = document.getElementById("InputDiscount");
const discountValue = inputDiscount.value;

const valorCupon = function () {
    const cupons = [10, 25, 50];
    const cupon = document.getElementById("Cupon");
    const valueCupon = parseInt(cupon.value);
    if (valueCupon === cupons[0]) {
        return cupons[0];
    } else if (valueCupon === cupons[1]) {
        return cupons[1];
    } else if (valueCupon === cupons[2]) {
        return cupons[2];
    } else {
        return 0
    }
}
const cuponValue = valorCupon()

const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
const precioConCupon = calcularPrecioConCupon(priceValue, cuponValue)

const resultP = document.getElementById("ResultP");
 resultP.innerText = "El precio con descuento es $ " + precioConDescuento + "\n\nEl precio con Cupon es $ " + precioConCupon;
}



////////////////////////

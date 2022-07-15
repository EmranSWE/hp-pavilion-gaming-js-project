//Convert String To Numbers
function convertToNumber(valueName) {
    const getValue=document.getElementById(valueName);
    const getValueText=getValue.innerText;
    const getValueNumber=parseFloat(getValueText);
    return getValueNumber;
}

//price update and Add price
function updatePrice() {
    const bestPrice=convertToNumber('best-price');
    const extraExpensive=convertToNumber('extra-memory-cost');
    const extraStorage=convertToNumber('extra-storage-cost');
    const deliveryCharge=convertToNumber('delivery-charge');
    const totalPrice=convertToNumber('total-price');
    //Price Updating
    const updateTotalPrice=bestPrice+extraExpensive+extraStorage+deliveryCharge;
    const updatePriceAdded=document.getElementById('total-price');
    updatePriceAdded.innerText=totalPrice;
    const total=document.getElementById('total');
    total.innerText=Math.round(updateTotalPrice);
    return updateTotalPrice;
}

//Extra expensive accessories
function extraExpensive(costType,value) {
    const extraExpense=document.getElementById(costType);
    extraExpense.innerText=value;
    const totalPriceUpdate=document.getElementById('total-price');
    const updatePriceTotal=updatePrice();
    totalPriceUpdate.innerText=Math.round(updatePriceTotal);
}


//Extra memory added
document.getElementById("memory-8gb").addEventListener('click',function () {
    convertToNumber('extra-memory-cost');
    extraExpensive('extra-memory-cost',0)
})

document.getElementById("memory-16gb").addEventListener('click',function () {
    convertToNumber('extra-memory-cost');
    extraExpensive('extra-memory-cost',180);
});

//Extra storage added
document.getElementById("extra-256gb").addEventListener('click',function () {
    convertToNumber('extra-storage-cost');
    extraExpensive('extra-storage-cost',0);

    
});
    
document.getElementById("extra-512gb").addEventListener('click',function () {
    convertToNumber('extra-storage-cost');
    extraExpensive('extra-storage-cost',100);
});
    
document.getElementById("extra-1tb").addEventListener('click',function () {
    convertToNumber('extra-storage-cost');
    extraExpensive('extra-storage-cost',180);
});

//Express delivery
document.getElementById("normal-delivery").addEventListener('click',function () {
    convertToNumber('extra-storage-cost');
    extraExpensive('delivery-charge',0);
});

document.getElementById("express-delivery").addEventListener('click',function () {
    convertToNumber('extra-storage-cost');
    extraExpensive('delivery-charge',20);
});

//Apply coupon code
document.getElementById('apply').addEventListener('click',function () {
    const couponCode=document.getElementById('coupon-code').value;
    const totalVal=updatePrice();
    if (couponCode=='imran') {
        // console.log(couponCode) 
        const newValue=totalVal*.1;
        const totalPriceUpdate=document.getElementById('total-price');
        totalPriceUpdate.innerText=Math.round(totalVal-newValue);
        const coupon=document.getElementById('coupon-code');
        coupon.value=' ';
        const total=document.getElementById('total');
        total.innerText=Math.round(totalPriceUpdate.innerText);
    }
    else
    {
        const errorMasage=document.getElementById('coupon-code');
        errorMasage.value='Wrong coupon Code';
        errorMasage.style.backgroundColor='red';
        errorMasage.style.color='white';
        errorMasage.style.fontSize='18px';
    }    
});
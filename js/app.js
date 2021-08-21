// total price handler function
let price = 1299;
function priceNow(val) {
    price += val;
    document.getElementById('total-cost').innerText = price;
    document.getElementById('discount').innerText = price;
}
// ---------------------- Memory part -------------------------------
// Memory handler function
function memoryCost(isUpdate) {
    const inputMemory = document.getElementById('memory-cost');
    const inputCost = parseFloat(inputMemory.innerText);
    if (isUpdate == true) {
        inputMemory.innerText = 180;
    }
    else {
        inputMemory.innerText = 0;
    }
};
//    handle the memory button 
let memoryStatus = 8;
document
    .getElementById('eight-gb-btn')
    .addEventListener('click', function () {
        if (memoryStatus == 16) {
            priceNow(-180);
            memoryStatus = 8;
        }
        memoryCost(false);
    });
document
    .getElementById('sixteen-gb-btn')
    .addEventListener('click', function () {
        memoryCost(true);
        if (memoryStatus == 8) {
            priceNow(180);
            memoryStatus = 16;
        }
    });
//-------------------------------- handle the SSD button ----------------------------

let ssdStatus = 256;
function storageCost(isUpdate) {
    const inputStorage = document.getElementById('ssd-cost');
    const inputCost = parseFloat(inputStorage.innerText);
    if (isUpdate == 'ssd1TB') {
        inputStorage.innerText = 180;
    }
    else if (isUpdate == 'ssd512') {
        inputStorage.innerText = 100;
    }
    else {
        inputStorage.innerText = 0;
    }
};

function ssdStatusPrcie(val) {
    document.getElementById('ssd-cost').innerText = val;
}

document
    .getElementById('ssd256')
    .addEventListener('click', function () {
        if (ssdStatus == 1024) {
            priceNow(-180);
            ssdStatus = 256;
        }
        else if (ssdStatus == 512) {
            priceNow(-100);
            ssdStatus = 256;
        }
        ssdStatusPrcie(0);
        storageCost('ssd256');

    });
document
    .getElementById('ssd512')
    .addEventListener('click', function () {
        if (ssdStatus == 1024) {
            priceNow(-80);
            ssdStatus = 512;
        }
        else if (ssdStatus == 256) {
            priceNow(100);
            ssdStatus = 512;
        }
        storageCost('ssd512');

    });
document
    .getElementById('ssd1TB')
    .addEventListener('click', function () {
        storageCost('ssd1TB');
        if (ssdStatus == 512) {
            priceNow(80);
            ssdStatus = 1024;
        }
        else if (ssdStatus == 256) {
            priceNow(180);
            ssdStatus = 1024;
        }
        storageCost('ssd1TB');


    });
//------------------------------------    handle the dilevery  button ---------------

let deliveryStatus = 0;
document.getElementById('free').addEventListener('click', function () {
    if (deliveryStatus == 20) {

        priceNow(-20);
        deliveryStatus = 0;
        document.getElementById('delivery-cost').innerText = deliveryStatus;
    }
});


document.getElementById('charge').addEventListener('click', function () {
    if (deliveryStatus == 0) {
        priceNow(20);
        deliveryStatus = 20;
        document.getElementById('delivery-cost').innerText = deliveryStatus;
    }
    deliveryCost(true);
});



// ------------------------------------------ Promo code secition......................
let couponStatus = 0;
document.getElementById('apply').addEventListener('click', function () {
    let coupon = document.getElementById('promo-input').value; 22
    if (coupon === "stevekaku") {
        if (couponStatus == 0) {
            document.getElementById('discount').innerText = price * 0.80;
            couponStatus = 1;
        }
        else {
            alert("Coupon already applied");
        }
    }
    else {
        if (couponStatus == 0) alert("Invalid Coupon");
        else alert("One coupon is already applied");
    }
    document.getElementById('promo-input').value = '';
});




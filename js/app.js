
// price updater
let price = 1299;
let couponStatus = 0;
function totalPriceUpdate() {
    document.getElementById('total-cost').innerText = price;
    document.getElementById('discount').innerText = price;
}
// highter
let highlight = 'border:1px solid red ; background: pink';
function choosen(val) {
    couponStatus = 0;
    document.querySelector(val).setAttribute('style', highlight);
}
function notChoosen(val) {
    document.querySelector(val).setAttribute('style', '');
}
//----------------------- Initial State ---------------------------------------

choosen('#ssd256');
choosen('#free');
choosen('#eight');

//-------------------------------- Memory Handerler ----------------------------``
let memoryPrice = 0;
function memoryClick(val, memoryID) {
    document.getElementById(memoryID).addEventListener('click', function () {
        memoryUpdater(val, '#' + memoryID);
    });
}
function memoryStatusPrcie(val) {
    document.getElementById('memory-cost').innerText = val;
}
function memoryUpdater(thisPrice, memoryType) {
    notChoosen('#eight');
    notChoosen('#sixteen');
    choosen(memoryType);
    price -= memoryPrice;
    memoryPrice = thisPrice;
    price += memoryPrice;
    memoryStatusPrcie(memoryPrice);
    totalPriceUpdate();
}
memoryClick(0, 'eight');
memoryClick(180, 'sixteen');
//-------------------------------- handle the SSD button ----------------------------
let ssdPrcie = 0;
function ssdClick(val, ssdID) {
    document.getElementById(ssdID).addEventListener('click', function () {
        ssdUpdater(val, '#' + ssdID);
    });
}
function ssdStatusPrcie(val) {
    document.getElementById('ssd-cost').innerText = val;
}
function ssdUpdater(thisPrice, ssdType) {
    notChoosen('#ssd256');
    notChoosen('#ssd1TB');
    notChoosen('#ssd512');
    choosen(ssdType);
    price -= ssdPrcie;
    ssdPrcie = thisPrice;
    price += ssdPrcie;
    ssdStatusPrcie(ssdPrcie);
    totalPriceUpdate();
}

ssdClick(0, 'ssd256');
ssdClick(100, 'ssd512');
ssdClick(180, 'ssd1TB');

//------------------------------------    handle the dilevery  button ---------------
let deliveryStatus = 0;
function deliveryStatusPrice(val) {
    document.getElementById('delivery-cost').innerText = deliveryStatus;
}
document.getElementById('free').addEventListener('click', function () {
    choosen('#free');
    notChoosen('#charge');
    price -= deliveryStatus;
    deliveryStatus = 0;
    totalPriceUpdate();
    deliveryStatusPrice(deliveryStatus);
});
document.getElementById('charge').addEventListener('click', function () {
    choosen('#charge');
    notChoosen('#free');
    price -= deliveryStatus;
    deliveryStatus = 20;
    price += deliveryStatus;
    totalPriceUpdate();
    deliveryStatusPrice(deliveryStatus);
});

// ------------------------------------------ Promo code secition......................

document.getElementById('apply').addEventListener('click', function () {
    let coupon = document.getElementById('promo-input').value;
    if (coupon === "stevekaku") {
        if (couponStatus == 0) {
            document.getElementById('discount').innerText = price * 0.80;
            couponStatus = 1;
        }
        else alert("Coupon already applied");
    }
    else {
        if (couponStatus == 0) alert("Invalid Coupon");
        else alert("One coupon is already applied");
    }
    document.getElementById('promo-input').value = '';
})
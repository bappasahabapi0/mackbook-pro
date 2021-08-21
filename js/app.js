let couponStatus = 0;
// --------------------- Highlight function----------------------------
function priceNow(val) {
    price += val;
    document.getElementById('total-cost').innerText = price;
    document.getElementById('discount').innerText = price;
};

let highlight = 'border:1px solid gray ; background: black ; color: white ';
let thisone = document.querySelector('#ssd256');
if (thisone) {
    thisone.setAttribute('style', highlight);
}
thisone = document.querySelector('#free');
if (thisone) {
    thisone.setAttribute('style', highlight);
}
thisone = document.querySelector('#eight-gb-btn');
if (thisone) {
    thisone.setAttribute('style', highlight);
}

function choosen(val) {
    couponStatus = 0;
    let btnSend = document.querySelector(val);
    if (btnSend) {
        btnSend.setAttribute('style', highlight);
    }
};

function notChoosen(val) {
    let btnRmv = document.querySelector(val);
    if (btnRmv) {
        btnRmv.setAttribute('style', '');
    }
}

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
// Memory handler 
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

let memoryStatus = 8;
//    handle the memory button 
document
    .getElementById('eight-gb-btn')
    .addEventListener('click', function () {
        choosen('#eight-gb-btn');
        notChoosen('#sixteen-gb-btn');
        if (memoryStatus == 16) {
            priceNow(-180);
            memoryStatus = 8;
        }
        memoryCost(false);


    });

document  // 16 GB update
    .getElementById('sixteen-gb-btn')
    .addEventListener('click', function () {
        notChoosen('#eight-gb-btn');
        choosen('#sixteen-gb-btn');
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

        choosen('#ssd256');
        if (ssdStatus == 1024) {
            priceNow(-180);
            ssdStatus = 256;
            notChoosen('#ssd1TB');

        }
        else if (ssdStatus == 512) {
            priceNow(-100);
            ssdStatus = 256;
            notChoosen('#ssd512');
        }
        ssdStatusPrcie(0);
        storageCost('#ssd256');

    });
document
    .getElementById('ssd512')
    .addEventListener('click', function () {
        choosen('#ssd512')
        if (ssdStatus == 1024) {
            priceNow(-80);
            ssdStatus = 512;
            notChoosen('#ssd1TB');

        }
        else if (ssdStatus == 256) {
            priceNow(100);
            ssdStatus = 512;
            notChoosen('#ssd256');
        }
        storageCost('ssd512');

    });
document
    .getElementById('ssd1TB')
    .addEventListener('click', function () {

        choosen('#ssd1TB');

        storageCost('ssd1TB');
        if (ssdStatus == 512) {
            priceNow(80);
            ssdStatus = 1024;
            notChoosen('#ssd512');
        }
        else if (ssdStatus == 256) {
            priceNow(180);
            ssdStatus = 1024;
            notChoosen('#ssd256');
        }
        storageCost('ssd1TB');


    });
//------------------------------------    handle the dilevery  button ---------------

let deliveryStatus = 0;
document.getElementById('free').addEventListener('click', function () {
    choosen('#free');
    notChoosen('#charge');
    if (deliveryStatus == 20) {
        priceNow(-20);
        deliveryStatus = 0;
        document.getElementById('delivery-cost').innerText = deliveryStatus;
    }
});


document.getElementById('charge').addEventListener('click', function () {
    choosen('#charge');
    notChoosen('#free');
    if (deliveryStatus == 0) {
        priceNow(20);
        deliveryStatus = 20;
        document.getElementById('delivery-cost').innerText = deliveryStatus;
    }
    deliveryCost(true);
});

// ------------------------------------------ Promo code secition......................

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




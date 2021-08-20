// update total  

// function getInputValue() {

// };
function totalPrice() {
    const memoryInputCost = document.getElementById('total');
    const memoryCost = parseFloat(memoryInputCost.innerText);
    return (memoryCost * 0);

}




// Memory
function memoryCost(isUpdate) {
    const inputMemory = document.getElementById('memory-cost');
    const inputCost = parseFloat(inputMemory.innerText);
    if (isUpdate) {
        inputMemory.innerText = 180;
    }
    else {
        inputMemory.innerText = 0;
    }
};
// handle the SSD button 
function storageCost(isUpdate) {
    const inputMemory = document.getElementById('ssd-cost');
    const inputCost = parseFloat(inputMemory.innerText);
    if (isUpdate == 'ssd1TB') {
        inputMemory.innerText = 180;
    }
    else if (isUpdate == 'ssd512') {
        inputMemory.innerText = 100;
    }
    else {
        inputMemory.innerText = 0;
    }

};

// delivery cost 
function deliveryCost(isCharge) {
    const inputMemory = document.getElementById('delivery-cost');
    const inputCost = parseFloat(inputMemory.innerText);
    if (isCharge) {
        inputMemory.innerText = 20;
    }
    else {
        inputMemory.innerText = 0;
    }
}
//    handle the memory button 
document
    .getElementById('eight-gb-btn')
    .addEventListener('click', function () {
        memoryCost(false);
        totalPrice();

    });

document
    .getElementById('sixteen-gb-btn')
    .addEventListener('click', function () {
        memoryCost(true);
        totalPrice();
    });


document
    .getElementById('ssd256')
    .addEventListener('click', function () {
        storageCost('ssd256');

    });
document
    .getElementById('ssd512')
    .addEventListener('click', function () {
        storageCost('ssd512');

    });
document
    .getElementById('ssd1TB')
    .addEventListener('click', function () {
        storageCost('ssd1TB');

    });


//   
document
    .getElementById('free')
    .addEventListener('click', function () {
        deliveryCost(false);

    });

document
    .getElementById('charge')
    .addEventListener('click', function () {
        deliveryCost(true);
    });
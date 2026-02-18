const items = new Map([
    ['laptop', 2],
    ['mouse' , 3],
    ['keyboard' , 1]
]);

function addItems(item , quantity){
    items.set(item , quantity);
}

function removedItems(item){
    items.delete(item);
}

function incItem(item){
    let currentQty = items.get(item);
    if (currentQty !== undefined){
        items.set(item, currentQty + 1);
    } else {
        console.log(`${item} not found in cart`);
    }
}

// Test
addItems('headset', 2);
removedItems('keyboard');
incItem('mouse');

function runningServer(){
    for (let [key, value] of items){
        console.log(key, value);
    }

    let total = 0;
    for (let qty of items.values()){
        total += qty;
    }
    console.log("Total Items:", total);
}

runningServer();
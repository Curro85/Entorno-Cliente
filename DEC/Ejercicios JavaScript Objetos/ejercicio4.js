const menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

function multiplyNumeric(obj){
    for (key in obj) {
        if (typeof(obj[key]) == "number") {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
console.log(`${menu.width} ${menu.height}`);
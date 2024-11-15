const menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

function multiplyNumeric(obj){
    for (propiedad in obj) {
        if (typeof(obj[propiedad]) == "number") {
            obj[propiedad] *= 2;
        }
    }
}

console.log(`Width: ${menu.width}, Height: ${menu.height}, Title: ${menu.title}`);
multiplyNumeric(menu);
console.log(`Width: ${menu.width}, Height: ${menu.height}, Title: ${menu.title}`);
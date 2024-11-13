const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (keys in salaries) {
    sum += salaries[keys];
}

console.log(`La suma total es: ${sum > 0 ? sum : 0}`);
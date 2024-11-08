const user = {};

user.name = "Jhon";
user.surname = "Smith";
console.log(`${user.name} ${user.surname}`);

user.name = "Pete";
console.log(`${user.name} ${user.surname}`);

delete user.name;
console.log(`${user.name} ${user.surname}`);
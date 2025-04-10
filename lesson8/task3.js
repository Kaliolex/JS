const person = {
    firstName: "Дмитро",
    lastName: "Петренко",
    age: 25
}

person.email = 'test@gmail.com'
delete person.age

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
//JSON
//JavaScript Object Notation

//1.Object to JSON
//stringify(obj)
let json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white', 
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    }
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'birthDate']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
})
//2.JSON to Object
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date() : value;
});
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());




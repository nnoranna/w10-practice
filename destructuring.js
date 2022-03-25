const userProfile = {
    name: "Nora",
    age: 30,
    country: "Hungary"
}

//Régi metódus
//const name = userProfile.name;
//const age = userProfile.age;

//It is the same as above, but with {} our code is shorter
//we have an object and extract the keys as new variables;
//We cannot rename the variable, because it will be "undefined"

/* const {name, age} = userProfile;
console.log("name: ", name);
console.log("age: ", age); */

/* const logNameAndAge = (incomingUser) => {
    console.log(incomingUser.name);
    console.log(incomingUser.age);
}
logNameAndAge(userProfile) */

//Use destructuring with {}, like in row15
//aAlways use the same name as the key!!!
const logNameAndAge = ({name, age}) => {
    console.log("name: ", name);
    console.log("age: ", age);
}
logNameAndAge(userProfile)

//Do destruct with arrays
const arr1 = [9, 8, 7, 6];
/* const first = arr1[0];
const second = arr1[1];
console.log("first: ", first);
console.log("second: ", second); */

const [c, d] = arr1;
console.log("c: ", c);
console.log("d: ", d);

//First element as a number, and all the other elements in a new array
const[x, ...y] = arr1;
console.log("x: ", x);
console.log("y: ", y);
const arr1 = [13, 20, 19];
const arr2 = [9, 8, 7];

//Copy array with spread operator
const arr3 = [...arr1];
arr3.push(6)
console.log("arr1: ", arr1);
console.log("arr3: ", arr3);

//Merge 2 arrays
const arr4 = [...arr1, ...arr2]
console.log("arr4: ", arr4);

const userProfile = {
    name: "Nora",
    age: 30,
    country: "Hungary"
}

//Copy, and add a new key with value
//If I add a key with a new value, it changes the value, in this example the name
const userProfile2 = {...userProfile, gender: "female", name: "Anna"}
console.log("userProfile: ", userProfile);
console.log("userProfile2: ", userProfile2);
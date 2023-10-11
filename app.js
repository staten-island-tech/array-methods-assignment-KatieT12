
const thing1 = {
    firstName: "Thing1",
    lastName: "Seuss",
    graduated: false, 
    intelligent: false,
    something: true,
    Spouse: null,
    Likes: ["thing2", "pizza"],
};
 const thing2 = {
    firstName: "Thing2",
    lastName: "Seuss",
    graduated: false, 
    intelligent: false,
    something: true,
    Spouse: null,
    siblings: ["icecream", "cheese"],
};  
const thing3 = {
    firstName: "Thing3",
    lastName: "Seuss",
    graduated: false, 
    intelligent: false,
    something: true,
    Spouse: null,
    siblings: ["chocolate", "jellybeans"],
};
 const thing4 = {
    firstName: "Thing4",
    lastName: "Seuss",
    graduated: false, 
    intelligent: false,
    something: true,
    Spouse: null,
    siblings: ["football", "dancing"],
};  

const array1 = [thing1.firstName, thing2.firstName, thing3.firstName, thing4.firstName];
array1.forEach((name)=> console.log(name.firstName));
console.log(array1);

const array2 = [thing1, thing2, thing3, thing4];
array2.forEach((element)=> console.log(element.firstName));
console.log(array2);

const thing1 = {
    firstName: "Thing1",
    lastName: "Seus",
    graduated: true, 
    intelligent: true,
    Spouse: null,
    Likes: ["thing2", "pizza"],
};
 const thing2 = {
    firstName: "Thing2",
    lastName: "Sooss",
    graduated: false, 
    intelligent: false,
    Spouse: null,
    Likes: ["icecream", "cheese"],
};  
const thing3 = {
    firstName: "Thing3",
    lastName: "Seuss",
    graduated: true, 
    intelligent: true,
    Spouse: null,
    Likes: ["chocolate", "jellybeans"],
};
 const thing4 = {
    firstName: "Thing4",
    lastName: "Seuz",
    graduated: false, 
    intelligent: false,
    Spouse: null,
    Likes: ["football", "dancing"],
};  

const array1 = [thing1, thing2, thing3, thing4];
array1.forEach((name)=> console.log(name.firstName));
const array2 = [thing1, thing2, thing3, thing4];
array2.forEach((element)=> console.log(element.lastName));
const array3 = [thing1, thing2, thing3, thing4];
array3.forEach((element)=> console.log(element.graduated));
const array4 = [thing1, thing2, thing3, thing4];
array4.forEach((element)=> console.log(element.intelligent));
const array5 = [thing1, thing2, thing3, thing4];
array5.forEach((element)=> console.log(element.Spouse));
const array6 = [thing1, thing2, thing3, thing4];
array6.forEach((element)=> console.log(element.Likes)); 


//filter array//
const array7 = [thing1, thing2, thing3, thing4];
const graduated = array7.filter((array7)=> array7.graduated !== true);
console.log(graduated);

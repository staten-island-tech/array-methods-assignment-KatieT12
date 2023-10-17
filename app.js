
const thing1 = {
    firstName: "Thing1",
    lastName: "Seus",
    graduated: true, 
    favoritecolor: "Red",
    Age: "16",
    Likes: ["bread", "pizza"],
};
 const thing2 = {
    firstName: "Thing2",
    lastName: "Sooss",
    graduated: false, 
    favoritecolor: "Blue",
    Age: "20",
    Likes: ["icecream", "cheese"],
};  
const thing3 = {
    firstName: "Thing3",
    lastName: "Seuss",
    graduated: true, 
    favoritecolor: "Green",
    Age: "17",
    Likes: ["chocolate", "jellybeans"],
};
 const thing4 = {
    firstName: "Thing4",
    lastName: "Seuz",
    graduated: false, 
    favoritecolor: "Purple",
    Age: "5",
    Likes: ["football", "dancing"],
};  

const array1 = [thing1, thing2, thing3, thing4];
array1.forEach((name)=> console.log(name.firstName));
const array2 = [thing1, thing2, thing3, thing4];
array2.forEach((lastname)=> console.log(lastname.lastName));
const array3 = [thing1, thing2, thing3, thing4];
array3.forEach((graduated)=> console.log(graduated.graduated));

const array4 = [thing1, thing2, thing3, thing4];
array4.forEach((color)=> console.log(color.favoritecolor));

const array5 = [thing1, thing2, thing3, thing4];
array5.forEach((age)=> console.log(age.Age));

/* const array6 = [thing1, thing2, thing3, thing4];
const list = [thing1, thing2, thing3, thing4];
array6.forEach((list) => list.forEach((like)=> console.log(like.Likes))); */
const array6 = [thing1, thing2, thing3, thing4];
array6.forEach((like)=> console.log(like.Likes));


//filter array//
const array8 = [thing1, thing2, thing3, thing4];
const graduated = array8.filter((array8)=> array8.graduated !== true);
console.log(graduated);

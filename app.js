
const date = new Date();
let year = date.getFullYear(); 
const thing1 = {
    firstName: "Thing",
    lastName: "1",
    graduated: false, 
    intelligent: false,
    something: true,
    DOB: 2007,
    Spouse: null,
    siblings: ["one", "two"],
    age: function(){
        return year - this.DOB;
    },
};
 const thing2 = {
    firstName: "Thing",
    lastName: "2",
    graduated: false, 
    intelligent: false,
    something: true,
    DOB: 2007,
    Spouse: null,
    siblings: ["one", "two"],
    age: function(){
        return year - this.DOB;
    },
};  
const thing3 = {
    firstName: "Thing",
    lastName: "3",
    graduated: false, 
    intelligent: false,
    something: true,
    DOB: 2007,
    Spouse: null,
    siblings: ["one", "two"],
    age: function(){
        return year - this.DOB;
    },
};
 const thing4 = {
    firstName: "Thing",
    lastName: "4",
    graduated: false, 
    intelligent: false,
    something: true,
    DOB: 2007,
    Spouse: null,
    siblings: ["one", "two"],
    age: function(){
        return year - this.DOB;
    },
};  

const words = [thing1, thing2, thing3, thing4, thing5];
students.forEach((student)=> console.log(student.firstName));
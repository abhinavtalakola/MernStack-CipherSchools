let person={
    firstName: "Abhinav Reddy",
    lastName: "Talakola",

    getName: function(){
        return `The name of the person is ${person.firstName} ${person.lastName}`;
    },

    phoneNumber:{
        mobile: "12345",
        landline: "6789",
    },
};
console.log(person.getName());
console.log(person.phoneNumber.landline);


function person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

let person1=new person("Messi","Lionel");
let person2=new person("Ronaldo","Cristiano");
console.log(person1.firstName);
console.log(`${person2.lastName} ${person2.firstName}`);


const coder={
    isStudying: false,
    printIntroduction(){
        console.log(`My name is ${this.name}. Am i studying: ${this.isStudying}.`);
    },
};

const me=Object.create(coder);
me.name="Talakola Abhinav Reddy";
me.isStudying=true;
me.printIntroduction();


/*
class Vehicle{
    constructor(name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }
    getDetails(){
        return `The name of the vehicle is ${this.name}`;
    }
}
let v1=new Vehicle("Creta","Hyundai","2500cc");
let v2=new Vehicle("Q5","Audi","3000cc");
console.log(v1.name);
console.log(v2.maker);
console.log(v1.getDetails());
*/

function Vehicle(name,maker,engine){
    this.name=name;
    this.maker=maker;
    this.engine=engine;
}
Vehicle.prototype.getDetails=function(){
    return `The name of the vehicle is ${this.name}`;
};

let v1=new Vehicle("Creta","Hyundai","2500cc");
let v2=new Vehicle("Q5","Audi","3000cc");

console.log(v1.name);
console.log(v2.maker);
console.log(v1.getDetails());



class Person{
    constructor(name, id) {
      this.name = name;
      this.id = id;
    }
  
    addAddress(newAddress) {
      this.address = newAddress;
    }
  
    getDetails() {
      console.log(`Name is: ${this.name} and the address is: ${this.address}`);
    }
  }
  
  let p1 = new Person("Abhinav", 38);
  p1.addAddress("Guntur");
  p1.getDetails();


class PersonAccess {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        
        let getDetails_NoAccess = function () {
            return `The first name is: ${this.firstName} and last name is: ${this.lastName}`;
        };
        this.getDetails_Access = function () {
            return `The first name is: ${this.firstName} and last name is: ${this.lastName}`;
        };
    }
}
let personWA1 = new PersonAccess("Abhinav Reddy", "Talakola");
console.log(personWA1.firstName);
// console.log(personWA1.getDetails_NoAccess());
console.log(personWA1.getDetails_Access());


class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getDetails=function(){
        return `First name is ${this.firstName} and last name is ${this.lastName}`;
    };
}

class Student extends Person{
    constructor(firstName,lastName,rollNo){
        super(firstName,lastName);
        this.rollNo=rollNo;
    }
    getDetails=function(){
        return `First name is ${this.firstName} and last name is ${this.lastName} and roll number is ${this.rollNo}`;
    };
}

let p0=new Person("Abhinav Reddy","Talakola");
console.log(p1.getDetails());

let s1=new Student("Leela","Krishna",30);
console.log(s1.getDetails());   

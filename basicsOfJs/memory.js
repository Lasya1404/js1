//stack for primitive data types
//heap for Non-primitive data types

var name="lasya";
var name2=name;
name2="lasya sree"
console.log(name);
console.log(name2);

//here we are getting the copy so when we change in one there wll not be any change in another 

let user1={
    name1:"manesh",
    email:"manesh@google.com",
    phone:764656234654
}

let user2=user1;
console.log(user1.phone);
console.log(user2.phone);
user2.phone=4444444444;
console.log(user1.phone);
console.log(user2.phone);
//here we are getting the reference so when we change in one there will  be  change in another also as they are refering to one location

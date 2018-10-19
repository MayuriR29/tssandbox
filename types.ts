let myString: string;

myString = "Hello World".slice(0, 3);
console.log(myString);

let message; //type of message is not defined,hence cannot acces the methods of string
message = "hi";
let result = (<string>message).length; //hence need to make assertions using <>
let result1 = (message as string).endsWith("i"); //alternative way to use assertions
console.log("using assertions", result1);

// let strArr: string[];//1
let strArr: Array<string>; // 2 other way to declare string
strArr = ["one", "two", "three"];
console.log(strArr);

let strNumTuple: [string, number]; //tuple declaration
strNumTuple = ["hello", 123];
console.log("strNumTuple", strNumTuple);

enum Color {
  Red,
  Green,
  Blue,
  Purple
}
let backGroundColor = Color.Blue;
console.log("backGroundColor", backGroundColor);

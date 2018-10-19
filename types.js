var myString;
myString = "Hello World".slice(0, 3);
console.log(myString);
var message; //type of message is not defined,hence cannot acces the methods of string
message = "hi";
var result = message.length; //hence need to make assertions using <>
var result1 = message.endsWith("i"); //alternative way to use assertions
console.log("using assertions", result1);
// let strArr: string[];//1
var strArr; // 2 other way to declare string
strArr = ["one", "two", "three"];
console.log(strArr);
var strNumTuple; //tuple declaration
strNumTuple = ["hello", 123];
console.log("strNumTuple", strNumTuple);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backGroundColor = Color.Blue;
console.log("backGroundColor", backGroundColor);

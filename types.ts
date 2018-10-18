let myString: string;

 myString ='Hello World'.slice(0,3);
 console.log(myString);

//let strArr: string[];
let strArr:Array<string> //other way to declare string
strArr=['one','two','three'];
console.log(strArr);

let strNumTuple :[string,number];//tuple declaration
strNumTuple=['hello',123];
console.log('strNumTuple',strNumTuple);
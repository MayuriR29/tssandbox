class Person {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    console.log("user created");
  }
}
let John = new Person("John", "john@gmail.com", 30);

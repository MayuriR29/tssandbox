var Person = /** @class */ (function () {
    function Person(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("user created");
    }
    return Person;
}());
var John = new Person("John", "john@gmail.com", 30);

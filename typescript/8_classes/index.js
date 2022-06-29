var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("%cClases", "color: #3913B8; font-size: 20px;");
console.log("%c1. Overview", "color: #229179; font-size: 16px;");
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.speak = function (phrase) {
        if (phrase === void 0) { phrase = "Hello World"; }
        console.log(phrase);
    };
    return Person;
}());
var person = new Person("Pablo");
console.log(person);
console.log("%c2. Palabras reservadas", "color: #229179; font-size: 16px;");
console.log("-------------- readonly ----------------");
var Greeter = /** @class */ (function () {
    function Greeter(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    return Greeter;
}());
var greeter = new Greeter();
console.log(greeter.name);
// This will fail -> g.name = "also not ok";
console.log("-------------- implements ----------------");
var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () {
        console.log("ping!");
    };
    return Sonar;
}());
// class Ball implements Pingable { //Class 'Ball' incorrectly implements interface 'Pingable'. Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//   pong() {
//     console.log("pong!");
//   }
// }
console.log("-------------- extends ----------------");
var StudentExtend = /** @class */ (function (_super) {
    __extends(StudentExtend, _super);
    function StudentExtend(name) {
        return _super.call(this, name) || this;
    }
    StudentExtend.prototype.speak = function (phrase) {
        if (phrase === void 0) { phrase = "And I want to learn"; }
        console.log("I'm a student...");
        _super.prototype.speak.call(this, phrase);
    };
    return StudentExtend;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name) {
        return _super.call(this, name) || this;
    }
    Teacher.prototype.speak = function (phrase) {
        if (phrase === void 0) { phrase = "And I want to teach"; }
        console.log("I'm a teacher...");
        _super.prototype.speak.call(this, phrase);
    };
    return Teacher;
}(Person));
var pepe = new StudentExtend("I'm learning TypeScript");
var juan = new Teacher("I'm teaching new feature");
pepe.speak();
juan.speak("And i love it");

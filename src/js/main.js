class Person {
  constructor(name) {
    this.name = name;
  }

  static sayHi() {
    console.log("Hi!");
  }
}

let person = new Person("Hello");
person.constructor.sayHi();

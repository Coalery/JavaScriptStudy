class Hello {
  constructor(cb) {
    this.hi = 5;
    this.cb = cb;
    this.cb2 = () => this.hi;
  }

  hello() {
    return this.cb();
  }

  hello2() {
    return this.cb2();
  }
}

let hello = new Hello(function () {
  return this.hi;
});
console.log(hello.hello()); // 5
console.log(hello.hello2()); // 5
console.log(hello.cb()); // 5
console.log(hello.cb2()); // 5
console.log(hello);
console.log("");

let hello2 = new Hello(() => {
  return this.hi;
});
console.log(hello2.hello()); // undefined
console.log(hello2.hello2()); // 5
console.log(hello2.cb()); // undefined
console.log(hello2.cb2()); // 5
console.log(hello2);

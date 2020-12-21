let person = {
    'name' : 'coalery',
    'introduce' : function() {
        return `My name is ${this.name}`;
    }
};

let person2 = {
    'name' : 'doralife12',
    'introduce' : function() {
        return `My name is ${this.name}`;
    } // 중복!!
};

console.log(person.introduce());

function Person(name) { // 생성자
    this.name = name;
    this.introduce = function() {
        return `My name is ${this.name}`;
    }
}

let p1 = new Person("coalery");
console.log(p1.introduce());

let p2 = new Person("doralife12");
console.log(p2.introduce());
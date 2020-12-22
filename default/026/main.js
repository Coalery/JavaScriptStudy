function Person(name) {
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function() {
    return `My name is ${this.name}`;
};

function Programmer(name) {
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function() {
    return "Hello World!";
}

function Designer(name) {
    this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = function() {
    return "Beautiful!";
}

var p1 = new Programmer('coalery');
console.log(p1.introduce());
console.log(p1.coding());

var p2 = new Designer('designer');
console.log(p2.introduce());
console.log(p2.design());



class ModernPerson {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `My name is ${this.name}`;
    }
}

class ModernProgrammer extends ModernPerson {
    constructor(name) {
        super(name);
    }

    coding() {
        return 'Hello Modern Javascript!';
    }
}

class ModernDesigner extends ModernPerson {
    constructor(name) {
        super(name);
    }
    design() {
        return 'Beautiful!';
    }
}

let p3 = new ModernProgrammer('modern_coalery');
let p4 = new ModernDesigner('modern_designer');

console.log(p3.introduce());
console.log(p3.coding());

console.log(p4.introduce());
console.log(p4.design());
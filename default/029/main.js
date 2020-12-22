Object.prototype.contains = function(val) { // Danger
    for(let name in this) {
        if(this[name] === val) {
            return true;
        }
    }
    return false;
}

Object.prototype.containsKey = function(val) { // Danger!
    for(let name in this) {
        if(name === val) {
            return true;
        }
    }
    return false;
}

var o1 = {'name' : 'Coalery', 'city' : 'Busan'};
console.log(o1.contains('Coalery'));
console.log(o1.containsKey('name'));
console.log(o1.containsKey('age'));

var o2 = ['Hello', 'World!'];
console.log(o2.contains('Hello'));
console.log(o2.contains('Hi'));

console.log('');

for(let name in o1) {
    console.log(name);
}

console.log('');

for(let name in o1) {
    if(o1.hasOwnProperty(name)) {
        console.log(name);
    }
}
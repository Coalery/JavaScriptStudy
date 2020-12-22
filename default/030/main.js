var primA = 1;
var primB = primA;
primB = 2;
console.log(primA); // 1


var a = {'id' : 1};
var b = a;
b.id = 2;
console.log(a.id); // 2


var a1 = 1;
function func1(b1) {
    b1 = 2;
}
func1(a1);
console.log(a1); // 1


var a2 = {'id' : 1};
function func2(b2) {
    b2 = {'id' : 2};
}
func2(a2);
console.log(a2.id); // 1


var a3 = {'id' : 1};
function func3(b3) {
    b3.id = 2;
}
func3(a3);
console.log(a3.id); // 2
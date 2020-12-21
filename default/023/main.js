function func(arg1, arg2) {
    return arg1 + arg2;
}

console.log(func(2, 3));
console.log(func.apply(null, [1, 2])); // 이렇게 사용하지 마라!


var o1 = {val1 : 1, val2 : 2, val3 : 3};
var o2 = {v1 : 10, v2 : 50, v3 : 100, v4 : 25};

function sum() {
    var _sum = 0;
    for(val in this) {
        _sum += this[val];
    }
    return _sum;
}
console.log(sum.apply(o1));
console.log(sum.apply(o2));
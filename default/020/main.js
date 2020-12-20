function cal(func, num) {
    return func(num);
}

function increase(num) {
    return num + 1;
}

function decrease(num) {
    return num - 1;
}

console.log(cal(increase, 5));
console.log(cal(decrease, 11));


function cal2(mode) {
    var funcs = {
        'plus' : (left, right) => left + right,
        'minus' : (left, right) => left - right
    };
    return funcs[mode];
}

console.log(cal2('plus')(3, 4));
console.log(cal2('minus')(7, 2));


var process = [
    (val) => val + 10,
    (val) => val * val,
    (val) => val / 2
];

var input = 1;
for(var i = 0; i < process.length; i++) {
    input = process[i](input);
}
console.log(input);


var sortfunc = (a, b) => a - b;

var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
numbers.sort(sortfunc);
console.log(numbers);
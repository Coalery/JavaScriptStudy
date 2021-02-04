let n : number = 5;
let s : string = 'Hello World';
let b : boolean = true;

let a1 : number[] = [1, 3, 5];
let a2 : Array<number> = [2, 4, 6];

let t : [number, string] = [2, 'Hello'];

enum E {Apple, Banana = 3, Car}

let a : any = 23;

console.log(a as number);

function noReturn(val : string) : void {
    console.log(val);
}

function neverReturn(msg : string) : never {
    throw new Error(msg);
}
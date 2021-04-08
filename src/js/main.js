function outer() {
  let x = 3;
  function inner(z) {
    console.log(x + z);
  }
  return inner;
}

let inner = outer();

inner(5);

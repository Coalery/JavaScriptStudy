const fruits = ["banana", "apple", "orange", "orange", "apple"];

const count = fruits.reduce((acc, cur, idx, _) => {
  acc[cur] = acc[cur] ?? 0;
  acc[cur]++;
  return acc;
}, {});

console.log(count);

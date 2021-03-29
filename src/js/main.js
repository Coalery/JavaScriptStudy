function deepFreeze(obj) {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.keys(obj).forEach((key) => deepFreeze(obj[key]));
  }
  return obj;
}

const option = {
  title: "Size",
  subOptions: [
    {
      name: "S",
      surcharge: 0,
    },
    {
      name: "M",
      surcharge: 1000,
    },
    {
      name: "L",
      surcharge: 2000,
    },
    {
      name: "XL",
      surcharge: 3000,
    },
    {
      name: "XXL",
      surcharge: 4000,
    },
  ],
};

deepFreeze(option);

console.log(option);

option.subOptions[4].surcharge = 5000;

console.log(option);

// rest

const me = {
  name: "yangeunsoo",
  age: 23,
  female: true,
};

const { female, ...another } = me;

console.log(another);

const num = [0, 1, 2, 3, 4, 5, 6];

const [zero, ...rest] = num;

console.log(rest);

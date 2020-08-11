let name = "uuu";
// console.log(name);

// 배열 비구조화
let [name1] = [3, 10, 3];

// 객체 비구조화
const tom = {
  name2: "Tom",
  age: 10,
  region: "Seoul",
};
const { age, name2, height } = tom;
const tom2 = { age, name2, height };

// console.log(tom2.height);
// console.log({ age, name2, height });
// console.log(name1);

const people = [
  { name: "Tom", age: 10, region: "S" },
  { name: "Steve", age: 30, region: "S" },
];

for (const { name, age } of people) {
  console.log(name, age);
}

const animals = {
  cat: "CAT",
  dog: "DOG",
  tiger: "TIGER",
};

const animals2 = {
  cat: "Cats",
};

function print(hero) {
  const { cat, dog, actor } = hero;
  console.log({ cat, dog, actor });
}
// console.log({ cat }); // CAT

print(animals);
print(animals2);

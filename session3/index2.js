const me = {
  name: "양은수",
  age: 23,
  gender: "female",
};

const someone = {
  name: "김준면",
  age: 32,
  gender: "male",
};

function addMilitaryStateIfMale(person) {
  if (person.gender === "male") {
    person.militaryState = false;
  }
}

addMilitaryStateIfMale(me);
addMilitaryStateIfMale(someone);

function parseBoolean(value) {
  if (value === true) {
    return "참";
  } else if (value === false) {
    return "거짓";
  }
}

me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
someone.militaryState !== undefined &&
  console.log(parseBoolean(someone.militaryState));

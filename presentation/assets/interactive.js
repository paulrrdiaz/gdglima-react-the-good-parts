// Imperative
const toLowerCaseI = input => {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(input[i].toLowerCase())
  }
  return output;
}

// Declarative
const toLowerCaseD = input => input.map(value => value.toLowerCase());

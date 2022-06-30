const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Tony', 'Hank', 'Joseph', 'Barry', 'John', 'Johnny', 'Hans', 'Paul', 'Tom', 'Owen'];
const femaleNames = ['Tina', 'Karen', 'Anna', 'Patricia', 'Olga', 'Stine', 'Kate', 'Linda', 'Margaret', 'Sandra'];
const lastNames = ['Johansen', 'White', 'Black', 'Red', 'Shepard', 'Scot', 'Reeves', 'Jones', 'Baker', 'Bond'];

const randChoice = (arr) => {
  const randNum = Math.floor(Math.random() * arr.length);
  return randNum;
};

const people = [];

for (let i = 0; i < 20; i++) {
  const person = {};
  const gender = genders[randChoice(genders)];
  person.gender = gender;
  if (gender === 'M') person.name = maleNames[randChoice(maleNames)];
  if (gender === 'F') person.name = femaleNames[randChoice(femaleNames)];
  person.lastName = lastNames[randChoice(lastNames)];
  person.age = Math.floor(Math.random() * 100 + 1);
  person.email = person.name.toLowerCase() + '.' + person.lastName.toLocaleLowerCase() + '@gmail.com';
  person.phone = '+47' + Math.floor(Math.random() * 1000000000 + 1000000000);
  people.push(person);
}

console.log(people);

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

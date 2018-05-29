const faker = require("faker");
const randomness = require("../utils/randomness");

const getFakeName = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
});

const getFakeAge = () => faker.random.number({ min: 18, max: 33 });

const getRandomWord = () =>
  faker.random.arrayElement(faker.lorem.words(10).split(" "));

function* userGenerator(amount) {
  while (amount--) {
    yield {
      id: faker.random.uuid(),
      email: faker.internet.email(),
      name: randomness(0.9, getFakeName(), undefined),
      age: randomness(0.75, getFakeAge(), undefined),
      arbitrary: randomness(0.6, getRandomWord(), "")
    };
  }
}

module.exports = amount => Array.from(userGenerator(amount));

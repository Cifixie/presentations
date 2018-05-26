const faker = require('faker')

const randomness = (what) => (Math.random() * 100) < 80 ? what : null;

function* userGenerator(randomWords) {
    while (true) {
        yield {
            name: faker.name.findName(),
            email: faker.internet.email(),
            arbitrary: randomness(faker.random.arrayElement(randomWords)),
            age: randomness(faker.random.number({
                min: 18,
                max: 33
            }))
        }
    }
}

const getUser = (generator) => () => generator.next().value
module.exports = (amount) => [...Array(amount)].map(getUser(userGenerator(
    faker.lorem.words(10).split(' ')
)))

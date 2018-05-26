const faker = require('faker')

function* userGenerator(randomWords) {
    while (true) {
        yield {
            name: faker.name.findName(),
            email: faker.internet.email(),
            arbitrary: faker.random.arrayElement(randomWords.concat([null]))
        }
    }
}

const getUser = (generator) => () => generator.next().value
module.exports = (amount) => [...Array(amount)].map(getUser(userGenerator(
    faker.lorem.words(10).split(' ')
)))

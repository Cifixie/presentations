const faker = require('faker')

const randomness = (probability, yes, no) =>
    Math.random() < probability ? yes : no
;

function* userGenerator(randomWords) {
    while (true) {
        yield {
            id: faker.random.uuid(),
            name: randomness(
                .9,
                {
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                },
                undefined,
            ),
            email: faker.internet.email(),
            arbitrary: randomness(
                .6,
                faker.random.arrayElement(randomWords),
                '',
            ),
            age: randomness(
                .75,
                faker.random.number({
                    min: 18,
                    max: 33
                }),
                undefined,
            ),
            
        }
    }
}

const getUser = (generator) => () => generator.next().value
module.exports = (amount) => [...Array(amount)].map(getUser(userGenerator(
    faker.lorem.words(10).split(' ')
)))

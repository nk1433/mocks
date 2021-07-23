const faker = require("faker");

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
const task = () =>
    capitalize(faker.hacker.verb() + " " + faker.hacker.noun())

module.exports = {
    task
}
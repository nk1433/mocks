const fakerParser = require("faker-parser");
const {rndBetween} = require("@laufire/utils/random");
const overrides = require("./overrides");

const parse = fakerParser(overrides);

const task = () => 
    parse({
        name: "task",
        cost: () => rndBetween(0,10),
        tasks: [
            () => rndBetween(0,2),
            task
        ]
    });

module.exports = {
    task: task
}
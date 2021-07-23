const fakerParser = require("faker-parser");
const {rndBetween} = require("@laufire/utils/random");

const parse = fakerParser({});

const task = () => 
    parse({
        name: "name/firstName",
        cost: () => rndBetween(0,10),
        tasks: [
            () => rndBetween(0,2),
            task
        ]
    });

module.exports = {
    task: task
}
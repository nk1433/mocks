const fakerParser = require("faker-parser");
const {rndBetween} = require("@laufire/utils/random");

const parser = fakerParser({})
const task = () => {
    const template = () => ({
        name: "name/firstName",
        cost: () => rndBetween(0,10),
        tasks: [
            () => rndBetween(0,2),
            template
        ]
    });
    return parser(template);
};

module.exports = {
    task: task
}
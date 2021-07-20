const fakerParser = require("faker-parser");

const parser = fakerParser({})
const taskTree = () => {
    return parser("name.firstName")
};

module.exports = {
    taskTree
}
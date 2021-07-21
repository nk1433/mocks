const fakerParser = require("faker-parser");
const {rndBetween} = require("@laufire/utils/random");

const parser = fakerParser({})
const task = () => {
    return parser({
        name: "name/firstName",
        cost: () => rndBetween(0,10),
        tasks: [
            () => rndBetween(0,100),
            {
                name: "name/firstName",
                tasks: [
                    () => rndBetween(0,2),
                    {
                        age: () => rndBetween(1,99),
                        tasks: [
                            () => rndBetween(0,2),
                            {
                                company: "company/companyName"
                            }
                        ]
                    }
                ]
            }
        ]
    })
};

module.exports = {
    task: task
}
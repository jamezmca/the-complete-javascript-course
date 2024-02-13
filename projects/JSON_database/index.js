const { readDb, writeDb } = require("./db_functions");

// const dataObj = {
//     name: 'james',
//     favorite_numbers: [8, 3]
// }

// writeDb(dataObj)

// console.log(readDb())


const saved_data = readDb()

saved_data['number_of_bananas'] = 4

writeDb(saved_data)
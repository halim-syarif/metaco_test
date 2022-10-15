let csvToJson = require('convert-csv-to-json');


function convertCsv (csvPath) {
    let json =  csvToJson.fieldDelimiter(',').getJsonFromCsv(csvPath);
    return json
}


module.exports = convertCsv
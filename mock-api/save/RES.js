const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'data.json');

let myData = [];


exports.save = (value) => {
    myData = value;

    //
    let data = JSON.stringify(myData, null, 2);
    fs.writeFile(file, data, 'utf8', () => {});
};

exports.get = () => {
    return myData;
};

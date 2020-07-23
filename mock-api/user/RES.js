const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'data.json');

let users = [{ id: 0, user: 'user', name: 'name' }];


exports.save = (value) => {
    users = value;

    //
    let data = JSON.stringify(users, null, 2);
    fs.writeFile(file, data, 'utf8', () => {});
};

exports.get = () => {
    return users;
};

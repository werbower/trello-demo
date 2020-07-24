
let data = require('./RES');

module.exports = (req, res) =>{
    res.status(200).json(data.get());
} 


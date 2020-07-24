
const data = require('./RES');

module.exports = (req, res) => {
    
    data.save(req.body);
    return res.status(201).send(data.get());
}
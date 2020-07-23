
const data = require('./RES');

module.exports = (req, res) => {

    // const idParam = req.body.id;
    // const userParam = req.body.user;
    // const nameParam = req.body.name;
    
    data.save(req.body);
    return res.status(201).send(data.get());
}
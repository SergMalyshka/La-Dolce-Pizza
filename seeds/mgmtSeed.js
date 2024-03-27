const { Mgmt } = require('../models')
const bcrypt = require('bcrypt');

const mgmtData = [
    {
        username: "pizzateca",
        password: bcrypt.hashSync('romana', 10)
    },
];

const seedMgmt = () => Mgmt.bulkCreate(mgmtData);

module.exports = seedMgmt;
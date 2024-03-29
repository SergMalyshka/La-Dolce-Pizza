const sequelize = require('../config/connection');
const seedDish = require('./dishSeed');
const seedMgmt = require('./mgmtSeed');
const seedOrderList = require('./orderListSeed');
const seedOrder = require('./orderSeed');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedOrder();
    console.log('\n----- Orders SEEDED -----\n');

    await seedDish();
    console.log('\n----- dishes SEEDED -----\n');

    await seedOrderList();
    console.log('\n----- Order List SEEDED -----\n');

    await seedMgmt();
    console.log('\n----- Mgmt SEEDED -----\n')

    process.exit(0);
};

seedAll();
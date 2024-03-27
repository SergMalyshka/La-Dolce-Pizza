const sequelize = require('../config/connection');
const seedCustomer = require('./customerSeed');
const seedItem = require('./itemSeed');
const seedMgmt = require('./mgmtSeed');
const seedOrderList = require('./orderListSeed');
const seedOrder = require('./orderSeed');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedCustomer();
    console.log('\n----- Customers SEEDED -----\n');

    await seedOrder();
    console.log('\n----- Orders SEEDED -----\n');

    await seedItem();
    console.log('\n----- Item SEEDED -----\n');

    await seedOrderList();
    console.log('\n----- Order List SEEDED -----\n');

    await seedMgmt();
    console.log('\n----- Mgmt SEEDED -----\n')

    process.exit(0);
};

seedAll();
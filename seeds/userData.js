const { User } = require('../models');

const loginData = [
    { 
        username : 'fmcdermott4',
        password : 'password'
    },
    { 
        username : 'pittsannakate',
        password : 'password'
    },
    { 
        username : 'mariocab',
        password : 'password'
    },
    { 
        username : 'tkerekes10',
        password : 'password'
    },
    { 
        username : 'pharaohnof',
        password : 'password'
    }
];

const seedUser = () => User.bulkCreate(loginData);

module.exports = seedUser;

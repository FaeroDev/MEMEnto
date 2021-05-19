const { Login } = require('../models');

const loginData = [
    { 
        username: 'fmcdermott4',
        password: 'password'
    },
    { 
        username: 'pittsannakate',
        password: 'password'
    },
    { 
        username: 'mariocab',
        password: 'password'
    },
    { 
        username: 'tkerekes10',
        password: 'password'
    },
    { 
        username: 'pharaohnof',
        password: 'password'
    }
];

const seedLogin = () => Login.bulkCreate(loginData);
module.exports = seedLogin;
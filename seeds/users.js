const { Users } = require('../models');

const userdata = [
  {
    email: 'marks@gmail.com',
    phone: '801-555-1111',
    name: 'Mark Stevens',
    password: 'password',
      
  },

  {   
    email: 'cm@outlook.com',
    phone: '801-555-1112',
    name: 'Cameron Morgan',
    password: 'password',
    
  },

  {    
    email: 'OhRami@gmail.com',
    phone: '801-555-3111',
    name: 'Oscar Ramirez',
    password: 'password',
    
  },

  {    
    email: 'sassysmith@yahoo.com',
    phone: '801-555-1114',
    name: 'Sarah Smith',
    password: 'password',
   
  },

  {    
    email: 'mikew@comcast.net',
    phone: '801-555-1115',
    name: 'Mike Walters',
    password: 'password',
    
  },

  {    
    email: 'amy_shaw@gmail.com',
    phone: '801-555-1116',
    name: 'Amy Shaw',
    password: 'password',
    
  },

  {    
    email: 'jc@icloud.com',
    phone: '801-555-1117',
    name: 'Jeff Collins',
    password: 'password',
    
  },
  {    
    email: 'marks@gmail.com',
    phone: '801-555-1121',
    name: 'Mark Stevens',
    password: 'password',
    
  },

  {    
    email: 'cmd@outlook.com',
    phone: '801-555-1122',
    name: 'Camden Morgan',
    password: 'password',
    
  },

  {    
    email: 'JaysRamirez@gmail.com',
    phone: '801-555-3121',
    name: 'Jason Ramirez',
    password: 'password',
    
  },

  {    
    email: 'sarssmith@yahoo.com',
    phone: '801-555-1124',
    name: 'Sarah Smith',
    password: 'password',
    
  },

  {    
    email: 'monw@comcast.net',
    phone: '801-555-1125',
    name: 'Monty Walters',
    password: 'password',
    
  },

  {    
    email: 'jamie_shaw@gmail.com',
    phone: '801-555-1126',
    name: 'Jamie Shaw',
    password: 'password',
    
  },

  {    
    email: 'samc@icloud.com',
    phone: '801-555-1127',
    name: 'Sam Collins',
    password: 'password',
    
  },
  {    
    email: 'smarks@gmail.com',
    phone: '801-555-1131',
    name: 'Marky Stevens',
    password: 'password',
    
  },

  {    
    email: 'cam@outlook.com',
    phone: '801-555-1132',
    name: 'Cammy Morgan',
    password: 'password',
    
  },

  {    
    email: 'OmarRamo@gmail.com',
    phone: '801-555-3131',
    name: 'Omar Ramirez',
    password: 'password',
    
  },

  {    
    email: 'sarsmith@yahoo.com',
    phone: '801-555-1134',
    name: 'Sarrah Smith',
    password: 'password',
    
  },

  {
    email: 'mikeyw@comcast.net',
    phone: '801-555-1135',
    name: 'Mikey Walters',
    password: 'password',
    
  },

  {    
    email: 'Samy_shaw@gmail.com',
    phone: '801-555-1136',
    name: 'Samy Shaw',
    password: 'password',
    
  },

  {    
    email: 'j0c@icloud.com',
    phone: '801-555-1137',
    name: 'Jeo Collins',
    password: 'password',
    
  },
];

  
const seedProducts = () => Products.bulkCreate(productdata);

module.exports = seedProducts;
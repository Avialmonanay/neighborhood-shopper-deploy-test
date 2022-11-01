const { Comments } = require('../models');

const commentdata = [
  {
    comment: 'Is this still available?',
    user_id: '1',
    product_id: '16',
    
  },

  {
    comment: 'Nice Product',
    user_id: '2',
    product_id: '36',
    
  },

  {
    comment: 'still available?',
    user_id: '3',
    product_id: '35',
    
  },
  
  {
    comment: 'Dont buy this',
    user_id: '4',
    product_id: '34',
    
  },
  
  {
    comment: 'Waste of money',
    user_id: '5',
    product_id: '33',
    
  },
  
  {
    comment: 'Is this still available?',
    user_id: '6',
    product_id: '32',
    
  },
  
  {
    comment: 'Great product',
    user_id: '7',
    product_id: '31',
    
  },

  {
    comment: 'Is this still available?',
    user_id: '8',
    product_id: '30',
  },


  {
    comment: 'Is this still available?',
    user_id: '9',
    product_id: '29',
    
  },
  {
    comment: 'I have the same one',
    user_id: '10',
    product_id: '28',
    
  },
  {
    comment: 'Wow',
    user_id: '11',
    product_id: '27',
    
  },
  {
    comment: 'Incredible!',
    user_id: '12',
    product_id: '26',
    
  },
  {
    comment: 'Comfortable',
    user_id: '13',
    product_id: '25',
    
  },
  {
    comment: 'Hello neighbors!',
    user_id: '14',
    product_id: '24',
    
  },
  {
    comment: 'This seller is a scam',
    user_id: '15',
    product_id: '23',
    
  },
  {
    comment: 'This is nice',
    user_id: '16',
    product_id: '22',
    
  },
  {
    comment: 'Is this still available?',
    user_id: '17',
    product_id: '21',
    
  },

  {
    comment: 'Nice Product',
    user_id: '18',
    product_id: '20',
    
  },

  {
    comment: 'Is this still available?',
    user_id: '19',
    product_id: '10',
    
  },
  
  {
    comment: 'Dont buy this',
    user_id: '20',
    product_id: '10',
    
  },
  
  {
    comment: 'Waste of money',
    user_id: '2',
    product_id: '11',
    
  },
  
  {
    comment: 'Is this still available?',
    user_id: '4',
    product_id: '9',
    
  },
  
  {
    comment: 'Great product',
    user_id: '6',
    product_id: '8',
    
  },

  {
    comment: 'Is this still available?',
    user_id: '8',
    product_id: '7',
  },


  {
    comment: 'Is this still available?',
    user_id: '2',
    product_id: '6',
    
  },
  {
    comment: 'I have the same one',
    user_id: '2',
    product_id: '5',
    
  },
  {
    comment: 'Wow',
    user_id: '10',
    product_id: '4',
    
  },
  {
    comment: 'Incredible!',
    user_id: '5',
    product_id: '2',
    
  },
  {
    comment: 'Comfortable',
    user_id: '11',
    product_id: '3',
    
  },
  {
    comment: 'Hello neighbors!',
    user_id: '15',
    product_id: '1',
    
  },
  {
    comment: 'This seller is a scam',
    user_id: '11',
    product_id: '6',
    
  },
  {
    comment: 'This is nice',
    user_id: '2',
    product_id: '37',
    
  },



];

const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;
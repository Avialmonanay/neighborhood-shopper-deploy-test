const User = require('./User');
const Comments =require('./Comments')
const Products =require('./Products')


User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

User.hasMany(Products, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

Comments.belongsTo(User, {
    foreignKey: 'user_id',
  });

Products.belongsTo(User, {
    foreignKey: 'user_id',
  });

Products.hasMany(Comments, {
    foreignKey: 'product_id',
  });

Comments.belongsTo(Products, {
    foreignKey: 'product_id',
})
module.exports = { User, Comments, Products };
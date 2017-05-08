const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/sequelize_practice', { logging: false });

const User = db.define('user', {
  first: {
    type: Sequelize.STRING},
  last: {
    type: Sequelize.STRING},
  age: {
    type: Sequelize.INTEGER, validate: {min: 18}},
  email: {
    type: Sequelize.STRING, allowNull: false},
  bio: {
    type: Sequelize.TEXT}
}, {
  getterMethods: {
    fullName: function(){
      return this.first + ' ' + this.last;
    }
  },
  instanceMethods: {
    haveBirthday: function(){
      this.age++;
      return this.save()
      .then(function(user){
        return user
      })
    }
  }
});

module.exports = User;

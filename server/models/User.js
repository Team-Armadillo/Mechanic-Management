const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Book.js
const bookSchema = require('./Customer');

const userSchema = new Schema(
  {
    
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
      trim: true, 
    },
    password: {
      type: String,
      required: true,
      trim: true, 
    },
    savedCustomers: [customerSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `Usercount` with the number of saved users/customers we have
userSchema.virtual('customerCount').get(function () {
  return this.savedUsers.length;
});

const User = model('User', userSchema);

module.exports = User;
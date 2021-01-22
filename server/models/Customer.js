const { Schema } = require('mongoose');

const customerSchema = new Schema({
  first: [
    {
      type: String,
      required: true,
      trim: true, 
    },
  ],
  last: {
    type: String,
    required: true,
    trim: true, 
  },
  cellPhone: {
    type: Integer,
    required: true,
    trim: true, 
  },
  repair: {
      type: Integer,
      trim: true, 
  }
});

module.exports = customerSchema;

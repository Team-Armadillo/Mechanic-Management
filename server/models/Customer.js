const { Schema } = require('mongoose');

const customerSchema = new Schema({
  first: [
    {
      type: String,
      required: true, 
    },
  ],
  last: {
    type: String,
    required: true,
  },
  cellPhone: {
    type: Integer,
    required: true,
  }
});

module.exports = customerSchema;

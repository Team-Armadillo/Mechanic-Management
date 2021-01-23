const mongoose = require('mongoose');
const { Schema } = mongoose;
const Repair = require('./Repair');

const customerSchema = new Schema({
  first:{
    type: String,
    required: true,
    trim: true, 
  },
  last: {
    type: String,
    required: true,
    trim: true, 
  },
  cellPhone: {
    type: String,
    required: true,
    trim: true, 
  },
  repair: {
    type: Number,
    trim: true, 
    min: 0, 
    default: 0,  
  },
  repairs: [Repair.schema]
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;

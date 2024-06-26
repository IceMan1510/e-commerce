const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true,
  },
  primary_contact_number: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return /^\+[0-9]{12}$/.test(value);
      },
      message: 'Invalid contact number format',
    },
  },
  del: {
    type: String,
    enum: ['0', '1'],
    default: '0',
    required: true,
  },
  role: {
    type: String,
    enum: ['Admin', 'Vendor', 'User'],
    default: 'User',
    required: true,
  },
  avatar: {
    type: String,
  },
  created_by: {
    type: String,
    required: true,
  },
  last_updated_by: {
    type: String,
  },
  addresses: [{
    recipientName: {
      type: String,
      required: true,
    },
    contact_Number: {
      type: Number,
      required: true,
      validator: (value) => {
        return /^\+[0-9]{12}$/.test(value);
      },
    },
    flatOrHouseNumber: {
      type: String,
      required: true,
    },
    areaOrColony: {
      type: String,
      required: true,
    },
    streetOrLane: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin: {
      type: String,
      required: true,
    }
  }]
});

userSchema.pre('save', async function(next){
  const hashedPassword = bcrypt.hashSync(this.password, 10);
  this.password = hashedPassword;
  this.username = this.username.toLowerCase();
  this.email = this.email.toLowerCase();
  next();
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;

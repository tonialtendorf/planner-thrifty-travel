// Importing Mongoose Schema model
const { Schema, model } = require('mongoose');
// Importing bcrypt
const bcrypt = require('bcrypt');



const profileSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    activities: [
        {
            type: String,
            trim: true,
        },
    ],
});


// Encrypt password before save
profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });


// Method to validate password
profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };


// Create Profile model
const Profile = model('Profile', profileSchema);

module.exports = Profile;

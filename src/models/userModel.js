import mongoose from 'mongoose'
const bcrypt = require('bcrypt');
const saltRounds = 10;


const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        trim: true,  
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    address:{
        type: String
    },
    phone:{
        type: String
    },
    website: {
        type: String
    },
    Company:{
        type: String
    }
   });
    

userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });
    
module.exports = mongoose.model('user', userSchema);
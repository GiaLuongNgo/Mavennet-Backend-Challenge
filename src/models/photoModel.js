import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const photoSchema = new Schema({
    id:{
        type: Number
    },
    albumId:{
        type: Number,
        trim: true,
        required: true

    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    url:{
        type: String,
        trim: true,
        required: true
    },
    thumbnailUrl:{
        type: String,
        trim: true,
        required: true
    }
})

module.exports = mongoose.model('photo', photoSchema);
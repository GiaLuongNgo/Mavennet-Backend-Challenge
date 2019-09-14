const mongoose = require('mongoose')

const Schema = mongoose.Schema;

export const AlbumSchema = new Schema({
    id:{
        type: Number
    },
    userId:{
        type: Number
    },
    title:{
        type: String,
        trim: true,
		required: true
    }
});

module.exports =  mongoose.model('Album', AlbumSchema);









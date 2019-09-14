const Photo = require('../models/photoModel')

module.exports = {
    addNewPhoto: function (req,res) {
        let newPhoto = new Photo(req.body);
    
        newPhoto.save((err, photo)=> {
            if (err) {
                res.send(err);
            }
            res.json(photo);
        })
    },

    getPhotos: function (req,res) {
        Photo.find({}, (err, photo)=> {
            if(err) {
                res.send(err);
            }
            res.json(photo)
        })
    },

    getPhotoByID: function (req, res) {
        Photo.findById(req.params.id, (err, photo) => {
            if(err){
                res.send(err)
            }
            res.json(photo)
        })
    }
}


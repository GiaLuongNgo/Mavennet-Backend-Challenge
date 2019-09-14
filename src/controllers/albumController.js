const Album = require('../models/albumModel')

module.exports = {
    addNewAlbum: function (req,res) {
        let newAlbum = new Album(req.body);
    
        newAlbum.save((err, album)=> {
            if (err) {
                res.send(err);
            }
            res.json(album);
        })
    },

    getAlbums: function (req,res) {
        Album.find({}, (err, album)=> {
            if(err) {
                res.send(err);
            }
            res.json(album)
        })
    },

    getAlbumByID: function (req, res) {
        Album.findById(req.params.id, (err, album) => {
            if(err){
                res.send(err)
            }
            res.json(album)
        })
    }
}



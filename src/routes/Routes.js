const album = require('../controllers/albumController')
const {addNewUser, getUsers, getUserByID, authenticate} =  require('../controllers/userController')
const {addNewPhoto, getPhotos, getPhotoByID} = require('../controllers/photoController')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
  
function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });
    
  }

    router.get('/albums',validateUser, album.getAlbums);

    router.post('/albums', validateUser, album.addNewAlbum);

    router.get('/albums/:id',validateUser, album.getAlbumByID);

    router.get('/users', getUsers);

    router.post('/users', addNewUser);

    router.post('/users/authenticate', authenticate);

    router.get('/users/:id', getUserByID);

    router.get('/photos', getPhotos);

    router.post('/photos', addNewPhoto);

    router.get('/photos/:id', getPhotoByID);


module.exports = router
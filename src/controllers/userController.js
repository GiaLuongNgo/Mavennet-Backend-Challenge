const User = require ('../models/userModel')
const jwt = require('jsonwebtoken');	
const bcrypt = require('bcrypt');	


module.exports = {
    addNewUser: function(req, res) {
		let newUser = new User(req.body);

    newUser.save((err, user)=> {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
	},
    
    getUsers: function (req, res) {
        User.find({}, (err, user) => {
            if(err){
                res.send(err)
            }
            res.json(user)
        })
    },
    
    getUserByID:function (req, res) {
        User.findById(req.params.id, (err, user) => {
            if(err){
                res.send(err)
            }
            res.json(user)
        })
    },

    authenticate: async function (req, res, next) {
        await User.findOne({email : req.body.email }, (err, userInfo) => {
            if (err) {
                next(err);
            } else {
    
                if(userInfo != null && bcrypt.compareSync(req.body.password, userInfo.password)) {
    
                 const token = jwt.sign({id: userInfo.id}, req.app.get('secretKey'), { expiresIn: '1h' }); 
    
                 res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});	
    
                }else{
    
                    res.json({status:"error", message: "Invalid email/password!!!", data:null});
    
                }
            }
        })
    }
}


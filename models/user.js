const { Schema, model } = require('mongoose');
var validateEmail = function(input) {
  var regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return regex.test(input)
};

const userSchema = new Schema (
  {
    username: {
      type: String,
      required: true,
      unique:true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
      trimmed: true,
      validate: {
        isAsync: true,
        validator: validateEmail, 
        message: 'Not a valid email',
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "not a value email"]
      },
    },
    
   thoughts:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
       
   friends:[
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});


const UserData = [
  { username: 'Newguy', email:"bhyfch1@gmail.com",thoughts:[],friends:[]},
  { username: 'test', email:"bhyfch1@gmail.com",thoughts:[],friends:[]}
];
const user = model('User', userSchema);

/*
User.create(UserData, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    (Users) => res.json(Users)
  }
});*/



module.exports = user;

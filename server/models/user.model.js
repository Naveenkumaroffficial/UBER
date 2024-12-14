const mongoose = require('mongoose') // It allows defining schemas and interacting with MongoDB.
const bcrypt = require('bcrypt') //A library for hashing and securely storing passwords.
const jwt = require('jsonwebtoken') //A library for creating and verifying JSON Web Tokens (JWT) for authentication.



const userSchema = new mongoose.Schema({
    fullname : {
        firstname:{
            type: String,
            required: true, //This ensures the field must be provided.
            minlength: [3, 'the first name must be at least 3 character '] // Enforces a minimum length of 3 characters. Provides a custom error message if violated.
        },
        lastname:{
            type: String,
            minlength: [3, 'the last name must be at least 3 character ']
        }
    },
    email:{
        type: String,
        required : true,
        unique : true, //Ensures no two users can have the same email.
        minlength: [5, 'the email must be at least 5 character'],



    },
    password:{
        type: String,
        required: true,
        select:false //By default, the password will not be included in query results unless explicitly requested. This helps to secure sensitive data.
    
},
socketId :{
    type: String
    // Used to store a unique identifier for a user's WebSocket connection.

}

})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, //Payload of the JWT containing the user's ID.
         process.env.JWT_SECRET, //Secret key stored in environment variables for signing the token.
          { expiresIn: '24h' }); //Token expires in 24 hours.
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, //Plaintext password provided by the user.
        this.password);//Hashed password stored in the database.
        // Returns: true if the passwords match; otherwise false.
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
    // Purpose: Hash a password before storing it in the database.
    // password: Plaintext password to be hashed.
// 10: Salt rounds (higher numbers make hashing more secure but slower).
// Returns: The hashed password.
}

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
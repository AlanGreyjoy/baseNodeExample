const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
            trim: true
        },
        lastName:{
            type: String,
            required: true,
            trim: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Invalid email')
                }
            }
        },
        password:{
            type: String,
            required: true,
            trim: true,
            minLength: 8,
            validate(value){
                if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                    throw new Error('Password must contain at least one letter and one number')
                }
            },
            private: true,
        },
    }
)

/**
 * Get users full name
 * @returns {`${string} ${string}`}
 */
userSchema.methods.fullName = function () {
    return `${this.firstName} ${this.lastName}`
}

/**
 * Check if email is taken
 * @param email
 * @param excludedUserId
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludedUserId) {
    const user = await this.findOne({email, _id: {$ne: excludedUserId}})
    return !!user
}


/**
 * User
 * @type {Model<unknown>}
 */
const User = mongoose.model('User', userSchema)

module.exports = User
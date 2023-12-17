const mongoose = require('mongoose')

const userAttendanceSchema = new mongoose.Schema({
    username: { type:  mongoose.SchemaTypes.String, required: true },
    email: { type:  mongoose.SchemaTypes.String, required: true, unique: true },
    password: { type:  mongoose.SchemaTypes.String, required: true,},
    course: { type:  mongoose.SchemaTypes.String, required: true,},
    phone: { type:  mongoose.SchemaTypes.String, required: true,}
})

const user = mongoose.model('userAttendance', userAttendanceSchema)

module.exports = user
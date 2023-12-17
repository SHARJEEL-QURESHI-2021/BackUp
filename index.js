const mongoose = require('mongoose');
const express = require("express");
// const dotenv = require("dotenv");
const userAttendanceSchema = require("./Model/user.js")
const port = 300
const app = express()
// dotenv.config()
const userRoutes = require('./routes/user.js')
// const blogRoutes = require('./routes/blog.js')


mongoose.connect("mongodb+srv://HACK:attendance@cluster0.ds5awzf.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
})

// Parse JSON request bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        msg: 'Run'
    })
})

app.use('/user', userRoutes)
// app.use('/blog', blogRoutes)
// Connecting






// app.post("/user", async (req, res) => {
//     const userBody = req.body;
//     try {
//         const newUser = new userSchema({ ...userBody });
//         await newUser.save();
//         res.status(200).send("User has been created!");
//     } catch (error) {
//         console.error("Error saving user:", error);
//         res.status(500).send(error.message);
//     }

// });





app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
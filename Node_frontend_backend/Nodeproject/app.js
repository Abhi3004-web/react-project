const express = require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();
const userModel = require("./usermodel");
const PORT = 5000;
app.use(cors());
app.use(bodyparser.json());

app.get("/", (req, res) => {
    res.send("Hello first Introduction");
})

// Route to handle POST requests
app.post('/addData', async (req, res) => {
    try {
        const { name, age, address, gender } = req.body;

        // Log the received data to verify if it's correct
        console.log("Received data:", req.body);

        // Validation: Check if all fields are present
        if (!name || !age || !address || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        } else {
            const newUser = new userModel({ name, age, address, gender });
            await newUser.save();
            res.status(201).json({ message: 'User created successfully' });
        }

        // Normally, save the data to the database
        // For now, just return a success message

    } catch (error) {
        console.error('Error in /addData route:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



app.get("/create", async (req, res) => {
    const userData = await userModel.create({
        name: "Abhijit",
        age: 29,
        address: "Delhi",
        gender: "Male"
    })
    res.send(userData);
})

app.get("/allRecords", async (req, res) => {
    const allData = await userModel.find();
    res.send(allData);
})

app.get("/update", async (req, res) => {
    const updatedUserData = await userModel.findOneAndUpdate({
        name: "Abhijit"
    }, { name: "Ravi" }, { new: true });
    res.send(updatedUserData);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
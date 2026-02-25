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

// Insert records by POST method from external file. We get request and save records in MongoDB
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

// to fetch all the records from MongoDB
app.get("/allRecords", async (req, res) => {
    const allData = await userModel.find();
    res.json(allData);
})

// API endpoint to update a record by ID
app.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, address, gender } = req.body;

    try {
        const updatedRecord = await userModel.findByIdAndUpdate(
            id,
            { name, age, address, gender },
            { new: true }  // Returns the updated document
        );

        if (!updatedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }

        res.json(updatedRecord);  // Send the updated record back to the client
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// API endpoint to update a record by ID
app.get('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, address, gender } = req.body;

    try {
        const updatedRecord = await userModel.findByIdAndUpdate(
            id,
            { name, age, address, gender },
            { new: true }  // Returns the updated document
        );

        if (!updatedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }

        res.json(updatedRecord);  // Send the updated record back to the client
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// record delete from MongoDB

app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await userModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Record deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
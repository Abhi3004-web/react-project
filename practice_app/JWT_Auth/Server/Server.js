const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:5173",
        methods: ['Get', 'Post'],
        credentials: true
    }
))
const SECRET_KEY = process.env.JWT_SECRET;
const USER = {
    email: "test@user.com",
    password: "123456"
}

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email === USER.email && password === USER.password) {
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
        console.log(token);
        return res.json({ token });
    }
    res.status(401).json({ message: "Invalid Login" });
})

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ message: "No token provied" });
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).json({ message: "invalid token" });
        req.user = decoded;
        next();
    })
}

app.get("/dashboard", verifyToken, (req, res) => {
    res.json({
        message: "Welcome in dashboard",
        user: req.user
    })
})
app.listen(5000, () => console.log("Server running on port 5000"));
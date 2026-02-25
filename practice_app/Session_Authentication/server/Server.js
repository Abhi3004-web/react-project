const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.set("trust proxy", 1);

app.use(
    session({
        secret: "mySecretKey",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false, // true in production (HTTPS)
            sameSite: "lax",
            maxAge: 1000 * 60 * 60, // 1 hour
        },
    })
);

const USER = {
    email: "admin@test.com",
    password: "123456",
};

// Login route
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === USER.email && password === USER.password) {
        req.session.user = { email };
        return res.json({ message: "Login successful" });
    }

    res.status(401).json({ message: "Invalid credentials" });
});

// Protected route
app.get("/dashboard", (req, res) => {
    if (req.session.user) {
        return res.json({
            message: "Welcome to dashboard",
            user: req.session.user,
        });
    }

    res.status(401).json({ message: "Unauthorized" });
});

// Logout
app.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.json({ message: "Logged out" });
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));
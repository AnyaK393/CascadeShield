const express = require("express");

const app = express();

const PORT = 5001;

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        service: "user-service",
        status: "healthy",
        port: PORT
    });
});

app.get("/", (req, res) => {
    res.json({
        message: "User Service is running"
    });
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
const express = require("express");

const app = express();

const PORT = 5004;

app.use(express.json());


// Health check
app.get("/health", (req, res) => {
    res.json({
        service: "inventory-service",
        status: "healthy",
        port: PORT
    });
});


// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Inventory Service is running"
    });
});


// Inventory check
app.get("/inventory", (req, res) => {
    res.json({
        status: "available",
        message: "Inventory is available"
    });
});


app.listen(PORT, () => {
    console.log(`Inventory Service running on port ${PORT}`);
});
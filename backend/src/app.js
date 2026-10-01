const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const serviceRoutes = require("./routes/serviceRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/services", serviceRoutes);


// ==============================
// Health Check
// ==============================

app.get("/api/health", (req, res) => {
    res.json({
        message: "AI Microservice Resilience Platform API",
        status: "running"
    });
});


// ==============================
// Database Test
// ==============================

app.get("/api/db-test", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT 1 AS result");

        res.json({
            status: "success",
            database: "connected",
            result: rows[0].result
        });

    } catch (error) {
        console.error("Database connection error:", error);

        res.status(500).json({
            status: "error",
            message: "Database connection failed"
        });
    }
});


module.exports = app;
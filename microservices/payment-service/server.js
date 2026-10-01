const express = require("express");

const app = express();

const PORT = 5003;
const INVENTORY_URL = "http://localhost:5004";

app.use(express.json());


// Health check
app.get("/health", (req, res) => {
    res.json({
        service: "payment-service",
        status: "healthy",
        port: PORT
    });
});


// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Payment Service is running"
    });
});


// Payment route
app.get("/payments", async (req, res) => {

    try {

        // Ask Inventory Service to reserve/check inventory
        const inventoryResponse = await fetch(
            `${INVENTORY_URL}/inventory`
        );

        if (!inventoryResponse.ok) {
            throw new Error("Inventory service returned an error");
        }

        const inventoryData = await inventoryResponse.json();

        // If inventory is available, payment succeeds
        res.json({
            status: "success",
            message: "Payment processed successfully",
            inventory: inventoryData
        });

    } catch (error) {

        // Inventory failure causes payment failure
        res.status(503).json({
            status: "failed",
            message: "Payment could not be processed",
            reason: "Inventory service unavailable"
        });

    }

});


app.listen(PORT, () => {
    console.log(`Payment Service running on port ${PORT}`);
});
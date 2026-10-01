const express = require("express");

const app = express();

const PORT = 5002;
const PAYMENT_SERVICE_URL = "http://localhost:5003";

app.use(express.json());


// Health check
app.get("/health", (req, res) => {
    res.json({
        service: "order-service",
        status: "healthy",
        port: PORT
    });
});


// Create order
app.post("/orders", async (req, res) => {

    try {

        console.log("Order received");

        // Call Payment Service
        const paymentResponse = await fetch(
            `${PAYMENT_SERVICE_URL}/payments`
        );

        if (!paymentResponse.ok) {
            throw new Error("Payment service failed");
        }

        const paymentData = await paymentResponse.json();

        res.json({
            status: "success",
            message: "Order created successfully",
            payment: paymentData
        });

    } catch (error) {

        console.error("Order failed:", error.message);

        res.status(503).json({
            status: "failed",
            message: "Order could not be completed",
            reason: "Payment service unavailable"
        });
    }
});


app.get("/", (req, res) => {
    res.json({
        message: "Order Service is running"
    });
});


app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});
const db = require("../config/db");

const getAllServices = async (req, res) => {
    try {
        const [services] = await db.query(
            "SELECT * FROM services ORDER BY id"
        );

        res.json({
            status: "success",
            count: services.length,
            services: services
        });

    } catch (error) {
        console.error("Error fetching services:", error);

        res.status(500).json({
            status: "error",
            message: "Failed to fetch services"
        });
    }
};

module.exports = {
    getAllServices
};
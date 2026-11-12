import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await connectDB();

        app.on("error", (error) => {
            console.log("Server Error:", error);
            throw error;
        });

        app.listen(PORT, () => {
            console.log(`🚀 Server is running at http://localhost:${PORT}`);
        });
    } catch (err) {
        console.log("MongoDB connection failed !!!", err);
    }
};

startServer();


const http = require("http");
const app = require("./app");
const connectToDB = require("./db/db");
const port = process.env.PORT || 8080;

async function startServer() {
    try {
        // Connect to database first
        await connectToDB();
        
        // Start server after database connection is established
        const server = http.createServer(app);
        server.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

startServer();
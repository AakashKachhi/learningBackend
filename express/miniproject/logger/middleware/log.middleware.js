import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

// Handles ES Modules __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to log all requests
const logMiddleware = (req, res, next) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}\n`;
    const logFile = path.join(__dirname, "../logs/requests.log");
    fs.appendFileSync(logFile, log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
    });
    next();
};

export default logMiddleware;
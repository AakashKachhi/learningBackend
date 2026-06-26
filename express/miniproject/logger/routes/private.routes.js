import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Dashboard (access token)

router.get("/dashboard", authMiddleware, (req, res) => {
    res.status(200).send({
        message: `Welcome to the Dashboard ${req.user.name}`
    });
});

export default router;
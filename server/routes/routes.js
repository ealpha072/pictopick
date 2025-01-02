
    import express from "express";
    import User from "../models/models.js";
    const appRoute = express.Router();

    appRoute.get("/", (req, res) => {
        res.send("Good morning Africa");
    });

    export default appRoute;

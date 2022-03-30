import express from "express";
import {
    getKochbuch,
    getRezeptById,
    getRezeptByTitle,
    addRezept,
    newRzptValidators,
    } from "../controllers/kochbuchControllers";

    const router = express.Router();

router.get("/", getKochbuch);
router.get("/search", getRezeptByTitle);
router.get("/:id", getRezeptById);
router.post("/add", newRzptValidators, addRezept);

export default router;

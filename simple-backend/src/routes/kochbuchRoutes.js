import express from "express";
import {
    getKochbuch,
    getRezeptById,
    getRezeptByTitle,
    addRezept,
    updateRezept,
    deleteRezept,
    newRzptValidators,
    } from "../controllers/kochbuchControllers.js";

    const router = express.Router();

router.get("/", getKochbuch);
router.get("/searchId/:id", getRezeptById);
router.get("/search/:rezept", getRezeptByTitle);
router.post("/add", newRzptValidators, addRezept);
router.put("/update/:id",newRzptValidators,updateRezept);
router.delete("/delete/:id",deleteRezept);

export default router;

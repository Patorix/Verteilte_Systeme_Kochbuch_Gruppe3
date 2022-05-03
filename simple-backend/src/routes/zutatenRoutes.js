import express from "express";
import {
    getZutaten,
    getZutatenByRezept,
    addZutaten,
    updateZutaten,
    deleteZutaten,
    newZutatenValidators,
    } from "../controllers/zutatenControllers.js";

    const router = express.Router();

router.get("/", getZutaten);
router.get("/search/:rezept", getZutatenByRezept);
router.post("/add", newZutatenValidators, addZutaten);
router.put("/update/:rezept",newZutatenValidators,updateZutaten);
router.delete("/delete/:rezept",deleteZutaten);

export default router;
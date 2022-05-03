import express from "express";
import {
    getNWerte,
    getNWerteByRezept,
    addNWerte,
    updateNWerte,
    deleteNWerte,
    newNWerteValidators,
    } from "../controllers/naehrwerteControllers.js";

    const router = express.Router();

router.get("/", getNWerte);
router.get("/search/:rezept", getNWerteByRezept);
router.post("/add", newNWerteValidators, addNWerte);
router.put("/update/:rezept",newNWerteValidators,updateNWerte);
router.delete("/delete/:rezept",deleteNWerte);

export default router;
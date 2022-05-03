import { check, validationResult } from "express-validator";
import { NWerte } from "../models/naehrwerte.js";

export const getNWerte = async (req, res) => {
    const nw = await NWerte.find();
    res.status(200).send(nw);
};

export const getNWerteByRezept = async (req, res) => {
    let nw = await NWerte.find({ rezept: req.params.rezept });
    res.status(200).send(nw);
};

export const addNWerte = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const nwerte = new NWerte({
        rezept: req.body.rezept,
        kalorien: req.body.kalorien,
        kohlenhydrate: req.body.kohlenhydrate,
        fett: req.body.fett,
        eiweiß: req.body.eiweiß,
    });
    NWerte.create(nwerte);
    res.status(201).send(nwerte);
};

export const updateNWerte = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const nwerte = new NWerte({
        rezept: req.body.rezept,
        kalorien: req.body.kalorien,
        kohlenhydrate: req.body.kohlenhydrate,
        fett: req.body.fett,
        eiweiß: req.body.eiweiß,
    });
    await NWerte.replaceOne(
        {
            rezept: req.params.rezept,
        },
        {
            rezept: req.body.rezept,
            kalorien: req.body.kalorien,
            kohlenhydrate: req.body.kohlenhydrate,
            fett: req.body.fett,
            eiweiß: req.body.eiweiß,
        }
    );
    res.status(200).send(nwerte);
};

export const deleteNWerte = async (req, res) => {
    await NWerte.deleteOne(NWerte.find({ rezept: req.params.rezept }));
    res.status(200).send("Geloescht");
};

export const newNWerteValidators = [
    check("rezept").notEmpty().withMessage("Rezept required"),
    check("kalorien").notEmpty().withMessage("Kalorien required"),
    check("kohlenhydrate").notEmpty().withMessage("Kohlenhydrate required"),
    check("fett").notEmpty().withMessage("Fett required"),
    check("eiweiß").notEmpty().withMessage("Eiweiß required"),
];

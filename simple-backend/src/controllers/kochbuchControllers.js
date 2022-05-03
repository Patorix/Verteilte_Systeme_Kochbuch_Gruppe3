import { check, validationResult } from "express-validator";
import { Rezept } from "../models/kochbuch.js";

export const getKochbuch = async (req, res) => {
    const kb = await Rezept.find();
    res.status(200).send(kb);
};

export const getRezeptById = async (req, res) => {
    let kb = await Rezept.findById(req.params.id);
    res.status(200).send(kb);
};

export const getRezeptByTitle = async (req, res) => {
    console.log(req.query.rezept);
    let kb = await Rezept.find({ rezept: req.params.rezept });
    res.status(200).send(kb);
};

export const addRezept = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const rzpt = new Rezept({
        rezept: req.body.rezept,
        dauer: req.body.dauer,
        zubereitung: req.body.zubereitung,
        schwierigkeitsgrad: req.body.schwierigkeitsgrad,
    });
    Rezept.create(rzpt);
    res.status(201).send(rzpt);
};

export const updateRezept = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const rzpt = new Rezept({
        rezept: req.body.rezept,
        dauer: req.body.dauer,
        zubereitung: req.body.zubereitung,
        schwierigkeitsgrad: req.body.schwierigkeitsgrad,
    });
    await Rezept.replaceOne(
        {
            id: req.params.id,
        },
        {
            rezept: req.body.rezept,
            dauer: req.body.dauer,
            zubereitung: req.body.zubereitung,
            schwierigkeitsgrad: req.body.schwierigkeitsgrad,
        }
    );
    res.status(200).send(rzpt);
};

export const deleteRezept = async (req, res) => {
    await Rezept.deleteOne(Rezept.findById(req.params.id));
    res.status(200).send("Geloescht");
};

export const newRzptValidators = [
    check("rezept").notEmpty().withMessage("Rezept required"),
    check("dauer").notEmpty().withMessage("Dauer required"),
    check("zubereitung").notEmpty().withMessage("Zubereitung required"),
    check("schwierigkeitsgrad").notEmpty().withMessage("Schwierigkeitsgrad required"),
];

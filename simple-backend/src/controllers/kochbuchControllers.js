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
    let result = await Rezept.find({ rezept: req.query.rezept });
    res.status(200).send(result);
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

    rzpt.save(rzpt).then((todo) => res.status(201).send(todo));
};

// attached as second param in a route
export const newRzptValidators = [
    check("rezept").notEmpty().withMessage("Rezept required"),
    check("zubereitung").notEmpty().withMessage("Zubereitung required"),
];

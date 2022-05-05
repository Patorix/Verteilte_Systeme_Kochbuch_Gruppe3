import { check, validationResult } from "express-validator";
import { Zutaten } from "../models/zutaten.js";

export const getZutaten = async (req, res) => {
    const zt = await Zutaten.find();
    if(zt.length==0){
        return res.status(400).send({error: "Keine Zutaten vorhanden"});
    }
    res.status(200).send(zt);
};

export const getZutatenByRezept = async (req, res) => {
    let zt = await Zutaten.find({ rezept: req.params.rezept });
    if(zt.length==0){
        return res.status(400).send({error: `Keine Zutaten für ${req.params.rezept} vorhanden`});
    }
    res.status(200).send(zt);
};

export const addZutaten = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let zt = await Zutaten.find({ rezept: req.body.rezept });
    if(zt.length!=0){
        return res.status(400).send({error: `Fuer ${req.body.rezept} bereits Zutaten enthalten`});
    }
    const zutaten = new Zutaten({
        rezept: req.body.rezept,
        zutaten_2P: req.body.zutaten_2P,
        zutaten_4P: req.body.zutaten_4P,
        zutaten_8P: req.body.zutaten_8P,
    });
    Zutaten.create(zutaten);
    res.status(201).send(zutaten);
};

export const updateZutaten = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let zt = await Zutaten.find({ rezept: req.params.rezept });
    if(zt.length==0){
        return res.status(400).send({error: `Zutaten fuer ${req.params.rezept} existieren nicht`});
    }
    const zutaten = new Zutaten({
        rezept: req.body.rezept,
        zutaten_2P: req.body.zutaten_2P,
        zutaten_4P: req.body.zutaten_4P,
        zutaten_8P: req.body.zutaten_8P,
    });
    await Zutaten.replaceOne(
        {
            rezept: req.params.rezept,
        },
        {
            rezept: req.body.rezept,
            zutaten_2P: req.body.zutaten_2P,
            zutaten_4P: req.body.zutaten_4P,
            zutaten_8P: req.body.zutaten_8P,
        }
    );
    res.status(200).send(zutaten);
};

export const deleteZutaten = async (req, res) => {
    let zt = await Zutaten.find({ rezept: req.params.rezept });
    if(zt.length==0){
        return res.status(400).send({error: `Zutaten fuer ${req.params.rezept} existieren nicht`});
    }
    await Zutaten.deleteOne(Zutaten.find({ rezept: req.params.rezept }));
    res.status(200).send("Geloescht");
};

export const newZutatenValidators = [
    check("rezept").notEmpty().withMessage("Rezept required"),
    check("zutaten_2P").notEmpty().withMessage("Zutaten_2P required"),
    check("zutaten_4P").notEmpty().withMessage("Zutaten_4P required"),
    check("zutaten_8P").notEmpty().withMessage("Zutaten_8P required"),
];

import mongoose from "mongoose";

const nWerteSchema = new mongoose.Schema({
    rezept: String,
    kalorien: String,
    kohlenhydrate: String,
    fett: String,
    eiweiß: String,
});

export const NWerte = mongoose.model("NWerte", nWerteSchema);
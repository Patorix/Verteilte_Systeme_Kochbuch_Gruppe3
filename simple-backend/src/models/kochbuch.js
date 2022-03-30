import mongoose from "mongoose";

const rezeptSchema = new mongoose.Schema({
    rezept: String,
    dauer: String,
    zubereitung: String,
    schwierigkeitsgrad: Number,
});

export const Rezept = mongoose.model("Rezept", rezeptSchema);
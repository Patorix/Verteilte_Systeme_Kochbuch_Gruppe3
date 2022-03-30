import mongoose from "mongoose";

const kochbuchSchema = new mongoose.Schema({
    rezept: String,
    dauer: String,
    zubereitung: String,
    schwierigkeitsgrad: Number,
});

export const Kochbuch = mongoose.model("Kochbuch", kochbuchSchema);
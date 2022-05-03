import mongoose from "mongoose";

const zutatenSchema = new mongoose.Schema({
    rezept: String,
    zutaten_2P: String,
    zutaten_4P: String,
    zutaten_8P: String,
});

export const Zutaten = mongoose.model("Zutaten", zutatenSchema);
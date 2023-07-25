import mongoose from "mongoose";

const AdventureSchema= new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    adventureType: {type: String, required: true},
    location: {type: String, required: true},
    points: {type: Number, required: true},
    photo: {type: String,required: true},
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})

const adventureModel = mongoose.model('Adventure', AdventureSchema);

export default adventureModel;
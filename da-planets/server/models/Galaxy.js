import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
  name: { type: String, required: true, minlength: 1, maxlength: 1000 },
  stars: { type: Number, required: true }

}, { timestamps: true, toJSON: { virtuals: true } })
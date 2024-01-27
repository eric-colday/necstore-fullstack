import mongoose from "mongoose";

const { Schema } = mongoose;

const catprodSchema = new Schema(
  {
    slug: {type: String},
    title: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 20,
    },
    img: { type: String, default: "/noavatar.png" },
    products: { type: Array },
  },
  { timestamps: true }
);

export default mongoose.models.Catprod || mongoose.model("Catprod", catprodSchema);

import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    img: { type: [String], default: "/noavatar.png" },
    title: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 20,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: [String],
    },
    slug: {
      type: String,
    },
    catSlug: {
      type: String,
    },
    cat: { type: Array },
    size: { type: Array },
    color: { type: Array },
    inStock: { type: Number, required: true },
    sold: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", productSchema);

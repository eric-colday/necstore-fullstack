import mongoose from "mongoose";

const { Schema } = mongoose;

const CategoriesProductsSchema = new Schema(
  {
    slug: {type: String},
    title: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 20,
    },
    img: { type: String, default: "https://res.cloudinary.com/dzer4ijr1/image/upload/v1703108635/users/noavatar_xckjxl.png" },
    products: { type: Array },
  },
  { timestamps: true }
);

export default mongoose.models.CategoriesProducts || mongoose.model("CategoriesProducts", CategoriesProductsSchema);

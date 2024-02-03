import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema(
  { 
    products: [
      {
        productId: {
          type: String,
        },
        title: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number },
    status: { type: String },
    intent_id: { type: String, },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    userEmail: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);

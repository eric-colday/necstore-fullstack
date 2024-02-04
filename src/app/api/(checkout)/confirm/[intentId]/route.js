import connect from "../../../../../utils/db";
import Order from "../../../../../models/Order";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const { intentId } = params;
  try {
    await connect();
    // FIND ORDER AND UPDATE

    await Order.findOneAndUpdate(
      { intent_id: intentId },
      { status: "Payé!" },
      { new: true }
    );
    return new NextResponse(
      JSON.stringify({ message: "Mis à jour avec succès!", status: "Payé!", intentId: intentId}),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "Database Error" }), {
      status: 500,
    });
  }
};

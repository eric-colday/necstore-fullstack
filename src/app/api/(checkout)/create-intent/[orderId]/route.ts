import { NextRequest, NextResponse } from "next/server";
import Order from "../../../../../models/Order";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


export async function POST(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  const { orderId } = params;

  const order = await Order.findById(orderId);

  if (order) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(order.amount) * 100,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    order.intent_id = paymentIntent.id;
    await order.save();

    return new NextResponse(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200 }
    );
  }
  return new NextResponse(
    JSON.stringify({ message:"Order not found!" }),
    { status: 404 }
  );
}
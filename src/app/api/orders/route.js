"use server";

import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Order from "../../../models/Order";
import { getAuthSession } from "../../../utils/auth";
import User from "../../../models/User";

export const GET = async (req) => {
  try {
    await connect();
    const orders = await Order.find();
    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();
  const body = await req.json();
  const newOrder = new Order(body);

  if (session) {
    try {
      await connect();

      await newOrder.save();
      return new NextResponse(
        JSON.stringify({ message: "Order has been created" }),
        { status: 201 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: "Database Error" }), {
        status: 500,
      });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
};

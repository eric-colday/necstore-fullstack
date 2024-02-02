import { NextResponse } from "next/server";
import Order from "../../../../models/Order";
import connect from "../../../../utils/db";


export const GET = async (request, { params }) => {
    const { id } = params;
  
    try {
      await connect();
      // FIND PRODUCT BY ID
      const order = await Order.findById(id);
  
      return new NextResponse(JSON.stringify(order), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
}; 
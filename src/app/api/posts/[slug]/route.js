import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import Product from "../../../../models/Product";

// GET SINGLE POST
export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    await connect();
    // FIND PRODUCT BY SLUG
    const product = await Product.findOne({ slug });

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};




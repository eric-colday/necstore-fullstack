import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Product from "../../../models/Product";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page"));
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 8;

  

  try {
    await connect();
    const products = await Product.find({
      ...(cat && { catSlug: cat }),
    }).skip(POST_PER_PAGE * (page - 1)).limit(POST_PER_PAGE);
    const count = await Product.countDocuments({
      ...(cat && { catSlug: cat }),
    });
    return new NextResponse(JSON.stringify({ products, count }), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
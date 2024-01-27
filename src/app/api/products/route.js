import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Product from "../../../models/Product";

export const GET = async (req) => {

  try {
    await connect();
    const products = await Product.find()
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  } 
};

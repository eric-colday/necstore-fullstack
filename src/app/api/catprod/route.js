import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Catprod from "../../../models/Catprod";

export const GET = async (req) => {

  try {
    await connect();
    const productcategory = await Catprod.find()
    return new NextResponse(JSON.stringify(productcategory), { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  } 
};

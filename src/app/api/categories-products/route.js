import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import CategoriesProducts from "../../../models/CategoriesProducts";

export const GET = async (req) => {

  try {
    await connect();
    const categories = await CategoriesProducts.find()
    return new NextResponse(JSON.stringify(categories), { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  } 
};


export const POST = async (req) => {
  const body = await req.json();
  const newCategory = new CategoriesProducts(body);

  try {
    await connect();
    await newCategory.save();
    return new NextResponse(JSON.stringify({ message: "Category has been created"}), { status: 201 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Database Error" }), { status: 500 });
  }
}
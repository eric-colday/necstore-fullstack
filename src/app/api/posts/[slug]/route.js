import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import Post from "../../../../models/Post";

// GET SINGLE POST
export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    await connect();
    // FIND PRODUCT BY SLUG
    const post = await Post.findOne({ slug });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};




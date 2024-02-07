import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Post from "../../../models/Post";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page"));
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 8;

  try {
    await connect();
    const posts = await Post.find({
      ...(cat && { catSlug: cat }),
    }).skip(POST_PER_PAGE * (page - 1)).limit(POST_PER_PAGE);
    const count = await Post.countDocuments({ 
      ...(cat && { catSlug: cat }),
    });
    return new NextResponse(JSON.stringify({ posts, count }), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import User from "../../../../models/User";
import { getAuthSession } from "../../../../utils/auth";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const user = await User.findById(id);
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const session = await getAuthSession();
  const { id } = params;
  const { username, email, fullname, phone, address, image } =
    await request.json();

  if (session) {
    try {
      await connect();
      // FIND USER BY ID AND UPDATE
      await User.findByIdAndUpdate(
        id,
        {
          username,
          email,
          fullname,
          phone,
          address,
          image,
        },
        { new: true }
      );
      return new NextResponse(
        JSON.stringify({ message: "Utilisateur mis à jour" }),
        {
          status: 201,
        }
      );
    } catch (error) {
      console.log(error);
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

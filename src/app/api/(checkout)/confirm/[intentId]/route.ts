// import { NextResponse } from "next/server";
// import Order from "../../../../../models/Order";
// import connect from "../../../../../utils/db";

// export const PUT = async ({ params }: { params: { intentId: string } }) => {
//   const { intentId } = params;

//   try {
//     await connect();
//     const order = await Order.findByIdAndUpdate({ intent_id: intentId });
//     order.status = "payé!";
//     return new NextResponse(
//       JSON.stringify({ message: "Order has been updated", order: order}),
//       { status: 200 }
//     );
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }),
//       { status: 500 }
//     );
//   }
// };
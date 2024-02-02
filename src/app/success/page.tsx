"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";

const BASE_URL = process.env.NEXTAUTH_URL;

const SuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // const paymentIntent = searchParams.get("payment_intent");
  const dispatch = useDispatch();

  useEffect(() => {
    const makeRequest = async () => { 
      try {
        // await fetch(`${BASE_URL}/api/confirm/${paymentIntent}`, {
        //   method: "PUT",
        // });
        setTimeout(() => {
          dispatch(resetCart());
          router.push("/commandes");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [ router]);

  return (
    <>
      <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700">
        <p className="max-w-[600px]">
          Payment successful. You are being redirected to the orders page.
          Please do not close the page.
        </p>
      <ConfettiExplosion className="absolute m-auto"/>
      </div>
    </>
  );
};

export default SuccessPage;

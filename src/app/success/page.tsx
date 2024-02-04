"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";



const SuccessPage = () => {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);;
  const payment_intent = searchParams.get("payment_intent");
  

  const dispatch = useDispatch();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`/api/confirm/${payment_intent}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ payment_intent: payment_intent, status: "Payé!" })
        });
        
        setTimeout(() => {
          dispatch(resetCart());
          router.push("/commandes");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [router]);

  return (
    <>
      <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl">
        <p className="max-w-[600px]">
          Paiement réussi. Vous êtes redirigé vers la page des commandes. Merci de ne pas fermer la page.
        </p>
        <ConfettiExplosion className="absolute m-auto" />
      </div>
    </>
  );
};

export default SuccessPage;

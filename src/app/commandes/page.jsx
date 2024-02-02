"use client";
import React from "react";
import styles from "./commandes.module.css";
import { Orders } from "../../data.js";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Table from "../../components/commandes/Table";



const Commandes = () => {
  const { data: session, status } = useSession(); 
  const userEmail = session?.user?.email;

  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") return <div className="h-screen flex justify-center items-center ">Veuillez vous connecter pour voir vos commandes.</div>;

  return (
    <div className="h-screen ">
        <div className="p-10">
          <h1 className="text-3xl font-semibold px-6">Commandes</h1>
          <Table userEmail={userEmail}/> 
        </div>    
    </div>
  );
};

export default Commandes;

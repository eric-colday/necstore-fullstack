"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { format } from "timeago.js";
import { useQuery } from "@tanstack/react-query";
import { ThemeContext } from "../../context/ThemeContext";

const BASE_URL = process.env.NEXTAUTH_URL;

const Table = ({ userEmail }) => {
  const { theme } = useContext(ThemeContext);
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch(`/api/orders?userEmail=${userEmail}`).then(
        (res) => res.json()
      ),
  });

  return (
    <table
      className="mt-14 w-full"
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a", color: "white" }
          : { backgroundColor: "#E6F4FE", color: "black" }
      }
    >
      <thead>
        <tr className="h-20">
          <td className="border-b pl-4 max-[910px]:hidden">ID</td>
          <td className="border-b pl-4">Email</td>
          <td className="border-b pl-4 ">Montant</td>
          <td className="border-b pl-4 max-[910px]:hidden">
            Nombre de produits
          </td>
          <td className="border-b pl-4 max-[421px]:hidden">Status</td>
          <td className="border-b pl-4 max-[1115px]:hidden">Date</td>
        </tr>
      </thead>
      <tbody>
        {data?.map((order, index) => {
          return (
            <tr className="h-14" key={index}>
              <td className="border-b pl-4 py-4 max-[910px]:hidden">
                {order._id}
              </td>
              <td className="border-b pl-4 py-4 ">{order.userEmail}</td>
              <td className="border-b pl-4 ">{order.amount}€</td>
              <td className="group/item border-b pl-4 cursor-pointer max-[910px]:hidden">
                {order.products.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                produits
                <div className="absolute z-50 bg-white text-blue-950 group/edit invisible hover:bg-slate-200 group-hover/item:visible ">
                  {
                    <div className="flex flex-col gap-2 p-2">
                      {order.products.map((item) => (
                        <div className="flex justify-between gap-5">
                          <p>{item.title}</p>
                          <p>{item.price}€</p>
                        </div>
                      ))}
                    </div>
                  }
                </div>
              </td>
              <td
                className="border-b pl-4 max-[421px]:hidden"
                style={
                  order.status === "terminé"
                    ? { color: "#21c55d" }
                    : { color: "#f77171" }
                }
              >
                {order.status}
              </td>
              <td className="border-b pl-4 max-[1115px]:hidden">
                {format(order.createdAt, "fr_FR")}
              </td>
            </tr>
          );
        })}
        <tr className=" h-20"></tr>
      </tbody>
    </table>
  );
};

export default Table;

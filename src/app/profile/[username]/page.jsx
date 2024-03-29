"use client";

import React from "react";
import UserInfos from "../../../components/profile/UserInfos";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session, status } = useSession(); 
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/connexion");
  }

  return (
    <div>
      <div className="pb-16 max-[818px]:ml-0 max-[818px]:mt-12 px-10 pt-20 ">
        <div className="grid grid-cols-2 max-[552px]:grid-cols-0 max-[552px]:flex max-[552px]:flex-col max-[552px]:gap-10 items-center">
          <h1 className="text-3xl  max-[552px]:text-3xl max-[552px]:text-center font-bold capitalize">
            Profil de l'utilisateur
          </h1>
        </div>
        <UserInfos />
      </div>
    </div>
  );
};

export default Profile;

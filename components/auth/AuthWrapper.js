import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import ProtectedRoute from "./ProtectedRoute";
import { getCookie } from "cookies-next";
// import { decryptData } from "../lib/encrypt";
import { decryptObj } from "../../lib/encrypt";

const unProtected = ["/"];
const adminUrls = ["/add_employee"];
const AuthWrapper = ({ children }) => {
  const { status, data } = useSession();
  const router = useRouter();

  if (status === "loading") return null;

  // let role = "user"

  // const user_data_dec = decryptObj(getCookie("user_data"));

  // user_role = user_data_dec?.role;

  return (
    <>
      {!unProtected.includes(router.pathname) ? (
        <ProtectedRoute>{children}</ProtectedRoute>
      ) : (
        children
      )}
    </>
  );
};

export default AuthWrapper;

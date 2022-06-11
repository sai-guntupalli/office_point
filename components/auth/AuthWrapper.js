import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import ProtectedRoute from "./ProtectedRoute";

const protectedRoutes = ["/home", "/about"];
const AuthWrapper = ({ children }) => {
  const { status, data } = useSession();
  const router = useRouter();

  if (status === "loading") return null;

  return (
    <>
      {protectedRoutes.includes(router.pathname) ? (
        <ProtectedRoute>{children}</ProtectedRoute>
      ) : (
        children
      )}
    </>
  );
};

export default AuthWrapper;

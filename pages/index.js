import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import Dashboard from "../components/dashboard";
import LandingPage from "../components/landing_page";

export default function RootPage() {
  const { status, data } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          <Dashboard user_name={data.user.name}>
            <Card />
          </Dashboard>
        </>
      ) : (
        <LandingPage />
      )}
    </>
  );
}

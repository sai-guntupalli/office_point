import { useSession } from "next-auth/react";
import Card from "../components/card";
import Dashboard from "../components/dashboard";
import LandingPage from "../components/landing_page";

export default function RootPage() {
  const { status, data } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          <Dashboard>
            <Card />
          </Dashboard>
        </>
      ) : (
        <LandingPage />
      )}
    </>
  );
}

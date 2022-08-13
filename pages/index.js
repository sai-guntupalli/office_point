import { getSession, useSession } from "next-auth/react";
import LandingPage from "../components/pages/landing_page";
import HomePage from "../components/pages/home_page";
import prisma from "../lib/prisma";
import Dashboard from "../components/dashboard";

export default function RootPage(props) {
  const { status, data } = useSession();

  return (
    <>
      {status === "authenticated" ? (
        <>
          <Dashboard user_data={props.user_data}>
            <HomePage
              user_data={props.user_data}
              professional_data={props.professional_profile}
              personal_data={props.personal_profile}
            />
          </Dashboard>
        </>
      ) : (
        <LandingPage />
      )}
    </>
  );
}

RootPage.getLayout = false;

export async function getServerSideProps(context) {
  let user_data;

  let session = await getSession(context);

  if (session) {
    user_data = await prisma.User.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    const professional_profile = await prisma.ProfessionalProfile.findUnique({
      where: {
        user_id: user_data?.id,
      },

      include: {
        department: true,
        designation: true,
        work_location: true,
      },
    });

    const personal_profile = await prisma.PersonalProfile.findUnique({
      where: {
        user_id: user_data?.id,
      },
    });

    return {
      props: {
        user_data: user_data,
        professional_profile: professional_profile,
        personal_profile: personal_profile,
      },
    };
  } else {
    return {
      props: {
        user_data: null,
        professional_profile: null,
        personal_profile: null,
      },
    };
  }
}

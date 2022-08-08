import "../styles/globals.css";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import AuthWrapper from "../components/auth/AuthWrapper";
import "react-datepicker/dist/react-datepicker.css";
import Dashboard from "../components/dashboard";
import { setCookie } from "cookies-next";
import { encryptObj } from "../lib/encrypt";
// import "tw-elements";

function MyApp({ Component, pageProps }) {
  // setCookie("user_data", encryptObj(pageProps.user_data), { secure: true });
  const applyLayout = Component?.getLayout;
  // console.log("getLayout", getLayout);
  {
    const LayoutPage =
      applyLayout === false ? (
        <SessionProvider session={pageProps.session}>
          <AuthWrapper>
            {/* <Dashboard user_data={pageProps.user_data}> */}
            <Component {...pageProps} />
            {/* </Dashboard> */}
          </AuthWrapper>
        </SessionProvider>
      ) : (
        <SessionProvider session={pageProps.session}>
          <AuthWrapper>
            <Dashboard user_data={pageProps.user_data}>
              <Component {...pageProps} />
            </Dashboard>
          </AuthWrapper>
        </SessionProvider>
      );

    return LayoutPage;
  }

  // return (
  //   <SessionProvider session={pageProps.session}>
  //     <AuthWrapper>{getLayout(<Component {...pageProps} />)}</AuthWrapper>
  //   </SessionProvider>
  // );
  // return getLayout(<Component {...pageProps} />);
}

export default MyApp;

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
        user_id: user_data.id,
      },

      include: {
        department: true,
        project: true,
        designation: true,
        work_location: true,
      },
    });

    const personal_profile = await prisma.PersonalProfile.findUnique({
      where: {
        user_id: user_data.id,
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

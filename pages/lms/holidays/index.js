import Holidays from "../../../components/pages/lms/Holidays";
import LMSTabs from "../../../components/pages/lms/LMSTabs";
import { getSession, useSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
import Head from "next/head";

const LMSPage = (props) => {
  // const user_data_from_cookie =  decryptObj(getCookie("user_data"));
  return (
    <>
      <LMSTabs />
      {/* <LMSOptions /> */}
      <Holidays user_data={props?.user_data} work_loc={props?.work_loc} />
    </>
  );
};

export default LMSPage;

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
        work_location: true,
      },
    });

    const work_loc = professional_profile?.work_location?.location;

    return {
      props: {
        user_data: user_data,
        work_loc: work_loc,
      },
    };
  } else {
    return {
      props: {
        user_data: null,
        work_loc: null,
      },
    };
  }
}

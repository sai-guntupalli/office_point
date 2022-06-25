import Dashboard from "../../../components/dashboard";
import LeaveRequest from "../../../components/pages/lms/LeaveRequest";
import LMSTabs from "../../../components/pages/lms/LMSTabs";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

const ApplyLeave = (props) => {
  console.log("props in LMS" + props);
  return (
    <>
      <Dashboard>
        <LMSTabs />
        <LeaveRequest user_data={props?.user_data} />
      </Dashboard>
    </>
  );
};

export default ApplyLeave;

export async function getServerSideProps(context) {
  let user_data;

  let session = await getSession(context);

  if (session) {
    user_data = await prisma.User.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    return {
      props: {
        user_data: user_data,
      },
    };
  } else {
    return {
      props: {
        user_data: null,
      },
    };
  }
}

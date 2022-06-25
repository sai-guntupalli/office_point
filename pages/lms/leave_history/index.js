import Dashboard from "../../../components/dashboard";
import LMSTabs from "../../../components/pages/lms/LMSTabs";
import LeaveHistoryComp from "../../../components/pages/lms/LeaveHistory";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

const LeaveHistoryFun = (props) => {
  return (
    <>
      <Dashboard>
        <LMSTabs />
        <LeaveHistoryComp user_data={props?.user_data} />
      </Dashboard>
    </>
  );
};

export default LeaveHistoryFun;

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

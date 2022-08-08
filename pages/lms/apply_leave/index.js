import LeaveRequest from "../../../components/pages/lms/LeaveRequest";
import LMSTabs from "../../../components/pages/lms/LMSTabs";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

const ApplyLeave = (props) => {
  return (
    <>
      <LMSTabs />
      <LeaveRequest
        user_data={props?.user_data}
        leaves_data={props?.leaves}
        holidays={props?.holidays}
      />
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

    // leaves = await prisma.Le;
    const leave_profile = await prisma.LeaveProfile.findUnique({
      where: {
        user_id: user_data?.id,
      },
    });

    const leaves = await prisma.Leave.findMany({
      where: {
        AND: {
          leave_profile_id: leave_profile?.id,
        },
        NOT: {
          status: "rejected",
        },
      },
      select: {
        leave_dates: true,
        status: true,
      },
      orderBy: [
        {
          start_date: "asc",
        },
      ],
    });

    const pro_profile = await prisma.ProfessionalProfile.findUnique({
      where: {
        user_id: user_data.id,
      },
      include: {
        work_location: true,
      },
    });

    const work_loc = pro_profile?.work_location?.location;
    const holidays = await prisma.Holiday.findMany({
      where: {
        location: work_loc,
      },
      orderBy: {
        date: "asc",
      },
    });

    return {
      props: {
        user_data: user_data,
        leaves: leaves,
        holidays: holidays,
      },
    };
  } else {
    return {
      props: {
        user_data: null,
        leaves: null,
        holidays: null,
      },
    };
  }
}

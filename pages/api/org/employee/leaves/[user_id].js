import prisma from "../../../../../lib/prisma";

const handler = async (req, res) => {
  const user_id_raw = req?.query?.user_id;
  const user_id = user_id_raw.split("&")[0];
  const leave_type = user_id_raw.split("&")[1];
  const leave_status = user_id_raw.split("&")[2];

  console.log("user_id_raw", user_id_raw);
  console.log("leave_type", leave_type);
  console.log("user_id", user_id);
  console.log("leave_status", leave_status);

  if (req.method === "POST") {
    const { body } = req;

    let user_update_res;

    const startDate = body.startDate;
    const endDate = body.endDate;
    const leaveDates = body.leaveDates;
    const reason = body.reason;
    const leaveType = body.leaveType;
    const numDays = leaveDates.length;

    const leave_profile_status = await prisma.LeaveProfile.upsert({
      where: {
        user_id: user_id,
      },
      update: {},
      create: {
        user: {
          connect: { id: user_id },
        },
      },
    });

    const leaveObj = {
      start_date: startDate,
      end_date: endDate,
      leave_dates: leaveDates,
      reason: reason,
      leave_type: leaveType,
      num_days: numDays,
      leave_profile_id: leave_profile_status.id,
    };

    const leave_insert_res = await prisma.Leave.create({
      data: leaveObj,
    });

    // user_update_res = await prisma.User.update({
    //   where: {
    //     id: user_id,
    //   },
    //   data: {
    //     leave_profile_id: leave_profile_status?.id,
    //   },
    // });

    return res.status(200).json(leave_insert_res);
  } else if (req.method === "GET") {
    const leave_profile = await prisma.LeaveProfile.findUnique({
      where: {
        user_id: user_id,
      },
    });

    let whereCond = { leave_profile_id: leave_profile?.id };

    if (leave_type !== "all" && leave_status !== "all") {
      whereCond = {
        leave_profile_id: leave_profile?.id,
        leave_type: leave_type,
        status: leave_status,
      };
    } else if (leave_type !== "all" && leave_status === "all") {
      whereCond = {
        leave_profile_id: leave_profile?.id,
        leave_type: leave_type,
      };
    } else if (leave_type === "all" && leave_status !== "all") {
      whereCond = {
        leave_profile_id: leave_profile?.id,
        status: leave_status,
      };
    } else {
      whereCond = { leave_profile_id: leave_profile?.id };
    }

    const leaves = await prisma.Leave.findMany({
      where: whereCond,
      orderBy: [
        {
          start_date: "asc",
        },
      ],
    });

    // console.log(leaves);
    return res.status(200).json(leaves);
  }
  res.end();
};

export default handler;

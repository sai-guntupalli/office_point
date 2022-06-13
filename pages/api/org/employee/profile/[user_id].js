import prisma from "../../../../../lib/prisma";

const handler = async (req, res) => {
  console.log("indide emp api");
  const user_id = req.query.user_id;
  if (req.method === "POST") {
    console.log("indide emp api POST");

    const { body } = req;

    console.log("user_id from api", user_id);
    const empId = body.empId;
    const email = body.email;
    const mobile = body.mobile;
    const designation = body.designation;
    const dept = body.dept;
    const manager = body.manager;
    const workLoc = body.workLoc;
    const project = body.project;

    const user_update_res = await prisma.User.update({
      where: {
        id: user_id,
      },

      data: {
        profile: {
          update: {
            emp_id: empId,
            mobile_num: mobile,
            email: email,
            designation: {
              connect: { desination: designation },
            },
            department: {
              connect: { dept: dept },
            },
            project: {
              connect: { project_name: project },
            },
            manager: manager,
            work_location: {
              connect: { location: workLoc },
            },
          },
        },
      },
    });

    console.log("user_update_res", user_update_res);

    return res.status(200).json(user_update_res);
  } else if (req.method === "GET") {
    const user_data = await prisma.User.findUnique({
      where: {
        id: user_id,
      },
    });

    const user_profile = await prisma.Profile.findUnique({
      where: {
        user_id: user_id,
      },
      include: {
        department: true,
        project: true,
        designation: true,
        work_location: true,
        address: true,
      },
    });

    console.log("user_profile_received", user_profile);
  }
  res.end();
};

export default handler;

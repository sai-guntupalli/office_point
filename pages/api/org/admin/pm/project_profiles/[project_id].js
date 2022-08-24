import prisma from "../../../../../../lib/prisma";

// Project Profiles API

const handler = async (req, res) => {
  const project_id = req?.query?.project_id;
  if (req.method === "POST") {
    console.log("inside project_profile post meth");
    const { body } = req;
    const data = {
      project_name: body?.proj_name,
      department: body?.dept,
      client_name: body?.client,
      start_date: body?.start_date,
      desc: body?.desc,
    };

    const add_proj_res = await prisma.Project.create({
      data: {
        project_name: data.project_name,
        dept: {
          connect: { dept: data.department },
        },
        client: {
          connect: { name: data.client_name },
        },
        start_date: data.start_date,
        description: data.desc,
      },
    });

    return res.status(200).json(add_proj_res);
  } else {
    console.log("project_id", project_id);
    const profiles = await prisma.ProjectProfile.findMany({
      where: {
        project_id: project_id,
      },
    });

    // console.log(holidays);
    return res.status(200).json(profiles);
  }
  res.end();
};

export default handler;

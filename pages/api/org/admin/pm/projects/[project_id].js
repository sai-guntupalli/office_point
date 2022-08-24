import prisma from "../../../../../../lib/prisma";

// Projects API

const handler = async (req, res) => {
  const project_id = req?.query?.project_id;

  if (req.method === "POST") {
    console.log("inside add_proj post meth");
    const { body } = req;
    const data = {
      project_name: body?.proj_name,
      department: body?.dept,
      client_name: body?.client,
      start_date: body?.start_date,
      desc: body?.desc,
    };

    // console.log("received proj", data);
    // const loc = body.loc;

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
        // manager: {
        //   connect: { id: data.manager },
        // },
        description: data.desc,
      },
    });

    return res.status(200).json(add_proj_res);
  } else {
    let projects = {};
    if (project_id != "all") {
      projects = await prisma.Project.findUnique({
        where: {
          id: project_id,
        },
      });
    } else {
      projects = await prisma.Project.findMany();
    }

    // console.log(holidays);
    return res.status(200).json(projects);
  }
  res.end();
};

export default handler;

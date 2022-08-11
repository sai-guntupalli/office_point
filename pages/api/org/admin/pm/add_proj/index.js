import prisma from "../../../../../../lib/prisma";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log("inside add_proj post meth");
    const { body } = req;
    const data = {
      project_name: body?.proj_name,
      department: body?.dept,
      client_name: body?.client,
      start_date: body?.start_date,
      manager: body?.manager,
      desc: body?.desc,
    };

    console.log("received proj", data);
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
        manager: {
          connect: { id: data.manager },
        },
        description: data.desc,
      },
    });

    return res.status(200).json(add_proj_res);
  } else {
    const holidays = await prisma.Project.findMany({
      orderBy: {
        id: "asc",
      },
    });

    // console.log(holidays);
    return res.status(200).json(holidays);
  }
  res.end();
};

export default handler;

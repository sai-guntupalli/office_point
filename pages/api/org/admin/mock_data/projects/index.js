import prisma from "../../../../../../lib/prisma";
import { getRandomProjects } from "../../../../../../lib/mock_data";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { body } = req;
    const num_of_proj = parseInt(body?.num_of_projs);
    const projects = getRandomProjects(num_of_proj);

    projects.map(async (proj) => {
      let insert_proj = await prisma.Project.create({
        data: {
          project_name: proj.name,
          dept: {
            connect: {
              dept: proj.dept,
            },
          },
          client: {
            connect: {
              name: proj.client,
            },
          },
          start_date: proj.start_date,
          description: proj.desc,
        },
      });
    });

    return res.status(200).json({});
  }
  res.end();
};

export default handler;

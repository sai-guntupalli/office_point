import prisma from "../../../../../lib/prisma";

const handler = async (req, res) => {
  console.log("indide user api");
  if (req.method === "GET") {
    const user_data = await prisma.User.findUnique({
      where: {
        email: req.query.email_id,
      },
    });

    console.log("user_data", user_data);
    const user_profile = await prisma.ProfessionalProfile.findUnique({
      where: {
        user_id: user_data.id,
      },
      include: {
        department: true,
        project: true,
        designation: true,
        work_location: true,
      },
    });

    console.log("user_profile", user_profile);
    return res.status(200).json(user_profile);
  }
  res.end();
};

export default handler;

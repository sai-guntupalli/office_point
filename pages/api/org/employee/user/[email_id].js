import prisma from "../../../../../lib/prisma";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const user_data = await prisma.User.findUnique({
      where: {
        email: req.query.email_id,
      },
    });

    const user_profile = await prisma.ProfessionalProfile.findUnique({
      where: {
        user_id: user_data.id,
      },
      include: {
        department: true,
        designation: true,
        work_location: true,
      },
    });

    return res.status(200).json(user_profile);
  }
  res.end();
};

export default handler;

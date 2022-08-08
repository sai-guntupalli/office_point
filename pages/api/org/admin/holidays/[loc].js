import prisma from "../../../../../lib/prisma";

const handler = async (req, res) => {
  const loc = req?.query?.loc;
  const locs = ["Banglore", "Hyderabad", "Noida", "USA"];
  if (req.method === "POST") {
    const { body } = req;
    let holidays_to_insert = [];
    const holidayDate = body.holiday_date;
    const holidayName = body.holiday_name;

    if (loc === "All Locations") {
      locs.map((loca) => {
        holidays_to_insert.push({
          date: holidayDate,
          description: holidayName,
          location: loca,
        });
      });
    } else {
      holidays_to_insert.push({
        date: holidayDate,
        description: holidayName,
        location: loc,
      });
    }

    // const loc = body.loc;

    const holiday_add_res = await prisma.Holiday.createMany({
      data: holidays_to_insert,
    });

    return res.status(200).json(holiday_add_res);
  } else {
    const holidays = await prisma.Holiday.findMany({
      where: {
        location: loc,
      },
      orderBy: {
        date: "asc",
      },
    });

    // console.log(holidays);
    return res.status(200).json(holidays);
  }
  res.end();
};

export default handler;

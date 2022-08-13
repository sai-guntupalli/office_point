import prisma from "../../../../../lib/prisma";

const handler = async (req, res) => {
  const user_id = req?.query?.user_id;
  if (req.method === "POST") {
    const { body } = req;
    const requestedInfo = body.requestedInfo;
    let user_update_res;

    if (requestedInfo === "professional") {
      const emp_designation = body.designation;
      const dept = body.dept;
      const workLoc = body.workLoc;
      const project = body.project;
      const dateOfJoin = body.dateOfJoin;

      const professional_profile_update =
        await prisma.ProfessionalProfile.upsert({
          where: {
            user_id: user_id,
          },
          update: {
            date_of_join: dateOfJoin,
            designation: {
              connect: { designation: emp_designation },
            },
            department: {
              connect: { dept: dept },
            },
            // project: {
            //   connect: { project_name: project },
            // },
            // manager: manager,
            work_location: {
              connect: { location: workLoc },
            },
          },
          create: {
            user: {
              connect: { id: user_id },
            },

            date_of_join: dateOfJoin,
            designation: {
              connect: { designation: emp_designation },
            },
            department: {
              connect: { dept: dept },
            },
            // project: {
            //   connect: { project_name: project },
            // },
            // manager: manager,
            work_location: {
              connect: { location: workLoc },
            },
          },
        });

      user_update_res = await prisma.User.update({
        where: {
          id: user_id,
        },
        data: {
          professional_profile_id: professional_profile_update.id,
        },
      });
    } else {
      const fname = body.fname;
      const lname = body.lname;
      const email = body.email;
      const mobile = body.mobile;
      const door_no = body.door_no;
      const add1 = body.add1;
      const add2 = body.add2;
      const city = body.city;
      const state = body.state;
      const country = body.country;
      const zipcode = body.zipcode;
      const about = body.about;
      const dob = body.dob;

      const address_update_res = await prisma.Address.upsert({
        where: {
          user_id: user_id,
        },
        update: {
          door_num: door_no,
          add_line1: add1,
          add_line2: add2,
          city: city,
          state: state,
          country: country,
          zipcode: zipcode,
        },
        create: {
          user: {
            connect: { id: user_id },
          },
          door_num: door_no,
          add_line1: add1,
          add_line2: add2,
          city: city,
          state: state,
          country: country,
          zipcode: zipcode,
        },
      });

      const personal_profile_update_res = await prisma.PersonalProfile.upsert({
        where: {
          user_id: user_id,
        },
        update: {
          first_name: fname,
          last_name: lname,
          personal_email: email,
          personal_mobile: mobile,
          about: about,
          date_of_birth: dob,
        },
        create: {
          user: {
            connect: { id: user_id },
          },
          first_name: fname,
          last_name: lname,
          personal_email: email,
          personal_mobile: mobile,
          about: about,
          date_of_birth: dob,
        },
      });

      user_update_res = await prisma.User.update({
        where: {
          id: user_id,
        },
        data: {
          personal_profile_id: personal_profile_update_res.id,
          address_id: address_update_res.id,
        },
      });
    }

    return res.status(200).json(user_update_res);
  } else if (req.method === "GET") {
    const user_profile = await prisma.User.findUnique({
      where: {
        id: user_id,
      },
    });

    const professional_profile = await prisma.ProfessionalProfile.findUnique({
      where: {
        user_id: user_id,
      },
      include: {
        department: true,
        designation: true,
        work_location: true,
      },
    });

    const result_json = {
      user_profile: user_profile,
      professional_profile: professional_profile,
    };

    return res.status(200).json(result_json);
  }
  res.end();
};

export default handler;

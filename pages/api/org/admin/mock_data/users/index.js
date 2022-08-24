import prisma from "../../../../../../lib/prisma";
import { getRandomUsers } from "../../../../../../lib/mock_data";
import { faker } from "@faker-js/faker";
import { current } from "daisyui/src/colors";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { body } = req;
    const num_of_users = parseInt(body?.num_of_rows);
    const user_data_arr = getRandomUsers(num_of_users);
    let insert_users = {};
    const roles = ["developer", "qa", "scrum master", "manager"];

    // const departments = await prisma.Department.findMany({
    //   select: { dept: true },
    // });

    user_data_arr.map(async (rec) => {
      let user_data_insert = await prisma.User.create({
        data: {
          id: rec.user_id,
          name: rec.first_name + " " + rec.last_name,
          email: rec.prof_email,
          role: rec.role,
        },
      });

      let inserted_rec = await prisma.PersonalProfile.create({
        data: {
          user: {
            connect: { id: rec.user_id },
          },
          first_name: rec.first_name,
          last_name: rec.last_name,
          personal_email: rec.per_email,
          personal_mobile: rec.mobile,
          about: rec.about,
          date_of_birth: rec.date_of_birth,
          gender: rec.gender,
        },
      });
      const wl = await prisma.WorkLocation.findUnique({
        where: {
          location: rec.work_loc,
        },
      });
      const desi = await prisma.Designation.findUnique({
        where: {
          designation: rec.designation,
        },
      });
      const depa = await prisma.Department.findUnique({
        where: {
          dept: rec.department,
        },
      });

      const projects = await prisma.Project.findMany({
        where: {
          department: rec.department,
        },
        select: {
          id: true,
        },
      });

      let proj_id = "cl76ugr2h13844vcmy8s8i6t2i";
      if (projects.length === 0) {
        proj_id = "cl76ugr2h13844vcmy8s8i6t2i";
      } else {
        const selectd_proj = faker.helpers.arrayElement(projects);
        proj_id = selectd_proj?.id;
      }
      const role = faker.helpers.arrayElement(roles);

      let inserted_proj_prof = await prisma.ProjectProfile.create({
        data: {
          user: {
            connect: {
              id: rec.user_id,
            },
          },
          Project: {
            connect: {
              id: proj_id,
            },
          },
          project_join_date: rec.date_of_join,
          role: role,
          status: "current",
        },
      });

      let inserted_rec_prof = await prisma.ProfessionalProfile.create({
        data: {
          user: {
            connect: {
              id: rec.user_id,
            },
          },
          work_location: {
            connect: {
              location: wl.location,
            },
          },
          designation: {
            connect: {
              designation: desi.designation,
            },
          },
          department: {
            connect: {
              dept: depa.dept,
            },
          },
          date_of_join: rec.date_of_join,
          job_type: rec.job_type,
        },
      });
      let inserted_address = await prisma.Address.create({
        data: {
          user: {
            connect: { id: rec.user_id },
          },
          door_num: rec.address.door_no,
          add_line1: rec.address.street,
          city: rec.address.city,
          state: rec.address.state,
          country: rec.address.country,
          zipcode: rec.address.zip,
        },
      });

      let user_update_res = await prisma.User.update({
        where: {
          id: rec.user_id,
        },
        data: {
          personal_profile_id: inserted_rec.id,
          professional_profile_id: inserted_rec_prof.id,
          address_id: inserted_address.id,
          project_profile_id: inserted_proj_prof.id,
        },
      });
    });

    return res.status(200).json(insert_users);
  } else if (req.method === "DELETE") {
    const deletePersonalProf = prisma.PersonalProfile.deleteMany({
      where: {
        NOT: { user_id: "emp_admin_01" },
      },
    });

    const deleteProf = prisma.ProfessionalProfile.deleteMany({
      where: {
        NOT: { user_id: "emp_admin_01" },
      },
    });

    const deleteAddress = prisma.Address.deleteMany({
      where: {
        NOT: { user_id: "emp_admin_01" },
      },
    });
    const deleteProjProf = prisma.ProjectProfile.deleteMany({
      where: {
        NOT: { id: "emp_admin_01" },
      },
    });
    const deleteUser = prisma.User.deleteMany({
      where: {
        NOT: { id: "emp_admin_01" },
      },
    });

    const transaction = await prisma.$transaction([
      deletePersonalProf,
      deleteProf,
      deleteAddress,
      deleteProjProf,
      deleteUser,
    ]);
    return res.status(200).json(transaction);
  }
  res.end();
};

export default handler;

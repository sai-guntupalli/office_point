import AddEmployee from "../../components/pages/profile/add_employee";

import prisma from "../../lib/prisma";
import { getSession } from "next-auth/react";

const UpdateEmployeeData = (props) => {
  const user_role = props?.user_data?.role || "user";
  return (
    <>
      {user_role === "admin" ? (
        <AddEmployee
          locations={props.locations}
          designations={props.designations}
          departments={props.departments}
          projects={props.projects}
          users={props.users}
          user_data={props.user_data}
        />
      ) : (
        <div>You are NOT Authorised to access thie PAGE! </div>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  let user_data;

  let session = await getSession(context);

  if (session) {
    user_data = await prisma.User.findUnique({
      include: {
        ProjectProfile: true,
        Address: true,
      },
      where: {
        email: session?.user?.email,
      },
    });

    const allUsers = await prisma.User.findMany({
      select: {
        id: true,
      },
    });
    const allLocs = await prisma.workLocation.findMany();
    const allDesignations = await prisma.Designation.findMany();
    const allProjects = await prisma.Project.findMany();
    const allDeps = await prisma.Department.findMany();

    return {
      props: {
        user_data: user_data,
        locations: allLocs,
        designations: allDesignations,
        departments: allDeps,
        projects: allProjects,
        users: allUsers,
      },
    };
  } else {
    return {
      props: {
        user_data: null,
        locations: null,
        designations: null,
        departments: null,
        projects: null,
        users: null,
      },
    };
  }
}

export default UpdateEmployeeData;

import Dashboard from "../components/dashboard";
import AddEmployee from "../components/pages/add_employee";

import prisma from "../lib/prisma";

const AddEmployeePage = (props) => {
  return (
    <>
      <Dashboard>
        <AddEmployee
          locations={props.locations}
          designations={props.designations}
          departments={props.departments}
          projects={props.projects}
          users={props.users}
        />
      </Dashboard>
    </>
  );
};

export async function getServerSideProps() {
  const allUsers = await prisma.User.findMany();
  const allLocs = await prisma.workLocation.findMany();
  const allDesignations = await prisma.Designation.findMany();
  const allProjects = await prisma.Project.findMany();
  const allDeps = await prisma.Department.findMany();

  return {
    props: {
      locations: allLocs,
      designations: allDesignations,
      departments: allDeps,
      projects: allProjects,
      users: allUsers,
    },
  };
}

export default AddEmployeePage;

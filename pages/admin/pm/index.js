import PMTabs from "../../../components/pages/pm/PMTabs";
import { getSession } from "next-auth/react";
import ListProj from "../../../components/pages/pm/ListProj";

function ProjectsDashboard(props) {
  return (
    <>
      <PMTabs />
      <ListProj
        user_data={props?.user_data}
        clients={props?.clients}
        depts={props?.depts}
      />
    </>
  );
}

export default ProjectsDashboard;

export async function getServerSideProps(context) {
  let user_data;

  let session = await getSession(context);

  if (session) {
    user_data = await prisma.User.findUnique({
      where: {
        email: session?.user?.email,
      },
    });
    const all_clients = await prisma.Client.findMany();
    const all_deps = await prisma.Department.findMany();

    return {
      props: {
        user_data: user_data,
        clients: all_clients,
        depts: all_deps,
      },
    };
  } else {
    return {
      props: {
        user_data: null,
        clients: null,
        depts: null,
      },
    };
  }
}

import PMTabs from "../../../../components/pages/pm/PMTabs";
import { getSession } from "next-auth/react";
import AddProjComp from "../../../../components/pages/pm/AddProj";
// import SearchBar from "../../../../components/pages/pm/SearchBar";
import prisma from "../../../../lib/prisma";
import SearchBar2 from "../../../../components/pages/pm/SearchBar2";

function AddProj(props) {
  return (
    <>
      <PMTabs />
      <AddProjComp
        users={props.all_users}
        departments={props.all_deps}
        clients={props.all_clients}
        user_data={props.user_data}
      />
      {/* <SearchBar2 /> */}
    </>
  );
}

export default AddProj;

export async function getServerSideProps(context) {
  let user_data;

  let session = await getSession(context);

  if (session) {
    user_data = await prisma.User.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    const all_users = await prisma.User.findMany({
      select: { id: true, name: true },
    });

    const all_clients = await prisma.Client.findMany();
    const all_deps = await prisma.Department.findMany();

    return {
      props: {
        user_data: user_data,
        all_users: all_users,
        all_clients: all_clients,
        all_deps: all_deps,
      },
    };
  } else {
    return {
      props: {
        user_data: null,
        all_users: null,
        all_clients: null,
        all_deps: null,
      },
    };
  }
}

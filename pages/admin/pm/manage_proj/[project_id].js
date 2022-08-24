import PMTabs from "../../../../components/pages/pm/PMTabs";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import ProjectDetails from "../../../../components/pages/pm/ProjDetails";
import ProjectMembers from "../../../../components/pages/pm/ProjectMembers";

function ManageProj(props) {
  const router = useRouter();
  const pid = router.query;

  return (
    <>
      <PMTabs />
      <ProjectDetails pid={pid?.project_id} projects={props?.projects} />
      <ProjectMembers pid={pid?.project_id} />
    </>
  );
}

export default ManageProj;

export async function getServerSideProps(context) {
  let user_data;

  let session = await getSession(context);

  if (session) {
    user_data = await prisma.User.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    const projects = await prisma.Project.findMany();

    return {
      props: {
        user_data: user_data,
        projects: projects,
      },
    };
  } else {
    return {
      props: {
        user_data: null,
        projects: null,
      },
    };
  }
}

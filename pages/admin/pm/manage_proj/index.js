import PMTabs from "../../../../components/pages/pm/PMTabs";
import { getSession } from "next-auth/react";

function ManageProj(params) {
  return (
    <>
      <PMTabs />
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

    return {
      props: {
        user_data: user_data,
      },
    };
  } else {
    return {
      props: {
        user_data: null,
      },
    };
  }
}

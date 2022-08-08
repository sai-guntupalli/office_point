import { getSession, useSession } from "next-auth/react";
import prisma from "./prisma";

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

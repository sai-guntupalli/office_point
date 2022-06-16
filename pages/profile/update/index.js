import Dashboard from "../../../components/dashboard";
import ProfileForm from "../../../components/pages/profile/update_personal_profile";
import { getSession, useSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

const ProfilePageUpdate = (props) => {
  return (
    <>
      <Dashboard>
        <ProfileForm
          personal_profile={props?.personal_profile}
          user_profile={props?.user_data}
          address={props?.address}
        />
      </Dashboard>
    </>
  );
};

export async function getServerSideProps(context) {
  let user_data;

  let session = await getSession(context);

  if (session) {
    user_data = await prisma.User.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    const address = await prisma.Address.findUnique({
      where: {
        user_id: user_data?.id,
      },
    });

    const personal_profile = await prisma.PersonalProfile.findUnique({
      where: {
        user_id: user_data.id,
      },
    });

    return {
      props: {
        user_data: user_data,
        address: address,
        // professional_profile: professional_profile,
        personal_profile: personal_profile,
      },
    };
  } else {
    return {
      props: {
        user_data: null,
        address: null,
        // professional_profile: null,
        personal_profile: null,
      },
    };
  }
}

export default ProfilePageUpdate;

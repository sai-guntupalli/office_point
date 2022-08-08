import Dashboard from "../../components/dashboard";
import ProfileDisplay from "../../components/pages/profile/personal_profile";
import { getSession, useSession } from "next-auth/react";
import prisma from "../../lib/prisma";
import ProfessionalProfile from "../../components/pages/profile/professional_profile";

const ProfilePage = (props) => {
  return (
    <>
      <ProfessionalProfile
        user_info={props?.user_data}
        professional_profile={props?.professional_profile}
      />
      <ProfileDisplay
        personal_profile={props?.personal_profile}
        address={props?.address}
      />
    </>
  );
};

export default ProfilePage;

export async function getServerSideProps(context) {
  let user_data;

  let session = await getSession(context);

  if (session) {
    user_data = await prisma.User.findUnique({
      where: {
        email: session?.user?.email,
      },
      // include: {
      //   manager: true,
      // },
    });

    const professional_profile = await prisma.ProfessionalProfile.findUnique({
      where: {
        user_id: user_data?.id,
      },

      include: {
        department: true,
        project: true,
        designation: true,
        work_location: true,
      },
    });

    const address = await prisma.Address.findUnique({
      where: {
        user_id: user_data?.id,
      },
    });

    const personal_profile = await prisma.PersonalProfile.findUnique({
      where: {
        user_id: user_data?.id,
      },
    });

    return {
      props: {
        user_data: user_data,
        professional_profile: professional_profile,
        personal_profile: personal_profile,
        address: address,
      },
    };
  } else {
    return {
      props: {
        user_data: null,
        professional_profile: null,
        personal_profile: null,
        address: null,
      },
    };
  }
}

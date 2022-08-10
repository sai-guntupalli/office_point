import Link from "next/link";

export default function ProfileCard({ professional_data, personal_data }) {
  console.log("professional_data", professional_data);
  return (
    <>
      {personal_data !== null ? (
        <>
          <div className="rounded-lg bg-white overflow-hidden shadow-xl">
            <h2 className="sr-only" id="profile-overview-title">
              Profile Overview
            </h2>
            <div className="bg-white p-6">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:space-x-5">
                  <div className="flex-shrink-0">
                    <img
                      className="mx-auto h-20 w-20 rounded-full"
                      src="https://i.pinimg.com/474x/93/4d/fc/934dfc25d30876f292be68bd0616fa30.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                    <p className="text-sm font-medium text-gray-600">
                      Welcome back,
                    </p>
                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                      {personal_data?.first_name +
                        " " +
                        personal_data?.last_name}
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      {professional_data?.designation?.designation}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex justify-center sm:mt-0">
                  <Link href="/profile">
                    <a className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-400 focus:outline-none">
                      View profile
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Your Profile is NOT updated in the System.
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Please update your Personal Information in Profile Section.</p>
            </div>
            <div className="mt-5">
              <Link href="/profile/update">
                <a
                  href="/profile/update"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:text-sm"
                >
                  Update Profile
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

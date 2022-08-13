export default function ProfessionalProfile(props) {
  const user_info = props?.user_info;
  const professional_info = props?.professional_profile;
  const personal_info = props?.personal_profile;

  return (
    <>
      <div className="bg-white overflow-hidden sm:rounded-lg shadow-xl">
        <div className="px-4 py-5 sm:px-6 bg-cyan-600">
          <h3 className="text-lg leading-6 font-medium text-cyan-100">
            Professional Information
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-2 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className=" text-sm text-gray-900">
                {personal_info?.first_name + " " + personal_info?.last_name}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Employee Id</dt>
              <dd className=" text-sm text-gray-900">
                {professional_info?.user_id}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="text-sm text-gray-900">{user_info?.email}</dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Job Type</dt>
              <dd className="text-sm text-gray-900">
                {professional_info?.job_type}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Join Date</dt>
              <dd className="text-sm text-gray-900">
                {professional_info?.date_of_join}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Designation</dt>
              <dd className=" text-sm text-gray-900">
                {professional_info?.designation?.designation}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Department</dt>
              <dd className="text-sm text-gray-900">
                {professional_info?.department?.dept}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Work Location
              </dt>
              <dd className=" text-sm mb-4 text-gray-900">
                {professional_info?.work_location?.location}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}

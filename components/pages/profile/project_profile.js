export default function ProjectProfile(props) {
  const project_info = props?.project_profile;

  return (
    <>
      <div className="bg-white mt-6 overflow-hidden sm:rounded-lg shadow-xl">
        <div className="px-4 py-5 sm:px-6 bg-cyan-600">
          <h3 className="text-lg leading-6 font-medium text-cyan-100">
            Project Information
          </h3>
        </div>

        <div className="border-t border-gray-200 px-4 py-2 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Project Name
              </dt>
              <dd className=" text-sm text-gray-900">
                {project_info?.Project?.project_name}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Client</dt>
              <dd className="text-sm text-gray-900">
                {project_info?.Project?.client_name}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Department</dt>
              <dd className=" text-sm text-gray-900">
                {project_info?.Project?.department}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Manager</dt>
              <dd className="text-sm text-gray-900">
                {project_info?.Project?.manager_id}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Project Join Date
              </dt>
              <dd className="text-sm text-gray-900">
                {project_info?.project_join_date}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Role in Project
              </dt>
              <dd className=" text-sm text-gray-900">{project_info?.role}</dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}

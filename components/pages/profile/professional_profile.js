export default function ProfessionalProfile(props) {
  const professional_info = props?.professional_profile;
  const user_info = props?.user_info;
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
              <dt className="text-sm font-medium text-gray-500">Employee Id</dt>
              <dd className=" text-sm text-gray-900">
                {professional_info?.user_id}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Designation</dt>
              <dd className=" text-sm text-gray-900">
                {professional_info?.designation.designation}
              </dd>
            </div>
            {/* <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Mobile Number
              </dt>
              <dd className="text-sm text-gray-900">
                {professional_info?.mobile}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="text-sm text-gray-900">
                {professional_info?.email}
              </dd>
            </div> */}

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Department</dt>
              <dd className="text-sm text-gray-900">
                {professional_info?.department?.dept}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Manager</dt>
              <dd className="text-sm text-gray-900">
                {user_info?.manager?.name}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Project</dt>
              <dd className=" text-sm text-gray-900">
                {professional_info?.project?.project_name}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Client</dt>
              <dd className=" text-sm text-gray-900">
                {professional_info?.project?.client_name}
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
            {/* <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul
                  role="list"
                  className="border border-gray-200 rounded-md divide-y divide-gray-200"
                >
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <PaperClipIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 flex-1 w-0 truncate">
                        resume_back_end_developer.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <PaperClipIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 flex-1 w-0 truncate">
                        coverletter_back_end_developer.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div> */}
          </dl>
          {/* <a
            // onClick={props.setPanelToDisplay(!props.panelToDisplay)}
            href="/profile/update"
            className=" mt-3 inline-flex items-end justify-left py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Info
          </a> */}
        </div>
      </div>
    </>
  );
}

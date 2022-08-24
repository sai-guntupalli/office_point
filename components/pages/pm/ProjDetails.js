import AddProjMembersModal from "./AddProjMembersModal";
import { useState } from "react";
import { useEffect } from "react";

function ProjectDetails(props) {
  const pid = props?.pid;
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/org/admin/pm/projects/" + pid)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  const proj_info = projects;

  return (
    <>
      <div>
        <div className="mt-6 bg-white shadow-lg overflow-hidden sm:rounded-lg">
          <div className="px-4 py-4 sm:px-6 bg-cyan-500">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {proj_info?.project_name}
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Client Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {proj_info?.client_name}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Department
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {proj_info?.department}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Project Start Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {proj_info?.start_date}
                </dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {proj_info?.description}
                </dd>
              </div>
            </dl>
          </div>
          <div className="p-2 float-right">
            <button>Update Proj Info</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;

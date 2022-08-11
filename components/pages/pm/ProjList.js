import { useState, useEffect } from "react";
import { ExclamationIcon } from "@heroicons/react/solid";
import Link from "next/link";

function ProjList(props) {
  const [client, setClient] = useState("all");
  const [isLoading, setLoading] = useState(true);
  const [dept, setDept] = useState("Big Data");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/org/admin/pm/add_proj/`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, [dept, client]);

  return (
    <>
      <div className="">
        <div className="">
          <div className="grid grid-cols-6 gap-6 mt-4">
            <div className="col-span-6 sm:col-span-3 ">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Client
              </label>
              <div className="mt-1">
                <select
                  id="client"
                  name="client"
                  autoComplete="client"
                  className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => setClient(e.target.value)}
                >
                  {props?.clients?.map((client) => {
                    return <option value={client?.name}>{client?.name}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Department
              </label>
              <div className="mt-1">
                <select
                  id="department"
                  name="department"
                  autoComplete="department"
                  className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => setDept(e.target.value)}
                >
                  {props?.depts?.map((dep) => {
                    return <option value={dep?.dept}>{dep?.dept}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                {projects?.length > 0 ? (
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-cyan-600">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-white"
                        >
                          Project Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-white"
                        >
                          Client Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-white"
                        >
                          Start Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-white"
                        >
                          Department
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-white"
                        >
                          Manager
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-white"
                        >
                          Manage
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {projects?.map((project) => (
                        <tr key={project._id}>
                          <td
                            key={project._id}
                            className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black-500 sm:pl-6"
                          >
                            {project.project_name}
                          </td>
                          <td
                            key={project._id}
                            className="whitespace-nowrap px-3 py-4 text-sm text-black-500"
                          >
                            {project.client_name}
                          </td>
                          <td
                            key={project._id}
                            className="whitespace-nowrap px-3 py-4 text-sm text-black-500"
                          >
                            {project.start_date}
                          </td>
                          <td
                            key={project._id}
                            className="whitespace-nowrap px-3 py-4 text-sm text-black-500"
                          >
                            {project.department}
                          </td>
                          <td
                            key={project._id}
                            className="whitespace-nowrap px-3 py-4 text-sm text-black-500"
                          >
                            {project.manager_id}
                          </td>
                          <td
                            key={project._id}
                            className="whitespace-nowrap px-3 py-4 text-sm text-black-500"
                          >
                            <button
                              type="button"
                              className="inline-flex items-center rounded-md border   px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:cursor-not-allowed bg-cyan-600 disabled:opacity-30"
                            >
                              <Link
                                key={project.name}
                                href={`/admin/pm/manage_proj/${project.id}`}
                              >
                                Manage
                              </Link>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="rounded-md bg-yellow-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <ExclamationIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">
                          No Projects Found
                        </h3>
                        <div className="mt-2 text-sm text-yellow-700">
                          <p>{`No Projects are found.`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjList;

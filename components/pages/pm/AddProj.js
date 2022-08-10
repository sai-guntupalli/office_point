import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Select from "react-select";

import { useEffect } from "react";

function getDateStr(dateObj) {
  const dateTimeInParts = dateObj.toISOString().split("T");
  return dateTimeInParts[0];
}

function AddProjComp(props) {
  const [selectedDept, setSelectedDept] = useState("Big Data");
  const [projManager, setProjManager] = useState(null);

  const todaysDate = new Date().toISOString().slice(0, 10);

  const users = props?.users;

  console.log("projManager", projManager);

  const router = useRouter();

  const projNameRef = useRef();
  const clientRef = useRef();
  const deptRef = useRef();
  const startDateRef = useRef();

  const changeSelectOptionHandler = (event) => {
    setSelectedDept(event.target.value);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredProjName = projNameRef.current.value;
    const enteredDept = deptRef.current.value;
    const enteredClient = clientRef.current.value;
    const enteredStartDate = startDateRef.current.value;

    const reqBody = {
      proj_name: enteredProjName,
      dept: enteredDept,
      client: enteredClient,
      start_date: enteredStartDate,
      manager: projManager?.value,
    };

    console.log("reqBody", reqBody);

    console.log(JSON.stringify(reqBody));

    fetch(`/api/org/admin/pm/add_proj`, {
      method: "POST",
      body: JSON.stringify(reqBody),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    router.push("/admin/pm");
  }

  return (
    <div className=" mt-4 bg-white shadow overflow-hidden sm:rounded-lg drop-shadow-2xl">
      <form
        className="p-6 space-y-8 divide-y divide-gray-200"
        onSubmit={submitFormHandler}
      >
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-2">
            <div>
              <h3 className="text-xl leading-6 font-medium text-gray-900">
                Add New Project
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Provide details of the Project.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="unique-user-id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="proj_name"
                    id="proj_name"
                    className={
                      "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    }
                    ref={projNameRef}
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="client"
                  className="block text-sm font-medium text-gray-700"
                >
                  Client Name
                </label>
                <div className="mt-1">
                  <select
                    id="client"
                    name="client"
                    autoComplete="client"
                    className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={changeSelectOptionHandler}
                    ref={clientRef}
                  >
                    {props?.clients?.map((client) => {
                      return (
                        <option value={client?.name}>{client?.name}</option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="reports-to"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Date
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="start_date"
                    id="start_date"
                    defaultValue={todaysDate}
                    className={
                      "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    }
                    ref={startDateRef}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="department"
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
                    onChange={changeSelectOptionHandler}
                    ref={deptRef}
                  >
                    {props?.departments?.map((dep) => {
                      return <option value={dep?.dept}>{dep?.dept}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="manager"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Manager
                </label>
                <div className="mt-1">
                  <Select
                    classlabel="basic-single"
                    classlabelPrefix="select"
                    defaultValue={projManager}
                    isClearable={true}
                    options={users?.map(({ id, name }) => ({
                      value: id,
                      label: name,
                    }))}
                    isSearchable={true}
                    onChange={setProjManager}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            {/* <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Cancel
            </button> */}
            <button className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
              Add New Project
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProjComp;

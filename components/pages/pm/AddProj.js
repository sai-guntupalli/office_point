import { useState, useRef } from "react";
import { useRouter } from "next/router";
import ComboboxComp from "../../individual/combo_box";

function AddProjComp(props) {
  const [selectedDept, setSelectedDept] = useState("Big Data");
  const [selectedItem, setSelectedItem] = useState({});
  // const [apiResponse, setApiResponse] = useState({});

  const todaysDate = new Date().toISOString().slice(0, 10);
  const users_raw = props?.users;
  const users = users_raw?.map(({ id, name }) => ({
    id: id,
    name: name + " @" + id,
  }));

  const router = useRouter();
  const projNameRef = useRef();
  const clientRef = useRef();
  const deptRef = useRef();
  const startDateRef = useRef();
  const descRef = useRef();

  const changeSelectOptionHandler = (event) => {
    setSelectedDept(event.target.value);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredProjName = projNameRef.current.value;
    const enteredDept = deptRef.current.value;
    const enteredClient = clientRef.current.value;
    const enteredStartDate = startDateRef.current.value;
    const enteredDesc = descRef.current.value;

    const reqBody = {
      proj_name: enteredProjName,
      dept: enteredDept,
      client: enteredClient,
      start_date: enteredStartDate,
      desc: enteredDesc,
    };

    // const projProfile = {
    //   manager_id: selectedItem?.id,
    //   dept: enteredDept,
    //   client: enteredClient,
    //   start_date: enteredStartDate,
    //   manager: selectedItem?.id,
    //   desc: enteredDesc,
    // };

    fetch(`/api/org/admin/pm/projects`, {
      method: "POST",
      body: JSON.stringify(reqBody),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setApiResponse(data));

    // fetch(`/api/org/admin/pm/project_profiles`, {
    //   method: "POST",
    //   body: JSON.stringify(reqBody),

    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
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
                    placeholder="Enter Project Name"
                    className={
                      "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    }
                    ref={projNameRef}
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
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

              <div className="sm:col-span-3">
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

              <div className="sm:col-span-3">
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

              {/* <div className="sm:col-span-3">
                <label
                  htmlFor="manager"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Manager
                </label>
                <div className="mt-1">
                  {/* <Select
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
                  <ComboboxComp
                    items={users}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                  />
                </div>
              </div> */}

              <div className="sm:col-span-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Projct Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Project Description"
                    className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500  dark:focus:border-cyan-500"
                    ref={descRef}
                  ></textarea>
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

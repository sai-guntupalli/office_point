import { useState, useRef, useEffect } from "react";

function AddEmployee(props) {
  console.log("props in cmp", props);
  const deptRef = useRef();

  const [selectedDept, setSelectedDept] = useState("");

  const changeSelectOptionHandler = (event) => {
    setSelectedDept(event.target.value);
  };

  console.log("selectedDept", selectedDept);

  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-2">
          <div>
            <h3 className="text-xl leading-6 font-medium text-gray-900">
              Employee Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Provide details of the Employee.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="unique-user-id"
                className="block text-sm font-medium text-gray-700"
              >
                Employee Unique Id
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="unique-user-id"
                  id="unique-user-id"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="emp-id"
                className="block text-sm font-medium text-gray-700"
              >
                Employee Number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="emp-id"
                  id="emp-id"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="mobile-num"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="mobile-num"
                  id="mobile-num"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="designation"
                className="block text-sm font-medium text-gray-700"
              >
                Designation
              </label>
              <div className="mt-1">
                <select
                  id="designation"
                  name="designation"
                  autoComplete="designation"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  {props.designations.map((des) => {
                    return <option>{des.desination}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="reports-to"
                className="block text-sm font-medium text-gray-700"
              >
                Manager
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="reports-to"
                  id="reports-to"
                  autoComplete="reports-to"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  onChange={changeSelectOptionHandler}
                >
                  {props.departments.map((dep) => {
                    return <option value={dep.dept}>{dep.dept}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="project"
                className="block text-sm font-medium text-gray-700"
              >
                Project
              </label>
              <div className="mt-1">
                <select
                  id="project"
                  name="project"
                  autoComplete="project"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  {props.projects.map((proj) => {
                    if (selectedDept) {
                      if (proj.department === selectedDept) {
                        return (
                          <option value={proj.project_name}>
                            {proj.project_name}
                          </option>
                        );
                      }
                    } else {
                      return (
                        <option value={proj.project_name}>
                          {proj.project_name}
                        </option>
                      );
                    }
                  })}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="work-loc"
                className="block text-sm font-medium text-gray-700"
              >
                Work Location
              </label>
              <div className="mt-1">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  {props.locations.map((loc) => {
                    return <option value={loc.location}>{loc.location}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Data
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddEmployee;

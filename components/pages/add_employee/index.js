import { useState, useRef } from "react";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";

import { useEffect } from "react";

function getDateStr(dateObj) {
  const dateTimeInParts = dateObj.toISOString().split("T");
  return dateTimeInParts[0];
}

function AddEmployee(props) {
  const [empUniqueId, setEmpUniqueId] = useState();
  const [isLoading, setLoading] = useState(false);
  // const [empData, setEmpData] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDept, setSelectedDept] = useState("Big Data");

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`/api/org/employee/profile/${empUniqueId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setEmpData(data);
  //       setLoading(false);
  //       setSelectedDept(empData?.professional_profile?.department?.dept);
  //       ``;
  //     });
  // }, [empUniqueId]);

  const router = useRouter();

  const empUserIdRef = useRef();
  // const empIdRef = useRef();
  // const emailRef = useRef();
  // const mobileRef = useRef();
  const designationRef = useRef();
  const deptRef = useRef();
  const workLocRef = useRef();
  const projectRef = useRef();

  const changeSelectOptionHandler = (event) => {
    setSelectedDept(event.target.value);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredUserId = empUserIdRef.current.value;
    // const enteredEmpId = empIdRef.current.value;
    // const enteredEmail = emailRef.current.value;
    // const enteredMobile = mobileRef.current.value;
    const enteredDesignation = designationRef.current.value;
    const enteredDept = deptRef.current.value;
    const enteredWorkLoc = workLocRef.current.value;
    const enteredProject = projectRef.current.value;
    const enteredDOF = startDate;

    const reqBody = {
      requestedInfo: "professional",
      empUserId: enteredUserId,

      designation: enteredDesignation,
      dept: enteredDept,
      workLoc: enteredWorkLoc,
      project: enteredProject,
      dateOfJoin: getDateStr(enteredDOF),
    };

    console.log("reqBody", reqBody);

    console.log(JSON.stringify(reqBody));

    fetch(`/api/org/employee/profile/${enteredUserId}`, {
      method: "POST",
      body: JSON.stringify(reqBody),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    router.push("/profile");
  }

  return (
    <div className=" m-0 bg-white shadow overflow-hidden sm:rounded-lg drop-shadow-2xl">
      <form
        className="p-6 space-y-8 divide-y divide-gray-200"
        onSubmit={submitFormHandler}
      >
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-2">
            <div>
              <h3 className="text-xl leading-6 font-medium text-gray-900">
                Update Employee Information
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
                  <select
                    id="emp-user-id"
                    name="emp-user-id"
                    autoComplete="emp-user-id"
                    className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    ref={empUserIdRef}
                    onChange={(e) => setEmpUniqueId(e.target.value)}
                  >
                    {props.users.map((user) => {
                      return <option>{user.id}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="reports-to"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date Of Join
                </label>

                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd-MM-yyyy"
                  className="focus:ring-cyan-500"
                />
              </div>
              {/* <div className="sm:col-span-3">
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
                    className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    ref={emailRef}
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
                    className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    ref={mobileRef}
                  />
                </div>
              </div> */}
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
                    // autoComplete="designation"
                    className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    ref={designationRef}
                  >
                    {props?.designations?.map((des) => {
                      return <option>{des.designation}</option>;
                    })}
                  </select>
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
                    className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    ref={projectRef}
                    defaultValue={
                      props?.empData?.professional_profile?.project
                        ?.project_name
                    }
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
                    className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    ref={workLocRef}
                    defaultValue={{
                      label:
                        props?.empData?.professional_profile?.work_location
                          ?.location,
                      value:
                        props?.empData?.professional_profile?.work_location
                          ?.location,
                    }}
                  >
                    {props?.locations?.map((loc) => {
                      return (
                        <option value={loc.location}>{loc.location}</option>
                      );
                    })}
                  </select>
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
              Update Employee Data
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;

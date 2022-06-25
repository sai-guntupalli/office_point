import { useState, useEffect } from "react";
import { ExclamationIcon } from "@heroicons/react/solid";

function classNames(status) {
  let class_name =
    "inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800";

  if (status === "pending") {
    class_name =
      "inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800";
  } else if (status === "rejected") {
    class_name =
      "inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800";
  } else {
    class_name =
      "inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800";
  }
  return class_name;
}

function LeaveHistory(props) {
  const [leaves, setLeaves] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [leaveType, setLeaveType] = useState("all");
  const [leaveStatus, setLeaveStatus] = useState("all");

  useEffect(() => {
    setLoading(true);
    fetch(
      `/api/org/employee/leave_request/${props?.user_data?.id}&${leaveType}&${leaveStatus}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLeaves(data);
        setLoading(false);
      });
  }, [leaveType, leaveStatus]);

  return (
    <>
      <div className="">
        <div className="">
          <div class="grid grid-cols-6 gap-6 mt-4">
            <div class="col-span-6 sm:col-span-3 ">
              <label
                for="country"
                class="block text-sm font-medium text-gray-700"
              >
                Leave Type
              </label>
              <select
                onChange={(e) => setLeaveType(e.target.value)}
                id="leave_type"
                name="leave_type"
                autocomplete="leave_type"
                // ref={leaveTypeRef}
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              >
                <option value="all">All Types</option>
                <option value="sick">Sick Leave</option>
                <option value="privilege">Privilege Leave</option>
                <option value="maternity">Maternity Leave</option>
                <option value="peternity">Paternity Leave</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="col-span-6 sm:col-span-3 ">
              <label
                for="country"
                class="block text-sm font-medium text-gray-700"
              >
                Leave Status
              </label>
              <select
                onChange={(e) => setLeaveStatus(e.target.value)}
                id="leave_type"
                name="leave_type"
                autocomplete="leave_type"
                // ref={leaveTypeRef}
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              >
                <option value="all">All Leaves</option>
                <option value="approved">Approved Leaves</option>
                <option value="rejected">Rejected Leaves</option>
                <option value="pending">Pending Leaves</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                {leaves?.length > 0 ? (
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-cyan-600">
                      <tr>
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
                          End Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-white"
                        >
                          Num of Days
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-white"
                        >
                          Leave Type
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-white"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-white"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="relative py-3 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {leaves?.map((leave) => (
                        <tr key={leave._id}>
                          <td
                            key={leave._id}
                            className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black-500 sm:pl-6"
                          >
                            {leave.start_date}
                          </td>
                          <td
                            key={leave._id}
                            className="whitespace-nowrap px-3 py-4 text-sm text-black-500"
                          >
                            {leave.end_date}
                          </td>
                          <td
                            key={leave._id}
                            className="whitespace-nowrap px-3 py-4 text-sm text-black-500"
                          >
                            {leave.num_days}
                          </td>
                          <td
                            key={leave._id}
                            className="whitespace-nowrap px-3 py-4 text-sm text-black-500"
                          >
                            {leave.leave_type}
                          </td>
                          <td
                            key={leave._id}
                            className="whitespace-nowrap px-3 py-4 text-sm text-black-500"
                          >
                            {leave.reason}
                          </td>
                          <td
                            key={leave._id}
                            className="whitespace-nowrap px-3 py-4 text-sm text-black-500"
                          >
                            <span className={classNames(leave.status)}>
                              {leave.status}
                            </span>
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
                          No Leaves Found
                        </h3>
                        <div className="mt-2 text-sm text-yellow-700">
                          <p>{`No ${leaveType.toUpperCase()} - ${leaveStatus.toUpperCase()} Leaves are found.`}</p>
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

export default LeaveHistory;

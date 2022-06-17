/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

const positions = [
  {
    id: 1,
    title: "Submit June Timesheet",
    type: "critical",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 2,
    title: "Submit Latest Resume",
    type: "critical",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 3,
    title: "Update Address Details",
    type: "moderate",
    location: "Remote",
    department: "Design",
    closeDate: "2020-01-14",
    closeDateFull: "January 14, 2020",
  },
];

export default function PendingTasks(props) {
  const pending_tasks = props?.pending_tasks;
  return (
    <>
      {pending_tasks !== null ? (
        <div>
          <div className="mt-4">
            <h3>Pending Tasks</h3>
          </div>
          <div className="rounded-lg bg-white overflow-hidden shadow-xl mt-2">
            <ul role="list" className="divide-y divide-gray-200 mb-2">
              {positions.map((position) => (
                <li key={position.id}>
                  <a href="#" className="block hover:bg-gray-50 mb-2">
                    <div className="px-4 py-4 sm:px-6 ">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {position.title}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            {position.type}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <UsersIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            {position.department}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <LocationMarkerIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            {position.location}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <CalendarIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <p>
                            Due Date{" "}
                            <time dateTime={position.closeDate}>
                              {position.closeDateFull}
                            </time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>No Pending Tasks</div>
      )}{" "}
    </>
  );
}

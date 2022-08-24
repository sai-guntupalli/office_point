/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import AddHolidayModal from "./AddHolidayModal";
import { useEffect } from "react";

function isFutureDate(value) {
  const d_now = new Date();
  const d_inp = new Date(value);
  return d_now.getTime() <= d_inp.getTime();
}

function getDayOfWeek(date) {
  let dayOfWeek = new Date(date).getDay();
  if (dayOfWeek == 6) {
    dayOfWeek = -1;
  }
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayOfWeek + 1];
}

export default function Holidays(props) {
  let user_role = "user";
  user_role = props?.user_data?.role;

  let work_loc = props?.work_loc;
  if (work_loc === null) {
    work_loc = "Banglore";
  }

  const [loc, setLoc] = useState(work_loc);
  const [isChecked, setCheckbox] = useState(true);
  const [holidays, setHolidays] = useState();

  useEffect(() => {
    // setLoading(true);
    fetch(`/api/org/admin/holidays/${loc}`)
      .then((res) => res.json())
      .then((data) => {
        setHolidays(data);
      });
  }, [loc]);

  return (
    <div className=" ">
      <div className="flex items-center flex-row">
        {/* <div className="sm:flex-auto"> */}
        <div className="mt-6  basis-1/4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md"
            defaultValue={work_loc}
            onChange={(e) => setLoc(e.target.value)}
          >
            <option value="Banglore">Banglore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Noida">Noida</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-6 md:ml-20 pt-12">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            defaultChecked
            onChange={(e) => setCheckbox(!isChecked)}
            className="ml-4 p-2 focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-cyan-300 rounded"
          />
          <span id="comments-description" className="text-gray-500 ">
            <span> Only show upcoming Holidays</span>
          </span>
        </div>
        <div className="mt-8 sm:mt-0 sm:ml-6 md:ml-20 pt-12 ">
          {user_role === "admin" ? <AddHolidayModal /> : <></>}
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-cyan-600">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Day of Week
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {holidays?.flatMap((holiday) =>
                    isChecked ? (
                      isFutureDate(holiday.date) ? (
                        <tr key={holiday._id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {holiday.date}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {getDayOfWeek(holiday.date)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm ">
                            {holiday.description}
                          </td>
                        </tr>
                      ) : null
                    ) : (
                      <tr key={holiday._id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {holiday.date}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {getDayOfWeek(holiday.date)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm ">
                          {holiday.description}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

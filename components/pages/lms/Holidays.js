/* This example requires Tailwind CSS v2.0+ */
import BangloreHolidays from "./holidays/banglore";
import HydHolidays from "./holidays/hyderabad";
import NoidaHolidays from "./holidays/noida";
import usaHolidays from "./holidays/usa";
import { useState } from "react";

function isFutureDate(value) {
  const d_now = new Date();
  const d_inp = new Date(value);
  return d_now.getTime() <= d_inp.getTime();
}

function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();
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

export default function Holidays() {
  const [loc, setLoc] = useState("Hyderabad");
  const [isChecked, setCheckbox] = useState(true);

  let holidaysObj = BangloreHolidays;

  switch (loc) {
    case "Banglore":
      holidaysObj = BangloreHolidays;
      break;
    case "Hyderabad":
      holidaysObj = HydHolidays;
      break;
    case "Noida":
      holidaysObj = NoidaHolidays;
      break;
    case "USA":
      holidaysObj = usaHolidays;
      break;
    default:
      holidaysObj = BangloreHolidays;
      break;
  }

  return (
    <div className=" ">
      <div className="flex items-center flex-row">
        {/* <div className="sm:flex-auto"> */}
        <div className="mt-6 basis-1/2">
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
            defaultValue="Hyderabad"
            onChange={(e) => setLoc(e.target.value)}
          >
            <option value="Banglore">Banglore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Noida">Noida</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-6 md:ml-20 pt-12 basis-1/2">
          <span id="comments-description" className="text-gray-500 ">
            <span> Only show upcoming Holidays</span>
          </span>
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            defaultChecked
            onChange={(e) => setCheckbox(!isChecked)}
            className="ml-4 p-2 focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-cyan-300 rounded"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-6"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                    >
                      Day of Week
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                    >
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {holidaysObj.flatMap((holiday) =>
                    isChecked ? (
                      isFutureDate(holiday.Date) ? (
                        <tr key={holiday._id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {holiday.Date}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {getDayOfWeek(holiday.Date)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm ">
                            {holiday.Name}
                          </td>
                        </tr>
                      ) : null
                    ) : (
                      <tr key={holiday._id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {holiday.Date}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {getDayOfWeek(holiday.Date)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm ">
                          {holiday.Name}
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

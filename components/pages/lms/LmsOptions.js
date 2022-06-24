/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Link from "next/link";
// import Datepicker from "@themesberg/tailwind-datepicker/Datepicker";

const options = [
  {
    name: "View Holidays",
    desc: "View Holidays for the current year.",
    href: "/lms/holidays",
  },
  {
    name: "Apply For a Leave",
    desc: "Apply for Leave or Comp-Off",
    href: "/lms/apply_leave",
  },
  {
    name: "Leave History",
    desc: "View the Leave History",
    href: "/lms/leave_history",
  },
  // More people...
];

export default function LMSOptions(props) {
  // const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  // const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4 ">
        {options.map((option) => (
          <div
            key={option.name}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-xl flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500"
          >
            <div className="flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <Link href={option.href}>
                <a className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {option.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate mt-1">
                    {option.desc}
                  </p>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex mt-6">
        <h4>From Date</h4>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div> */}
    </>
  );
}

/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
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
  return (
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
  );
}

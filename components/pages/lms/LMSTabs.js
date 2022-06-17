import Link from "next/link";

const tabs = [
  { name: "Holidays", href: "/lms", current: true },
  { name: "Apply For Leave", href: "/lms/apply_leave", current: false },
  { name: "Leave History", href: "/lms/leave_history", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LMSTabs() {
  return (
    <div className="pb-5 border-b border-gray-200 sm:pb-0">
      <div className="mt-3 sm:mt-4">
        <div className="sm:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <Link href={tab.href}>
                <a
                  key={tab.name}
                  className={classNames(
                    tab.current
                      ? "border-cyan-500 text-cyan-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

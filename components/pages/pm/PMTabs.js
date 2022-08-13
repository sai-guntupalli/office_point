import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PMTabs(props) {
  const router = useRouter();
  const current_page = router.pathname;

  let tabs;

  if (current_page === "/admin/pm/add_proj") {
    tabs = [
      { name: "Dashboard", href: "/admin/pm", current: false },
      { name: "Add Project", href: "/admin/pm/add_proj", current: true },
    ];
  } else if (current_page.includes("/admin/pm/manage_proj")) {
    tabs = [
      { name: "Dashboard", href: "/admin/pm", current: false },
      { name: "Add Project", href: "/admin/pm/add_proj", current: false },
      { name: "Manage Project", href: "/admin/pm/manage_proj", current: true },
    ];
  } else {
    tabs = [
      { name: "Dashboard", href: "/admin/pm", current: true },
      { name: "Add Project", href: "/admin/pm/add_proj", current: false },
    ];
  }

  return (
    <>
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
              {tabs.flatMap((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              {tabs.flatMap((tab) => (
                <Link href={tab.href} key={tab.name}>
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
    </>
  );
}

import { UserGroupIcon, DocumentReportIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AdminSidebar(props) {
  const router = useRouter();
  const current_page = router.pathname;
  const navigation = [
    {
      name: "Team Dashboard",
      href: "/team_dashboard",
      icon: UserGroupIcon,
    },
    {
      name: "Update Employee Data",
      href: "/admin/update_employee",
      icon: UserGroupIcon,
    },
    {
      name: "Project Management",
      href: "/admin/pm",
      icon: UserGroupIcon,
    },
    {
      name: "Upload Data",
      href: "/admin/upload_data",
      icon: DocumentReportIcon,
    },
  ];

  return (
    <div className="mt-4 pt-4">
      <div className="px-2 space-y-1 ">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <a
              key={item.name}
              className={classNames(
                item.href === current_page
                  ? "bg-cyan-800 text-white"
                  : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon
                className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                aria-hidden="true"
              />
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AdminSidebar;

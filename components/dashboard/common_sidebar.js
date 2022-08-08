import {
  ClockIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  ScaleIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CommonSidebar(props) {
  const router = useRouter();
  const current_page = router.pathname;
  const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Leave Management", href: "/lms", icon: ClockIcon },
    { name: "TimeSheet", href: "/timesheet", icon: ScaleIcon },
    { name: "Paybook", href: "/paybook", icon: CreditCardIcon },
    {
      name: "Documents",
      href: "/documents",
      icon: UserGroupIcon,
    },
    {
      name: "Reports",
      href: "/reports",
      icon: DocumentReportIcon,
    },
  ];

  return (
    // <>
    <div className="px-2 space-y-1">
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
    // </>
  );
}

export default CommonSidebar;

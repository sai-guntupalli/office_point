/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Breadcrumbs() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState();

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbsup = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbsup);
  }, [router.asPath]);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" className="text-cyan-800 hover:text-cyan-600">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.href}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="flex-shrink-0 h-5 w-5  text-cyan-700"
                  aria-hidden="true"
                />
                <Link href={breadcrumb.href}>
                  <a
                    className="ml-4 text-sm font-medium text-cyan-800 hover:text-cyan-600"
                    // aria-current={breadcrumb..current ? "page" : undefined}
                  >
                    {breadcrumb.label}
                  </a>
                </Link>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
}

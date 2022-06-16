import { PaperClipIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function PersonalProfile(props) {
  const personal_info = props.personal_profile;
  const address = props?.address;
  return (
    <>
      <div className="bg-white mt-6 overflow-hidden sm:rounded-lg shadow-xl">
        <div className="px-4 py-5 sm:px-6 bg-cyan-600">
          <h3 className="text-lg leading-6 font-medium text-cyan-100 ">
            Personal Information
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {personal_info?.first_name + " " + personal_info?.last_name}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Date Of Birth
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {personal_info?.date_of_birth}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Mobile Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {personal_info?.personal_mobile}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {personal_info?.personal_email}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {address?.door_num +
                  ", " +
                  address?.add_line1 +
                  ", " +
                  address?.add_line2 +
                  ", " +
                  address?.city +
                  ", " +
                  address?.state +
                  ", " +
                  address?.country}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 ">
                <p className="overflow-truncate">
                  {personal_info?.about === undefined ? (
                    <div>No Data </div>
                  ) : (
                    personal_info?.about
                  )}
                </p>
              </dd>
            </div>
          </dl>
          <div className="flex justify-end">
            <Link href="/profile/update">
              <a className=" mt-3 inline-flex items-end justify-left py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Update Info
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

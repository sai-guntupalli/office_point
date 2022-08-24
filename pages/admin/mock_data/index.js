import React, { useRef } from "react";
import Link from "next/link";

function UploadData(props) {
  const num_of_rows_ref = useRef();
  const num_proj_ref = useRef();

  function insertUses(event) {
    event.preventDefault();

    const num_of_rows = num_of_rows_ref.current.value;

    const reqBody = {
      num_of_rows: num_of_rows,
    };

    fetch(`/api/org/admin/mock_data/users`, {
      method: "POST",
      body: JSON.stringify(reqBody),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // router.push("/profile");
  }

  function deleteRecordsHandler(event) {
    event.preventDefault();

    fetch(`/api/org/admin/mock_data/users`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // router.push("/profile");
  }

  function insertProjects(event) {
    event.preventDefault();
    const num_of_projs = num_proj_ref.current.value;
    const reqBody = {
      num_of_projs: num_of_projs,
    };

    fetch(`/api/org/admin/mock_data/projects`, {
      method: "POST",
      body: JSON.stringify(reqBody),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // router.push("/profile");
  }

  function deleteProjects(event) {
    event.preventDefault();

    fetch(`/api/org/admin/mock_data/users`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // router.push("/profile");
  }

  return (
    <>
      <div className=" m-0 bg-white shadow overflow-hidden sm:rounded-lg drop-shadow-2xl">
        <form
          className="p-6 space-y-2 divide-y divide-gray-200"
          onSubmit={insertUses}
        >
          <div className="space-y-2 divide-y divide-gray-200">
            <div className="pt-1">
              <div>
                <h3 className="text-xl leading-6 font-medium text-gray-900">
                  Insert Dummy Users Data
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Insert Dummy Users into DB.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="unique-user-id"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Users to Insert.
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className={
                        "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      }
                      defaultValue={100}
                      ref={num_of_rows_ref}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <button className="ml-3 mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    Insert
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="ml-4 p-2 space-y-2">
          <label
            htmlFor="unique-user-id"
            className="block text-sm font-medium text-gray-700"
          >
            Delete Users
          </label>
          <form className=" " onSubmit={deleteRecordsHandler}>
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
              Delete All Users
            </button>
          </form>
        </div>
        <form
          className="p-6 space-y-2 divide-y divide-gray-200"
          onSubmit={insertProjects}
        >
          <div className="space-y-2 divide-y divide-gray-200">
            <div className="pt-1">
              <div>
                <h3 className="text-xl leading-6 font-medium text-gray-900">
                  Insert Dummy Projects Data
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Insert Dummy Projects into DB.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="unique-user-id"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Projects to Insert.
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className={
                        "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      }
                      defaultValue={100}
                      ref={num_proj_ref}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <button className="ml-3 mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    Insert
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UploadData;

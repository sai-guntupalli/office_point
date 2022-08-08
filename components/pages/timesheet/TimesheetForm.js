function TimesheetForm(props) {
  return (
    <>
      <div>Timesheet Form here</div>
      <form>
        <div className="grid grid-cols-9 gap-4 mt-4">
          <div className="pt-2">
            <div className="flex justify-start">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Previous
              </button>
            </div>
          </div>
          <div className="col-span-7 pl-4">
            <div className="grid grid-cols-7 gap-4 mt-4">
              <div className="text-center">01</div>
              <div>09</div>
              <div>01</div>
              <div>09</div>
              <div>01</div>
              <div>09</div>
              <div>01</div>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
              />
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0  rounded-md sm:text-sm border-gray-300"
              />
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded sm:text-sm border-gray-300"
              />
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded sm:text-sm border-gray-300"
              />
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded sm:text-sm border-gray-300"
              />
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded sm:text-sm border-gray-300"
              />
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded sm:text-sm border-gray-300"
              />
            </div>
          </div>
          <div className="pt-2">
            <div className="flex justify-end">
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
            <button
              type="button"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit for Approval
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TimesheetForm;

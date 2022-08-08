import Head from "next/head";

function AddHoliday(props) {
  return (
    <>
      <div className="mt-4 sm:mt-0 sm:ml-6 md:ml-6 pt-12 basis-1/2 content-end">
        <button
          type="button"
          className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          Add a Holiday
        </button>
      </div>
    </>
  );
}

export default AddHoliday;

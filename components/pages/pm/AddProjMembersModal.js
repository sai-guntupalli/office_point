/* This example requires Tailwind CSS v2.0+ */
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { useRouter } from "next/router";

function getDateStr(dateObj) {
  const dateTimeInParts = dateObj.toISOString().split("T");
  return dateTimeInParts[0];
}
export default function AddProjMembersModal() {
  const router = useRouter();

  const [holidayDate, setholidayDate] = useState(new Date());

  const locRef = useRef();
  const holidayNameRef = useRef();

  function addHolidayHandler(event) {
    event.preventDefault();

    const enteredLoc = locRef.current.value;
    const enteredDate = getDateStr(holidayDate);
    const enteredHoliday = holidayNameRef.current.value;

    const reqBody = {
      loc: enteredLoc,
      holiday_date: enteredDate,
      holiday_name: enteredHoliday,
    };

    console.log("reqBody", reqBody);

    console.log(JSON.stringify(reqBody));

    fetch(`/api/org/admin/holidays/${enteredLoc}`, {
      method: "POST",
      body: JSON.stringify(reqBody),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    router.reload("/lms/holidays");
  }

  return (
    <>
      <label
        htmlFor="add_holiday_modal"
        className="btn modal-button bg-cyan-600 hover:bg-cyan-500"
      >
        Add a Holiday
      </label>

      <input type="checkbox" id="add_holiday_modal" className="modal-toggle " />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add_holiday_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-cyan-600"
          >
            ✕
          </label>

          <h3 className="text-center"> Add a Holiday</h3>
          <form
            className="p-6 space-y-8 divide-y divide-gray-200"
            onSubmit={addHolidayHandler}
          >
            <div className="form-control w-full max-w-md mt-4">
              <label className="label">
                <span className="label-text">Choose the Location</span>
              </label>
              <select
                className="select select-bordered focus:ring-cyan-500"
                ref={locRef}
              >
                <option>Banglore</option>
                <option>Hyderabad</option>
                <option>Noida</option>
                <option>USA</option>
                <option>All Locations</option>
              </select>

              <div className="mt-4">
                <label className="label">
                  <span className="label-text">Choose Date</span>
                  {/* <span className="label-text-alt">Alt label</span> */}
                </label>
                <DatePicker
                  selected={holidayDate}
                  onChange={(date) => setholidayDate(date)}
                  dateFormat="dd-MM-yyyy"
                  className="focus:ring-cyan-500"
                />
              </div>
              <div className="mt-4">
                <label className="label">
                  <span className="label-text">Holiday Name</span>
                  {/* <span className="label-text-alt">Alt label</span> */}
                </label>
                <input
                  type="text"
                  placeholder="Holiday Details"
                  className="input input-bordered w-full max-w-md focus:ring-cyan-500"
                  ref={holidayNameRef}
                  required
                />
              </div>

              <div className="flex flex-row-reverse space-x-4 space-x-reverse  ">
                <div className="modal-action">
                  <button
                    htmlFor="add_holiday_modal"
                    class="btn bg-cyan-600 hover:bg-cyan-500 text-white mt-6"
                  >
                    Add Holiday
                  </button>
                </div>

                {/* <div className="modal-action">
                  <label
                    htmlFor="add_holiday_modal"
                    className="btn btn-accent bg-cyan-600 text-white"
                  >
                    Close
                  </label>
                </div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

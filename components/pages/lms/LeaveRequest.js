import DatePicker from "react-datepicker";
import { useState } from "react";

function numOfWorkingDays(startDate, endDate) {
  if (startDate == null || endDate == null) {
    return 0;
  } else {
    let count = 0;
    const curDate = new Date(startDate.getTime());
    while (curDate <= endDate) {
      const dayOfWeek = curDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) count++;
      curDate.setDate(curDate.getDate() + 1);
    }
    // alert(count);
    return count;
  }
}

function LeaveRequest(props) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <>
      <div>
        <div class="mt-10 sm:mt-0 md:mt-6 shadow-xl">
          <div class="">
            <div class="mt-5 md:mt-0 ">
              <form action="#" method="POST">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="first-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Choose Dates
                        </label>

                        <DatePicker
                          dateFormat="dd-MMMM-yyyy"
                          selectsRange={true}
                          startDate={startDate}
                          endDate={endDate}
                          onChange={(update) => {
                            setDateRange(update);
                          }}
                          isClearable
                          withPortal
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <div className="flex justify-center mt-6">
                          {numOfWorkingDays(startDate, endDate) > 0 ? (
                            <p>
                              Number of Working days requested :{" "}
                              {numOfWorkingDays(startDate, endDate)}
                            </p>
                          ) : null}
                          {/* <p>
                            Number of Working days requested{" "}
                            {numOfWorkingDays(startDate, endDate)}
                          </p> */}
                        </div>
                      </div>

                      {/* <div class="col-span-6 sm:col-span-4">
                        <label
                          for="email-address"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autocomplete="email"
                          class="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div> */}

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="country"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Leave Type
                        </label>
                        <select
                          id="leave_type"
                          name="leave_type"
                          autocomplete="leave_type"
                          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                        >
                          <option value="sick">Sick Leave</option>
                          <option value="privilege">Privilege Leave</option>
                          <option value="maternity">Maternity Leave</option>
                          <option value="peternity">Paternity Leave</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div class="col-span-6">
                        <label
                          for="street-address"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500  dark:focus:border-cyan-500"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      Request Leave
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaveRequest;

import DatePicker from "react-datepicker";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

function listOfWorkingDays(startDate, endDate, reqLeaves) {
  const reqLeaveTimes = [];
  reqLeaves.map((rl) => {
    reqLeaveTimes.push(rl.toISOString().substring(0, 10));
  });

  function isInArray(value) {
    return (
      (
        reqLeaveTimes.find((item) => {
          return item == value;
        }) || []
      ).length > 0
    );
  }

  if (startDate == null || endDate == null) {
    return 0;
  } else {
    let leave_dates = [];
    const curDate = new Date(startDate.getTime());

    while (curDate <= endDate) {
      if (!isInArray(curDate.toISOString().substring(0, 10))) {
        const dayOfWeek = curDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          const dateTimeInParts = curDate.toISOString().split("T");
          leave_dates.push(dateTimeInParts[0]);
        }
      }
      curDate.setDate(curDate.getDate() + 1);
    }
    // alert(count);
    return leave_dates;
  }
}

function LeaveRequest(props) {
  const router = useRouter();

  const holidays_obj = props?.holidays;
  let holidays = [];
  holidays_obj.map((hol) => {
    holidays = holidays.concat(hol.date);
  });

  const req_leaves_obj = props?.leaves_data;
  let req_leaves = [];
  let req_leave_dates = [];
  let holiday_dates = [];

  req_leaves_obj.map((leave) => {
    req_leaves = req_leaves.concat(leave.leave_dates);
  });

  req_leaves = req_leaves.concat(holidays);
  // req_leaves.concat(leave.leave_dates);

  req_leaves.map((leave) => {
    const ld = new Date(leave + " EDT");
    req_leave_dates.push(ld);
  });

  holidays.map((hol) => {
    const ld = new Date(hol + " EDT");
    holiday_dates.push(ld);
  });

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const leave_dates = listOfWorkingDays(startDate, endDate, req_leave_dates);

  const leaveTypeRef = useRef();
  const reasonRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredLeaveType = leaveTypeRef.current.value;
    const enteredReason = reasonRef.current.value;

    const reqBody = {
      startDate: leave_dates[0],
      endDate: leave_dates.slice(-1)[0],
      leaveDates: leave_dates,
      leaveType: enteredLeaveType,
      reason: enteredReason,
    };

    fetch(`/api/org/employee/leaves/${props?.user_data?.id}`, {
      method: "POST",
      body: JSON.stringify(reqBody),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    router.push("/lms");
  }

  return (
    <>
      <div>
        <div className="mt-10 sm:mt-0 md:mt-6 shadow-xl">
          <div className="">
            <div className="mt-5 md:mt-0 ">
              <form onSubmit={submitFormHandler}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
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
                          excludeDates={req_leave_dates}
                          highlightDates={holiday_dates}
                          isClearable
                          withPortal
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <div className="flex justify-center mt-6">
                          {leave_dates.length > 0 ? (
                            <p>
                              Number of Working days requested :{" "}
                              {leave_dates.length}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Leave Type
                        </label>
                        <select
                          id="leave_type"
                          name="leave_type"
                          autoComplete="leave_type"
                          ref={leaveTypeRef}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                        >
                          <option value="sick">Sick Leave</option>
                          <option value="privilege">Privilege Leave</option>
                          <option value="maternity">Maternity Leave</option>
                          <option value="peternity">Paternity Leave</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          ref={reasonRef}
                          className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500  dark:focus:border-cyan-500"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
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

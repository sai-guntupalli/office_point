import Dashboard from "../../../components/dashboard";
import LeaveRequest from "../../../components/pages/lms/LeaveRequest";
import LMSOptions from "../../../components/pages/lms/LmsOptions";
import LMSTabs from "../../../components/pages/lms/LMSTabs";

const ApplyLeave = (props) => {
  console.log("props in LMS" + props);
  return (
    <>
      <Dashboard>
        <LMSTabs />
        <LeaveRequest />
      </Dashboard>
    </>
  );
};

export default ApplyLeave;

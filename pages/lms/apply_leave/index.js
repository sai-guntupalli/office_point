import Dashboard from "../../../components/dashboard";
import LMSOptions from "../../../components/pages/lms/LmsOptions";
import LMSTabs from "../../../components/pages/lms/LMSTabs";

const ApplyLeave = (props) => {
  console.log("props in LMS" + props);
  return (
    <>
      <Dashboard>
        <LMSTabs />
        {/* <LMSOptions /> */}
        <div> Apply Leave - TODO</div>
      </Dashboard>
    </>
  );
};

export default ApplyLeave;

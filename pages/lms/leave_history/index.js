import Dashboard from "../../../components/dashboard";
import LMSTabs from "../../../components/pages/lms/LMSTabs";
import LeaveHistoryComp from "../../../components/pages/lms/LeaveHistory";

const LeaveHistoryFun = (props) => {
  return (
    <>
      <Dashboard>
        <LMSTabs />
        <LeaveHistoryComp />
      </Dashboard>
    </>
  );
};

export default LeaveHistoryFun;

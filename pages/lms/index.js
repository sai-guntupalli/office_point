import Dashboard from "../../components/dashboard";
import LMSOptions from "../../components/pages/lms/LmsOptions";
import LMSTabs from "../../components/pages/lms/LMSTabs";

const LMSPage = (props) => {
  console.log("props in LMS" + props);
  return (
    <>
      <Dashboard>
        <LMSTabs />
        <LMSOptions />
      </Dashboard>
    </>
  );
};

export default LMSPage;

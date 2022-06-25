import Dashboard from "../../components/dashboard";
import Holidays from "../../components/pages/lms/Holidays";
import LMSTabs from "../../components/pages/lms/LMSTabs";

const LMSPage = (props) => {
  return (
    <>
      <Dashboard>
        <LMSTabs />
        {/* <LMSOptions /> */}
        <Holidays />
      </Dashboard>
    </>
  );
};

export default LMSPage;

import Dashboard from "../components/dashboard";
import Script from "next/script";

const LMSPage = (props) => {
  console.log("props in LMS" + props);
  return (
    <>
      <Dashboard>{/* <Card2 /> */}</Dashboard>
    </>
  );
};

export default LMSPage;

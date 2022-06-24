import "../styles/globals.css";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import AuthWrapper from "../components/auth/AuthWrapper";
import "react-datepicker/dist/react-datepicker.css";
// import "tw-elements";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthWrapper>
        {/* <Script src="https://unpkg.com/flowbite@1.4.7/dist/datepicker.js"></Script>
        <Script src="../lib/index.min.js"></Script> */}
        <Component {...pageProps} />
      </AuthWrapper>
    </SessionProvider>
  );
}

export default MyApp;

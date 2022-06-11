import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import AuthWrapper from "../components/auth/AuthWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </SessionProvider>
  );
}

export default MyApp;

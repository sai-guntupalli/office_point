import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
            rel="stylesheet"
          /> */}
        </Head>
        <body className="font-poppins">
          <Main />
          <NextScript />
          <script type="text/javascript" src="/js/flowbite.js"></script>
          <script type="text/javascript" src="/js/datepicker.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// import App from 'next/app'
import React, { useState } from "react";

import Head from "next/head";

// importing components
import Navigation from "../HTML/Navigation";
import Hamburger from "../HTML/Hamburger";

// importing stylesheet
import "../sass/main.scss";

function MyApp({ Component, pageProps }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
        <title>Fake Data Generator</title>
      </Head>
      <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Hamburger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Component {...pageProps} />
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;

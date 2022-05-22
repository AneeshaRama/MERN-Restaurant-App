import { StyledEngineProvider } from "@mui/material";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Swirly | Order food online</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Component {...pageProps} />
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;

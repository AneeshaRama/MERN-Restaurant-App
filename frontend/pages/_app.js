import { Slide, StyledEngineProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Swirly | Order food online</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <SnackbarProvider
          TransitionComponent={Slide}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SnackbarProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;

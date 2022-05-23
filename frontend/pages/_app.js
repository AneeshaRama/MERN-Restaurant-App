import Head from "next/head";
import { Slide, StyledEngineProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "../redux/Store";

import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Swirly | Order food online</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <SnackbarProvider
            TransitionComponent={Slide}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </Provider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;

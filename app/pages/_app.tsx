import "../styles/globals.css";
import type { AppProps } from "next/app";
import ResponsiveDrawer from "../src/components/molecules/responsiveDrawer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ResponsiveDrawer>
      <Component {...pageProps} />
    </ResponsiveDrawer>
  );
}

export default MyApp;

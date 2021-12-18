import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeadTemplate from "../components/HeadTemplate";
import "@fontsource/nunito";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-default">
      <HeadTemplate />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

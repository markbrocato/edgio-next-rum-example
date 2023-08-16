import Rum from "@/src/rum";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Rum />
      <Component {...pageProps} />
    </>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {OverlayProvider} from "@/contexts/OverlayContext";

export default function App({Component, pageProps}: AppProps) {
  return <OverlayProvider>
    <Component {...pageProps} />
  </OverlayProvider>;
}

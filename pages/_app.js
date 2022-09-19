import Head from "next/head";
import Navbar from "../components/Navbar";
import { AvatarImage } from "../public/assets";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

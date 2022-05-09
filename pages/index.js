import Head from "next/head";
import ConvertText from "../components/ConvertText";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ConvertJP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Hi there</main>
      <ConvertText />
    </div>
  );
}

//practice routes? So one page has japanese and another has english width conversion. Just for fun

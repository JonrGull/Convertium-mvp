import Head from "next/head";
import ConvertText from "../components/ConvertText";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Convertium</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Convertium</main>
      <ConvertText />
    </div>
  );
}

//practice routes? So one page has japanese and another has english width conversion. Just for fun

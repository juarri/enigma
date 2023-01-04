import { type NextPage } from "next";
import Head from "next/head";

import { api } from "../utils/api";

import Welcome from "../components/Welcome";
import Dashboard from "../components/Dashboard";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Lips</title>
        <meta
          name="description"
          content="Get questions, stories, prompts from people anonymously. Give your responses publicly."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Welcome />
      <Dashboard />
    </>
  );
};

export default Home;

import {
  GetServerSideProps,
  GetServerSidePropsContext,
  type NextPage,
} from "next";
import { getServerAuthSession } from "../server/auth";

import Head from "next/head";
import Welcome from "../components/Welcome";

const Home: NextPage = () => {
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
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(ctx);

  if (session?.user) {
    return {
      redirect: {
        destination: `/${session.user.username}`,
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

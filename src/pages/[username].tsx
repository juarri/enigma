import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { api } from "../utils/api";

import { getServerAuthSession } from "../server/auth";

import { styled } from "@/styles/stitches.config";

import Head from "next/head";

import Header from "@/components/profile/Header";
import Message from "@/components/profile/Message";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  const username = ctx.query.username;
  const isSessionUsersPage = session?.user?.username === username;

  const props = { username, isSessionUsersPage };

  return {
    props,
  };
};

const UserName = ({
  username,
  isSessionUsersPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: profile, isLoading: isProfileLoading } = api.users.get.useQuery(
    { username }
  );

  if (isProfileLoading) {
    return (
      <div className="py-4 px-4 text-center sm:px-6 lg:px-8">
        <h1>Loading profile...</h1>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="py-4 px-4 text-center sm:px-6 lg:px-8">
        <h1>This profile doesn't exist...</h1>
      </div>
    );
  }

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

      <Header username={username} />

      <Message username={username} />
    </>
  );
};

export default UserName;

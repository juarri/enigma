import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

import { api } from "../utils/api";

import { getServerAuthSession } from "../server/auth";

import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  const username = ctx.query.username;
  const isSessionUsersPage = session?.user?.username === username;

  const props = { session, username, isSessionUsersPage };

  return {
    props,
  };
};

const User = ({
  session,
  username,
  isSessionUsersPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: profile } = api.users.get.useQuery({ username });

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

      <header>
        <div className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <img
              src={profile.image || ""}
              alt={`${profile.username}'s profile picture`}
              className="h-28 w-28 rounded-full border-4 border-main-7 hover:animate-spin dark:border-maindark-7"
            />
            <div className="flex flex-col items-center">
              <h1 className="-mb-1">{profile.username}</h1>
              <strong className="mb-3 text-2xl">{profile.name}</strong>
              <div></div>
              <button className="relative inline-flex items-center rounded bg-main-9 px-4 py-2 font-medium text-main-1 shadow-sm hover:bg-main-10 dark:bg-maindark-9 dark:hover:bg-maindark-10">
                Follow
              </button>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="py-4 px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Send Lip</h2>
          <form className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-lg font-bold">
              Ask a question
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Send me something already..."
              className="mb-2 w-full rounded bg-main-3 p-3 ring-main-7 placeholder:text-main-7 dark:bg-maindark-3 dark:ring-maindark-7"
            />
            <button className="bg-rose-600 relative inline-flex w-fit items-center justify-center self-end rounded-md px-4 py-2 shadow-sm hover:scale-105">
              Send Lip
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default User;

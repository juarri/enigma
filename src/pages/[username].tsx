import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { api } from "../utils/api";
import { getServerAuthSession } from "../server/auth";

import Head from "next/head";

import { styled } from "@/styles/stitches.config";
import Profile from "@/components/Profile";
import SendMessageForm from "@/components/forms/SendMessage";
import Feed from "@/components/Feed";

const Layout = styled("div", {
  position: "relative",

  margin: "0 auto",

  maxWidth: "$xl3",

  display: "grid",
  gap: "$4",
  gridTemplateColumns: "1fr",

  "@md": {
    gap: "$8",
    gridTemplateColumns: "2fr 3fr",
  },
});

const Aside = styled("aside", {
  position: "relative",
});

const Sticky = styled("div", {
  top: "$20",
  position: "sticky",

  gap: "$4",
  display: "flex",
  flexDirection: "column",
});

const Main = styled("div", {
  display: "flex",
  gap: "$4",
  flexDirection: "column",
});

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  const username = ctx.query.username;
  const isAuthorized = session?.user?.username === username;

  const props = { username, isAuthorized };

  return {
    props,
  };
};

const UserName = ({
  username,
  isAuthorized,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: profile, isLoading: isProfileLoading } =
    api.users.getByUsername.useQuery({ username });

  if (isProfileLoading) return <ProfileLoading />;

  if (!profile) return <ProfileDoesntExist />;

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

      <Layout>
        <Aside>
          <Sticky>
            <Profile userId={profile.id} />
            <SendMessageForm userId={profile.id} />
          </Sticky>
        </Aside>

        <Main>
          <Feed userId={profile.id} isAuthorized={isAuthorized} />
        </Main>
      </Layout>
    </>
  );
};

export default UserName;

const ProfileLoading = () => (
  <div className="py-4 px-4 text-center sm:px-6 lg:px-8">
    <h1>This profile doesn&apos;t exist...</h1>
  </div>
);

const ProfileDoesntExist = () => (
  <div className="py-4 px-4 text-center sm:px-6 lg:px-8">
    <h1>This profile doesn&apos;t exist...</h1>
  </div>
);

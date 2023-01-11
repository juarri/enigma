import { useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { api } from "../utils/api";
import { getServerAuthSession } from "../server/auth";

import Head from "next/head";

import { styled } from "@/styles/stitches.config";
import Section from "@/components/layout/Section";
import Information from "@/components/profile/Information";
import SendMessageForm from "@/components/profile/SendMessageForm";
import Responses from "@/components/profile/Responses";
import Messages from "@/components/profile/Messages";

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

const Profile = styled("div", {
  display: "flex",
  gap: "$4",
  flexDirection: "column",
});

const Main = styled("div", {
  display: "flex",
  gap: "$4",
  flexDirection: "column",
});

const Buttons = styled("div", {
  display: "flex",
  gap: "$4",
});

const Lips = styled("div", {
  gap: "$4",
  display: "flex",
  flexDirection: "column",
});

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
  const { data: profile, isLoading: isProfileLoading } =
    api.users.getByUsername.useQuery({ username });

  const [selected, setSelected] = useState("responses");

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

      <Section>
        <Layout>
          <Profile>
            <Information userId={profile.id} />
            <SendMessageForm userId={profile.id} />
          </Profile>

          <Main>
            <Buttons>
              <button onClick={() => setSelected("responses")}>
                Responses
              </button>
              {isSessionUsersPage && (
                <button onClick={() => setSelected("messages")}>
                  Messages
                </button>
              )}
            </Buttons>

            <Lips>
              {selected === "responses" && <Responses userId={profile.id} />}
              {selected === "messages" && <Messages userId={profile.id} />}
            </Lips>
          </Main>
        </Layout>
      </Section>
    </>
  );
};

export default UserName;

const ProfileLoading = () => (
  <div className="py-4 px-4 text-center sm:px-6 lg:px-8">
    <h1>This profile doesn't exist...</h1>
  </div>
);

const ProfileDoesntExist = () => (
  <div className="py-4 px-4 text-center sm:px-6 lg:px-8">
    <h1>This profile doesn't exist...</h1>
  </div>
);

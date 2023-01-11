import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "@/styles/normalizer.css";

import { ThemeProvider } from "next-themes";
import { styled, darkTheme, globalStyles } from "@/styles/stitches.config";

import { Roboto } from "@next/font/google";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

const Wrapper = styled("div", {
  pos: "relative",
  minHeight: "100vh",

  display: "flex",
  flexDirection: "column",
});

const Main = styled("main", {
  position: "relative",
  flex: "auto",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  globalStyles();
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          light: "light",
          dark: darkTheme.className,
        }}
      >
        <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
        <Wrapper>
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

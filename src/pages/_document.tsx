import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText, styled } from "@/styles/stitches.config";

const Body = styled("body", {});

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}

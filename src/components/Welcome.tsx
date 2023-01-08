import { signIn } from "next-auth/react";
import { styled } from "@/styles/stitches.config";

import PrimaryButton from "@/components/Button";

const Wrapper = styled("div", {
  position: "absolute",
  inset: "0",

  display: "grid",
  gap: "$64",
  placeItems: "center",
  placeContent: "center",
});

const Titles = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Title = styled("h1", {
  fontSize: "$xl4",
  fontWeight: "$medium",

  span: {
    fontSize: "$xl3",
  },
});

const Subtitle = styled("p", {
  textAlign: "center",
});

const Strong = styled("strong", {
  fontWeight: "$medium",
  // textDecoration: "underline",
});

const Welcome = () => {
  return (
    <Wrapper>
      <Titles>
        <Title>
          Lips <span>👄</span>
        </Title>
        <Subtitle>
          Recieve <Strong>anonymous</Strong> messages.
          <br />
          Give <Strong>public</Strong> responses.
        </Subtitle>
      </Titles>
      <PrimaryButton onClick={() => signIn("github")}>Join Lips</PrimaryButton>
    </Wrapper>
  );
};

export default Welcome;

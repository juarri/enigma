import { signOut, useSession } from "next-auth/react";
import { styled } from "@/styles/stitches.config";

import Section from "@/components/layout/Section";
import SectionContainer from "@/components/layout/Container";

import Button from "@/components/Button";

const Container = styled(SectionContainer, {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Lips = styled("span", {
  fontSize: "$xl",
  fontWeight: "$medium",

  span: {
    fontSize: "$xl",
  },
});

const RightSide = styled("div", {
  display: "flex",
  gap: "$4",
});

const Profile = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2",

  img: {
    size: "$8",
    borderRadius: "$full",
  },
});

const Header = () => {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <Section as="header">
      <Container>
        <Lips>
          Lips <span>👄</span>
        </Lips>

        <RightSide>
          <Profile>
            <img
              src={session.user.image || ""}
              alt={`${session.user.username}'s profile picture`}
              className="h-8 w-8 rounded-full"
            />
            <span>{session.user.username}</span>
          </Profile>

          <Button onClick={() => signOut()}>Logout</Button>
        </RightSide>
      </Container>
    </Section>
  );
};

export default Header;

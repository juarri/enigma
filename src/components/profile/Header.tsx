import { styled } from "@/styles/stitches.config";
import { api } from "src/utils/api";

import Section from "@/components/layout/Section";
import StyledContainer from "@/components/layout/Container";

const Container = styled(StyledContainer, {
  display: "flex",
  gap: "$3",
  flexDirection: "column",
  alignItems: "center",
});

const ProfileImage = styled("img", {
  size: "$28",

  borderRadius: "$full",
  borderWidth: "2px",
  borderColor: "$main9",
});

const Username = styled("h1", {
  marginBottom: "-$4",
  fontSize: "$sm",
});

const Name = styled("strong", {
  // fontSize: "$lg",
  fontWeight: "$medium",
});

type HeaderProps = {
  username: string;
};

const Header = ({ username }: HeaderProps) => {
  const { data: profile, isLoading: isProfileLoading } = api.users.get.useQuery(
    { username }
  );

  if (!profile) {
    return (
      <div className="py-4 px-4 text-center sm:px-6 lg:px-8">
        <h1>This profile doesn't exist...</h1>
      </div>
    );
  }

  return (
    <Section as="header">
      <Container>
        <ProfileImage
          src={profile.image || ""}
          alt={`${profile.username}'s profile icon`}
        />
        <Username>{profile.username}</Username>
        <Name>{profile.name}</Name>
      </Container>
    </Section>
  );
};

export default Header;

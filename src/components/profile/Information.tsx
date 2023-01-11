import { styled } from "@/styles/stitches.config";
import { api } from "src/utils/api";

const Section = styled("header", {
  display: "flex",
  gap: "$3",
  flexDirection: "column",
  alignItems: "center",
});

const ProfileImage = styled("img", {
  size: "$28",

  borderRadius: "$full",
  borderWidth: "1px",
  borderColor: "$main11",
});

const Names = styled("div", {
  marginTop: "$2",
  textAlign: "center",
});

const Username = styled("h1", {
  fontSize: "$sm",
  lineHeight: 1,
});

const Name = styled("strong", {
  fontWeight: "$medium",
  lineHeight: 1,
});

const BioTitle = styled("h2", {
  fontSize: "$sm",
  fontWeight: "$medium",
});

const Bio = styled("p", {
  fontSize: "$sm",
});

type HeaderProps = {
  userId: string;
};

const Header = ({ userId }: HeaderProps) => {
  const { data: user } = api.users.get.useQuery({
    id: userId,
  });

  if (!user) return null;

  return (
    <Section>
      <div>
        <ProfileImage
          src={user.image || ""}
          alt={`${user.username}'s profile icon`}
        />
        <Names>
          <Username>{user.username}</Username>
          <Name>{user.name}</Name>
        </Names>
      </div>

      <div>
        <BioTitle>Bio</BioTitle>
        <Bio>
          faucibus in ornare quam viverra orci sagittis eu volutpat odio
          facilisis mauris sit amet massa vitae tortor condimentum laci
        </Bio>
      </div>
    </Section>
  );
};

export default Header;

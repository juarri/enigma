import { styled } from "@/styles/stitches.config";
import { api } from "src/utils/api";

const Section = styled("section", {
  display: "flex",
  gap: "$3",
  flexDirection: "column",
  alignItems: "center",
});

const Image = styled("img", {
  size: "$24",

  marginBottom: "$2",

  borderRadius: "$full",
  borderWidth: "1px",
  borderColor: "$main11",

  alignSelf: "center",
});

const Username = styled("h1", {
  textAlign: "center",
  fontSize: "$sm",
  lineHeight: 1,
});

const Name = styled("strong", {
  textAlign: "center",
  fontWeight: "$medium",
  lineHeight: 1,
});

const Group = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Heading = styled("h2", {
  fontSize: "$sm",
  fontWeight: "$medium",
});

const Text = styled("p", {
  fontSize: "$sm",
});

type ProfileProps = {
  userId: string;
};

const Profile = ({ userId }: ProfileProps) => {
  const { data: user } = api.users.get.useQuery({
    id: userId,
  });

  if (!user) return null;

  return (
    <Section>
      <Group>
        <Image src={user.image || ""} alt={`${user.username}'s profile icon`} />
        <Username>{user.username}</Username>
        <Name>{user.name}</Name>
      </Group>

      <Group>
        <Heading>Bio</Heading>
        <Text>
          faucibus in ornare quam viverra orci sagittis eu volutpat odio
          facilisis mauris sit amet massa vitae tortor condimentum laci
        </Text>
      </Group>
    </Section>
  );
};

export default Profile;

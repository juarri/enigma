import { api } from "src/utils/api";
import { styled } from "@/styles/stitches.config";

const ResponseContainer = styled("div", {
  borderRadius: "$md",
  padding: "$4 $6",
  backgroundColor: "$mainA3",
});

const Message = styled("h3", {
  fontWeight: "$medium",
  lineHeight: "1.2",
});

const Response = styled("p", {
  // fontSize: "$sm",
});

type ResponsesProps = {
  userId: string;
};

const ResponsesPage = ({ userId }: ResponsesProps) => {
  const { data: user } = api.users.getRespondedLips.useQuery({
    id: userId,
  });

  if (!user) return null;

  return (
    <>
      {user.lips.map((lip) => (
        <ResponseContainer key={lip.id}>
          <Message>{lip.message}</Message>
          <Response>{lip.response}</Response>
        </ResponseContainer>
      ))}
    </>
  );
};

export default ResponsesPage;

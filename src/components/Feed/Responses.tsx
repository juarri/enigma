import { api } from "src/utils/api";
import { styled } from "@/styles/stitches.config";

const ResponseContainer = styled("div", {
  borderBottom: "1px solid $gray6",
  paddingBottom: "$4",
});

const Message = styled("h3", {
  marginBottom: "$4",

  fontSize: "$lg",
  fontWeight: "$medium",
  lineHeight: "1.2",
});

const Response = styled("p", {
  // fontSize: "$lg",
});

type ResponsesProps = {
  userId: string;
};

const Responses = ({ userId }: ResponsesProps) => {
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

export default Responses;

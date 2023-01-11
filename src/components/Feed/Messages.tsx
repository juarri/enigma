import { api } from "src/utils/api";

import { styled } from "@/styles/stitches.config";
import SendResponse from "@/components/forms/SendResponse";

const MessageContainer = styled("div", {
  borderRadius: "$md",

  padding: "$4 $6",

  gap: "$2",
  display: "flex",
  flexDirection: "column",

  backgroundColor: "$main3",
});

const Message = styled("h3", {
  fontSize: "$lg",
  fontWeight: "$medium",
  lineHeight: "1.2",
});

type ResponsesProps = {
  userId: string;
};

const ResponsesPage = ({ userId }: ResponsesProps) => {
  const { data: user } = api.users.getPendingLips.useQuery({
    id: userId,
  });

  if (!user) return null;

  return (
    <>
      {user.lips.map((lip) => {
        return (
          <MessageContainer key={lip.id}>
            <Message>{lip.message}</Message>
            <SendResponse lipId={lip.id} />
          </MessageContainer>
        );
      })}
    </>
  );
};

export default ResponsesPage;

import {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  useState,
} from "react";

import { api } from "../../utils/api";

import { styled } from "@/styles/stitches.config";

import Button from "@/components/Button";

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
});

const Label = styled("label", {
  fontSize: "$sm",
  fontWeight: "$medium",
});

const TextArea = styled("textarea", {
  marginBottom: "$2",

  borderRadius: "$md",
  borderWidth: "1px",
  borderColor: "$main8",

  px: "$4",
  py: "$3",

  height: "$28",

  color: "$main12",
  backgroundColor: "$gray1",

  fontSize: "$sm",

  resize: "none",

  "&::placeholder": {
    color: "$main7",
  },

  "@sm": {
    height: "$28",
    fontSize: "$sm",
  },
});

type MessageProps = {
  userId: string;
};

const Message = ({ userId }: MessageProps) => {
  const { data: user } = api.users.get.useQuery({
    id: userId,
  });

  const apiContext = api.useContext();

  const [message, setMessage] = useState("");
  const handleTextArea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.preventDefault();

    // Return if user presses the enter key
    if (e.nativeEvent.type === "insertLineBreak") return;

    setMessage(e.target.value);
  };

  const createLipMutation = api.lips.create.useMutation();
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    createLipMutation.mutate(
      {
        message,
        userId,
      },
      {
        onSuccess: () => {
          setMessage("");

          apiContext.users.invalidate();
        },
      }
    );
  };

  if (!user) return null;

  return (
    <Form className="flex flex-col" onSubmit={handleSubmit}>
      <Label htmlFor="message">Ask a question</Label>
      <TextArea
        id="message"
        maxLength={128}
        placeholder="Send me something already..."
        value={message}
        onChange={handleTextArea}
      />
      <Button type="primary" css={{ alignSelf: "end" }}>
        Send Lip
      </Button>
    </Form>
  );
};

export default Message;

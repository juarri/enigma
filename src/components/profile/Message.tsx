import { ChangeEvent, useState } from "react";

import { api } from "../../utils/api";

import { styled } from "@/styles/stitches.config";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/Button";

const Title = styled("h2", {
  position: "absolute",
  left: "-200vw",
});

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
  py: "$2",

  color: "$main12",

  fontSize: "$sm",

  resize: "none",

  "&::placeholder": {
    color: "$main8",
  },
});

type MessageProps = {
  username: string;
};

const Message = ({ username }: MessageProps) => {
  const [message, setMessage] = useState("");
  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    // Return if user presses the enter key
    if (e.nativeEvent.type === "insertLineBreak") return;

    setMessage(e.target.value);
  };

  const createLipMutation = api.lips.create.useMutation();
  const handleSubmit = (e) => {
    e.preventDefault();

    createLipMutation.mutate({
      message,
      userId: "1",
    });
  };

  return (
    <Section>
      <Container css={{ maxWidth: "$sm" }}>
        <Title>Send Message</Title>

        <Form className="flex flex-col" onSubmit={handleSubmit}>
          <Label htmlFor="message">Ask a question</Label>
          <TextArea
            id="message"
            rows={3}
            maxLength={128}
            placeholder="Send me something already..."
            value={message}
            onChange={handleTextArea}
          />
          <Button type="primary" css={{ alignSelf: "end" }}>
            Send Lip
          </Button>
        </Form>
      </Container>
    </Section>
  );
};

export default Message;

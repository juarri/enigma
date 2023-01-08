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

  px: "$4",
  py: "$4",

  color: "$main12",
  backgroundColor: "$main3",

  fontSize: "$sm",

  "&::placeholder": {
    color: "$main8",
  },
});

type MessageProps = {
  username: string;
};

const Message = ({ username }: MessageProps) => {
  return (
    <Section>
      <Container>
        <Title>Send Message</Title>

        <Form className="flex flex-col">
          <Label htmlFor="message">Ask a question</Label>
          <TextArea
            id="message"
            rows={3}
            maxLength={128}
            placeholder="Send me something already..."
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

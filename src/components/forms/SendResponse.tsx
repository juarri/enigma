import {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
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

const Buttons = styled("div", {
  gap: "$4",
  display: "flex",
});

type SendResponseProps = {
  lipId: string;
};

const SendResponse = ({ lipId }: SendResponseProps) => {
  const apiContext = api.useContext();

  const [response, setResponse] = useState("");
  const handleTextArea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.preventDefault();

    // Return if user presses the enter key
    if (e.nativeEvent.type === "insertLineBreak") return;

    setResponse(e.target.value);
  };

  const updateLipResponseMutation = api.lips.updateResponse.useMutation();
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    updateLipResponseMutation.mutate(
      {
        response,
        lipId,
      },
      {
        onSuccess: () => {
          setResponse("");

          apiContext.invalidate();
        },
      }
    );
  };

  const deleteLipMutation = api.lips.delete.useMutation();
  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    deleteLipMutation.mutate({ lipId });
    apiContext.invalidate();
  };

  return (
    <Form id="response-form" className="flex flex-col" onSubmit={handleSubmit}>
      <Label htmlFor="response">Respond</Label>
      <TextArea
        id="response"
        maxLength={128}
        value={response}
        onChange={handleTextArea}
      />
      <Buttons>
        <Button onClick={handleDelete}>Delete</Button>
        <Button type="primary">Send Response</Button>
      </Buttons>
    </Form>
  );
};

export default SendResponse;

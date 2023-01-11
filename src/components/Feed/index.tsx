import { useState } from "react";

import { styled } from "@/styles/stitches.config";
import Responses from "./Responses";
import Messages from "./Messages";

const Buttons = styled("div", {
  display: "flex",
  gap: "$4",
});

const Feeds = styled("div", {
  gap: "$4",
  display: "flex",
  flexDirection: "column",
});

type FeedProps = {
  userId: string;
  isAuthorized: boolean;
};

const Feed = ({ userId, isAuthorized }: FeedProps) => {
  const [selected, setSelected] = useState("responses");

  return (
    <section>
      <Buttons>
        <button onClick={() => setSelected("responses")}>Responses</button>
        {isAuthorized && (
          <button onClick={() => setSelected("messages")}>Messages</button>
        )}
      </Buttons>

      <Feeds>
        {selected === "responses" && <Responses userId={userId} />}
        {selected === "messages" && <Messages userId={userId} />}
      </Feeds>
    </section>
  );
};

export default Feed;

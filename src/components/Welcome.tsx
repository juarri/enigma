import { signIn, useSession } from "next-auth/react";
import { api } from "../utils/api";

const Welcome = () => {
  const { data: session } = useSession();
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  if (session) return null;

  return (
    <div className="flex flex-col items-center gap-8 self-center">
      <h1 className="text-6xl font-bold">Lips 👄</h1>
      <p className="text-center">
        Get questions, stories, prompts from people anonymously.
        <br /> Give your responses publicly.
      </p>
      <button
        className="relative inline-flex w-fit items-center rounded-md border border-transparent bg-gray-100 px-6 py-3 text-lg font-medium text-gray-900 shadow-sm hover:bg-gray-200"
        onClick={() => signIn("github")}
      >
        Sign In
      </button>
    </div>
  );
};

export default Welcome;

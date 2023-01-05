import { signIn } from "next-auth/react";

const Welcome = () => {
  return (
    <div className="mx-4 grid h-full place-content-center">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-7xl font-bold">
          Lips <span className="text-6xl">👄</span>
        </h1>
        <p className="mb-72 text-center sm:mb-16">
          Recieve <b className="underline">anonymous</b> messages. <br />
          Give <b className="underline">public</b> responses.
        </p>
        <button
          className="relative inline-flex items-center rounded bg-main-9 px-4 py-2 font-medium text-main-1 shadow-sm hover:bg-main-10 dark:bg-maindark-9 dark:hover:bg-maindark-10"
          onClick={() => signIn("github")}
        >
          Begin Sending Lips
        </button>
      </div>
    </div>
  );
};

export default Welcome;

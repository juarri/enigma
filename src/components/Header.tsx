import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">
          Lips <span className="text-xl">👄</span>
        </span>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <img
              src={session.user.image || ""}
              alt={`${session.user.username}'s profile picture`}
              className="h-8 w-8 rounded-full"
            />
            <span>{session.user.username}</span>
          </div>

          <button
            onClick={() => signOut()}
            className="relative inline-flex items-center rounded-md bg-main-3 px-4 py-2 font-medium shadow-sm hover:bg-main-4 dark:bg-maindark-3 dark:hover:bg-maindark-4"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

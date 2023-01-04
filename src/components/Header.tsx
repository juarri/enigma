import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <footer className="py-4 px-8">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">Lips 👄</span>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <img
              src={session.user.image || ""}
              alt={`${session.user.name}'s profile picture`}
              className="h-8 w-8 rounded-full"
            />
            <span>{session.user.name}</span>
          </div>

          <button
            onClick={() => signOut()}
            className="relative inline-flex items-center rounded-md bg-neutral-800 px-4 py-2 text-base font-medium shadow-sm hover:bg-neutral-700"
          >
            Logout
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Header;

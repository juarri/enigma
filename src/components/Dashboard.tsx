import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="grid grid-rows-2 gap-4 p-4 sm:grid-cols-3 sm:grid-rows-1 sm:gap-8 sm:p-8">
      <div className="row-span-1 flex sm:col-span-2">
        <div></div>
      </div>
      <div className="row-span-2 flex flex-col gap-2 sm:col-span-1 sm:row-span-1">
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;

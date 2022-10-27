import { use } from "react";
import Link from "next/link";

type User = {
  id: number;
  title: string;
};

const fetchUsers: () => Promise<User[]> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const Page = () => {
  const users = use(fetchUsers());
  return (
    <div>
      <h1 className="my-4 text-4xl font-bold text-blue-700">JSON Placeholder Users!</h1>
      <div className="m-4">
        {users.map((user) => {
          return (
            <div key={user.id}>
              {user.id}: {user.title}
            </div>
          );
        })}
      </div>
      <div>
        <Link href="/placeholder" className="bg-blue-200 hover:bg-blue-300 underline p-2">
          back to Placeholder List
        </Link>
      </div>
    </div>
  );
};

export default Page;

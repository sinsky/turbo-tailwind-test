import Link from "next/link";

const Page = () => {
  return <div className="m-8">
    <h1 className="my-4 text-4xl font-bold text-blue-700">JSON Placeholder Page List.</h1>
    <ul className="ml-4">
      <li>
        <Link href="/placeholder/users/" className="bg-blue-200 hover:bg-blue-300 underline p-2">Users</Link>
      </li>
    </ul>
  </div>;
};

export default Page;

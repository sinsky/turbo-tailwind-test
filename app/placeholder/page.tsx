import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1 className="my-4 text-4xl font-bold text-blue-700">JSON Placeholder Page List.</h1>
      <ul className="ml-8 list-disc [&>*]:my-4">
        <li>
          <Link href="/placeholder/users/" className="bg-blue-200 hover:bg-blue-300 underline p-2">
            Users
          </Link>
        </li>
        <li>
          <Link href="/placeholder/posts/" className="bg-blue-200 hover:bg-blue-300 underline p-2">
            Posts
          </Link>
        </li>
        <li>
          <Link href="/placeholder/photos" className="bg-blue-200 hover:bg-blue-300 underline p-2">
            Photos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;

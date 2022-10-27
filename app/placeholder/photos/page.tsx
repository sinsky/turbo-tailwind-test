import { use } from "react";
import Link from "next/link";
import Image from "next/image";

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const fetchPhotos: () => Promise<Photo[]> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  return res.json();
};

const Page = () => {
  const photos = use(fetchPhotos());
  return (
    <div>
      <h1 className="my-4 text-4xl font-bold text-blue-700">JSON Placeholder Photos!</h1>
      <div className="m-4 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
        {photos.splice(0, 50).map((photo) => {
          return (
            <div key={photo.id}>
              <Image src={photo.thumbnailUrl} alt={photo.title} width={150} height={150} />
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

import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/277cd68b-9d48-492e-9441-7cea6dd45a20-egk9us.png",
  "https://utfs.io/f/fecfa986-29df-4b26-a41a-2c77d6a8f669-egk9up.png",
  "https://utfs.io/f/04dc99a7-8c07-4d1d-8c66-4cecad3c6c7b-egk9uq.png",
  "https://utfs.io/f/7db2ed53-13a5-44a9-867c-16c743fc0270-egk9ut.png",
  "https://utfs.io/f/c76b692b-536c-4087-a16a-acb383ec7b0c-egk9ur.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <>
      <div className="flex flex-wrap gap-4 p-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            <div>{post.name}</div>
          </div>
        ))}
        {mockImages.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </>
  );
}

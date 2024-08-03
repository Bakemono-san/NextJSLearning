import PostContainer, { PostContainerProps } from "@/components/PostContainer";
import StatusContainer from "@/components/StatusContainer";
import { Post } from "../../utils/type";

export default async function Home() {
  const posts = await getData();
  return (
    <main className="flex flex-col w-full gap-16 py-12 px-52 ml-[250px]">
      <StatusContainer />
      <div className="flex justify-center overflow-y-scroll">
        <PostContainer posts={posts}/>
      </div>
    </main>
  );
}

async function getData(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)
  const posts = await res.json()
  return posts
}
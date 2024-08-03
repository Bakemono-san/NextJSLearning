import PostContainer, { PostContainerProps } from "@/components/PostContainer";
import StatusContainer from "@/components/StatusContainer";
import { Post } from "../../utils/type";

export default async function Home() {
  if(!process.env.NEXT_PUBLIC_API_URL){
    return null;
  }
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
  try {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const posts = await res.json()
  return posts
} catch (error) {
  console.error('Fetch error:', error);
  return null; // or handle error appropriately
}
}
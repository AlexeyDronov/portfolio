import { getAllPosts } from "./lib/blogUtils";
import ClientHome from "./components/ClientHome";

export default function Home() {
  const posts = getAllPosts();

  return <ClientHome posts={posts} />;
}
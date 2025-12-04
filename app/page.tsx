import { getAllPosts } from "./lib/blogUtils";
import { getFeaturedProjects } from "./lib/projectUtils";
import ClientHome from "./components/ClientHome";

export default function Home() {
  const posts = getAllPosts();
  const featuredProjects = getFeaturedProjects();

  return <ClientHome posts={posts} projects={featuredProjects} />;
}
import { getAllPosts } from "./lib/blogUtils";
import { getFeaturedProjects } from "./lib/projectUtils";
import ClientHome from "./components/ClientHome";

// This is the main server-side page component for the root route (/).
// It fetches data on the server and passes it to the client-side ClientHome component.
export default function Home() {
  // Fetch all blog posts from the file system/CMS
  const posts = getAllPosts();
  // Fetch featured projects
  const featuredProjects = getFeaturedProjects();

  // Render the ClientHome component with the fetched data
  return <ClientHome posts={posts} projects={featuredProjects} />;
}
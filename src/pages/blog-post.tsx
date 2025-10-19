import { AllProviders } from "../contexts/AllProviders";
import { BlogContent } from "../components/BlogContent";

export const BlogPostPage = () => {
  return (
    <AllProviders>
      <BlogContent />
    </AllProviders>
  );
};

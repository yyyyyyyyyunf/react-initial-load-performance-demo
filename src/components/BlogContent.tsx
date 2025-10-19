import { memo } from "react";
import { Header } from "./Header";
import { Article } from "./Article";
import { Comments } from "./Comments";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export const BlogContent = memo(() => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Article />
          <Comments />
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
});

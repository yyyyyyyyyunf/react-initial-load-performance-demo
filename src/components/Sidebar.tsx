import { memo } from "react";
import { useShowSidebar } from "../contexts/ShowSidebarProvider";
import { blogPost } from "../constants/blogData";
import { popularArticles } from "../constants/articlesData";
import { allTags } from "../constants/tagsData";

export const Sidebar = memo(() => {
  const showSidebar = useShowSidebar();
  if (!showSidebar) return null;

  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* 作者信息卡片 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt={blogPost.author}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-bold text-gray-900">{blogPost.author}</h4>
            <p className="text-sm text-gray-600">资深作者</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-4">{blogPost.authorBio}</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          关注作者
        </button>
      </div>

      {/* 热门文章 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-bold text-gray-900 mb-4">热门文章</h3>
        <div className="space-y-4">
          {popularArticles.map((article, index) => (
            <a key={article.id} href="#" className="block group">
              <div className="flex items-start space-x-3">
                <span className="text-2xl font-bold text-gray-300 group-hover:text-blue-600">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 mb-1">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-500">{article.views} 阅读</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 标签云 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-bold text-gray-900 mb-4">热门标签</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag.name}
              className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-3 py-1 rounded-full text-sm transition-colors"
            >
              {tag.name} ({tag.count})
            </button>
          ))}
        </div>
      </div>

      {/* 订阅卡片 */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-sm p-6 text-white">
        <h3 className="font-bold text-xl mb-2">订阅我们的博客</h3>
        <p className="text-blue-100 text-sm mb-4">
          每周获取最新的技术文章和前端资讯
        </p>
        <input
          type="email"
          placeholder="你的邮箱地址"
          className="w-full px-4 py-2 rounded-lg mb-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50">
          立即订阅
        </button>
      </div>
    </aside>
  );
});

import { memo } from "react";
import { useHandleSidebarToggle } from "../contexts/HandleSidebarToggleProvider";
import { useSearchQuery } from "../contexts/SearchQueryProvider";
import { useHandleSearchChange } from "../contexts/HandleSearchChangeProvider";

export const Header = memo(() => {
  const handleSidebarToggle = useHandleSidebarToggle();
  const searchQuery = useSearchQuery();
  const handleSearchChange = useHandleSearchChange();
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-gray-900">TechBlog</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600">首页</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">技术文章</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">关于</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="搜索文章..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              订阅
            </button>
            <button 
              onClick={handleSidebarToggle}
              className="md:hidden p-2 text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});

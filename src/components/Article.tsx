import { memo } from "react";
import { useLikes } from "../contexts/LikesProvider";
import { useIsLiked } from "../contexts/IsLikedProvider";
import { useIsBookmarked } from "../contexts/IsBookmarkedProvider";
import { useHandleLike } from "../contexts/HandleLikeProvider";
import { useHandleBookmark } from "../contexts/HandleBookmarkProvider";
import { useHandleShare } from "../contexts/HandleShareProvider";
import { blogPost } from "../constants/blogData";
import { relatedArticles } from "../constants/articlesData";

export const Article = memo(() => {
  const likes = useLikes();
  const isLiked = useIsLiked();
  const isBookmarked = useIsBookmarked();
  const handleLike = useHandleLike();
  const handleBookmark = useHandleBookmark();
  const handleShare = useHandleShare();
  return (
    <main className="flex-1 max-w-4xl">
      {/* 面包屑导航 */}
      <nav className="text-sm text-gray-600 mb-4">
        <a href="#" className="hover:text-blue-600">首页</a>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-blue-600">{blogPost.category}</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">文章详情</span>
      </nav>

      {/* 文章主体 */}
      <article className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {blogPost.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {blogPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-6">
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt={blogPost.author}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <div className="font-medium text-gray-900">{blogPost.author}</div>
                <div>{blogPost.date}</div>
              </div>
            </div>
            <span>•</span>
            <span>{blogPost.readTime}</span>
            <span>•</span>
            <span>{likes} 人喜欢</span>
          </div>
        </div>

        {/* 文章封面图 */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
            alt="Web 性能优化" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
            width={276}
            height={256}
          />
        </div>

        {/* 文章内容 */}
        <div className="prose max-w-none">
          {blogPost.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.trim().startsWith('##')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {paragraph.replace('##', '').trim()}
                </h2>
              );
            }
            if (paragraph.trim().startsWith('**')) {
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  <strong>{paragraph.replace(/\*\*/g, '')}</strong>
                </p>
              );
            }
            return (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
          
          {/* 性能指标图表 */}
          <div className="my-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Core Web Vitals 指标</h3>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Core Web Vitals 性能指标图表" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-sm text-blue-700 mt-2">Google Core Web Vitals 是衡量网站用户体验的重要指标</p>
          </div>

          {/* 图片优化示例 */}
          <div className="my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">图片格式对比</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="传统 JPEG 格式" 
                  className="w-full h-32 object-cover rounded"
                />
                <p className="text-sm text-gray-600 mt-2">传统 JPEG 格式</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="现代 WebP 格式" 
                  className="w-full h-32 object-cover rounded"
                />
                <p className="text-sm text-gray-600 mt-2">现代 WebP 格式（文件大小减少 30-50%）</p>
              </div>
            </div>
          </div>

          {/* 性能监控工具截图 */}
          <div className="my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">性能监控工具</h3>
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
              alt="Lighthouse 性能分析工具" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600 mt-2">Lighthouse 性能分析报告示例</p>
          </div>
        </div>

        {/* 标签 */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-200">
          {blogPost.tags.map((tag, index) => (
            <button key={index} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              #{tag}
            </button>
          ))}
        </div>

        {/* 互动按钮 */}
        <div className="flex flex-wrap items-center justify-between mt-8 pt-6 border-t border-gray-200 gap-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isLiked 
                  ? 'bg-red-100 text-red-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <svg className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{likes}</span>
            </button>
            <button
              onClick={handleBookmark}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isBookmarked 
                  ? 'bg-yellow-100 text-yellow-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <svg className="w-5 h-5" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span>{isBookmarked ? '已收藏' : '收藏'}</span>
            </button>
          </div>
          <button
            onClick={handleShare}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            分享文章
          </button>
        </div>
      </article>

      {/* 相关文章 */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">相关文章</h3>
        <div className="space-y-3">
          {relatedArticles.map(article => (
            <a key={article.id} href="#" className="block p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{article.title}</h4>
                  <span className="text-sm text-gray-500">{article.category}</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
});

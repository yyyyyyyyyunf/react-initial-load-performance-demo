import { memo } from "react";
import { useShowComments } from "../contexts/ShowCommentsProvider";
import { useHandleCommentsToggle } from "../contexts/HandleCommentsToggleProvider";
import { comments } from "../constants/commentsData";

export const Comments = memo(() => {
  const showComments = useShowComments();
  const handleCommentsToggle = useHandleCommentsToggle();
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">评论 ({comments.length})</h3>
        <button
          onClick={handleCommentsToggle}
          className="text-blue-600 text-sm hover:text-blue-700"
        >
          {showComments ? '隐藏' : '显示'}评论
        </button>
      </div>
      
      {showComments && (
        <>
          {/* 评论输入框 */}
          <div className="mb-6">
            <textarea
              placeholder="写下你的评论..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end mt-2">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                发表评论
              </button>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="space-y-6">
            {comments.map(comment => (
              <div key={comment.id} className="flex space-x-4">
                <img 
                  src={`https://images.unsplash.com/photo-${comment.id === 1 ? '1507003211169-0a1dd7228f2d' : comment.id === 2 ? '1494790108755-2616b612b786' : comment.id === 3 ? '1500648767791-00dcc994a43e' : comment.id === 4 ? '1438761681033-6461ffad8d80' : '1472099645785-5658abf4ff4e'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
                  alt={comment.author}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-gray-900">{comment.author}</span>
                      <span className="text-sm text-gray-500">{comment.time}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm">
                    <button className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span>{comment.likes}</span>
                    </button>
                    <button className="text-gray-600 hover:text-blue-600">回复</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
});

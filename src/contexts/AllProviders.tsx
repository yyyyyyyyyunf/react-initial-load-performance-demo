import { ReactNode, useState, useCallback } from "react";
import { useLatestValueRef } from "../hooks/useLatestValueRef";
import { ShowCommentsProvider } from "./ShowCommentsProvider";
import { ShowSidebarProvider } from "./ShowSidebarProvider";
import { SearchQueryProvider } from "./SearchQueryProvider";
import { LikesProvider } from "./LikesProvider";
import { IsLikedProvider } from "./IsLikedProvider";
import { IsBookmarkedProvider } from "./IsBookmarkedProvider";
import { HandleLikeProvider } from "./HandleLikeProvider";
import { HandleBookmarkProvider } from "./HandleBookmarkProvider";
import { HandleShareProvider } from "./HandleShareProvider";
import { HandleCommentsToggleProvider } from "./HandleCommentsToggleProvider";
import { HandleSidebarToggleProvider } from "./HandleSidebarToggleProvider";
import { HandleSearchChangeProvider } from "./HandleSearchChangeProvider";

interface AllProvidersProps {
  children: ReactNode;
}

export const AllProviders = ({ children }: AllProvidersProps) => {
  // 统一管理所有状态
  const [showComments, setShowComments] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [likes, setLikes] = useState(128);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // 使用 ref 保存最新的 isLiked 值
  const isLikedRef = useLatestValueRef(isLiked);

  // 统一管理所有 actions
  const handleLike = useCallback(() => {
    const currentIsLiked = isLikedRef.current;
    setLikes(prev => prev + (currentIsLiked ? -1 : 1));
    setIsLiked(!currentIsLiked);
  }, []);

  const handleBookmark = useCallback(() => {
    setIsBookmarked(prev => !prev);
  }, []);

  const handleShare = useCallback(() => {
    alert("分享功能：可以分享到微信、微博、Twitter 等社交平台");
  }, []);

  const handleCommentsToggle = useCallback(() => {
    setShowComments(prev => !prev);
  }, []);

  const handleSidebarToggle = useCallback(() => {
    setShowSidebar(prev => !prev);
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return (
    <ShowCommentsProvider value={showComments}>
      <ShowSidebarProvider value={showSidebar}>
        <SearchQueryProvider value={searchQuery}>
          <LikesProvider value={likes}>
            <IsLikedProvider value={isLiked}>
              <IsBookmarkedProvider value={isBookmarked}>
                <HandleLikeProvider value={handleLike}>
                  <HandleBookmarkProvider value={handleBookmark}>
                    <HandleShareProvider value={handleShare}>
                      <HandleCommentsToggleProvider value={handleCommentsToggle}>
                        <HandleSidebarToggleProvider value={handleSidebarToggle}>
                          <HandleSearchChangeProvider value={handleSearchChange}>
                            {children}
                          </HandleSearchChangeProvider>
                        </HandleSidebarToggleProvider>
                      </HandleCommentsToggleProvider>
                    </HandleShareProvider>
                  </HandleBookmarkProvider>
                </HandleLikeProvider>
              </IsBookmarkedProvider>
            </IsLikedProvider>
          </LikesProvider>
        </SearchQueryProvider>
      </ShowSidebarProvider>
    </ShowCommentsProvider>
  );
};

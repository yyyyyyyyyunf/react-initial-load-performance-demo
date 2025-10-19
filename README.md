# Initial Load Performance Demo

这是一个用于演示初始加载性能优化的独立项目，使用功能丰富的博客文章页面作为示例。

## 项目特性

- ✨ 功能丰富的博客界面（搜索、标签、评论、侧边栏等）
- 🚀 基于 React 18 + TypeScript + Vite
- 🎨 使用 Tailwind CSS 进行样式设计
- ⚡ 包含性能优化演示（缓存、ETag 等）
- 📱 响应式设计，支持移动端

## 快速开始

### 1. 安装依赖

```bash
pnpm install
# 或
npm install
```

### 2. 启动应用

一键构建并启动服务器：

```bash
pnpm run dev
# 或
npm run dev
```

### 3. 访问应用

在浏览器中打开：http://localhost:3000

---

### 手动步骤（可选）

如果你想分别执行构建和启动：

```bash
# 构建项目
pnpm run build
# 或
npm run build

# 启动服务器
pnpm run start
# 或
npm run start
```

## 项目结构

```
initial-load-performance/
├── src/
│   ├── components/           # 组件目录
│   │   ├── BlogContent.tsx  # 博客内容主组件
│   │   ├── Header.tsx       # 导航栏组件
│   │   ├── Article.tsx      # 文章组件
│   │   ├── Comments.tsx     # 评论组件
│   │   ├── Sidebar.tsx      # 侧边栏组件
│   │   └── Footer.tsx       # 页脚组件
│   ├── contexts/            # 独立的 Context Provider
│   │   ├── AllProviders.tsx # 统一状态管理 + 组合所有 Provider
│   │   ├── ShowCommentsProvider.tsx # 评论显示状态
│   │   ├── ShowSidebarProvider.tsx # 侧边栏显示状态
│   │   ├── SearchQueryProvider.tsx # 搜索查询状态
│   │   ├── LikesProvider.tsx # 点赞数状态
│   │   ├── IsLikedProvider.tsx # 点赞状态
│   │   ├── IsBookmarkedProvider.tsx # 收藏状态
│   │   ├── HandleLikeProvider.tsx # 点赞操作
│   │   ├── HandleBookmarkProvider.tsx # 收藏操作
│   │   ├── HandleShareProvider.tsx # 分享操作
│   │   ├── HandleCommentsToggleProvider.tsx # 评论切换操作
│   │   ├── HandleSidebarToggleProvider.tsx # 侧边栏切换操作
│   │   └── HandleSearchChangeProvider.tsx # 搜索变更操作
│   ├── hooks/               # 自定义 Hooks
│   │   └── useLatestValueRef.ts # 最新值引用 Hook
│   ├── constants/           # 常量数据
│   │   ├── blogData.ts      # 博客文章数据
│   │   ├── commentsData.ts  # 评论数据
│   │   ├── articlesData.ts  # 文章相关数据
│   │   └── tagsData.ts      # 标签数据
│   ├── utils/               # 工具函数
│   │   └── sleep.ts         # 延迟执行工具
│   ├── pages/
│   │   └── blog-post.tsx   # 博客页面组件
│   ├── App.tsx              # 应用入口
│   ├── main.tsx             # React 挂载
│   ├── index.css            # 全局样式
│   └── vite-env.d.ts        # TypeScript 类型定义
├── index.html                # HTML 模板
├── server.ts                 # 生产服务器（Hono）
├── vite.config.ts            # Vite 配置
├── tailwind.config.js        # Tailwind 配置
├── tsconfig.json             # TypeScript 配置
└── package.json              # 项目依赖
```

## 性能演示特性

1. **缓存策略**：
   - ETag 缓存验证
   - Cache-Control 头设置
   - 304 Not Modified 响应

2. **延迟模拟**：
   - 服务器响应添加 500ms 延迟
   - 模拟真实网络环境

3. **React 性能优化**：
   - 使用 `useCallback` 优化回调函数
   - 使用 `React.memo` 防止不必要的重渲染
   - 使用 `useLatestValueRef` 避免闭包陷阱和依赖问题
   - **独立 Context Provider 模式** - 每个状态和 API 都有独立的 Provider
   - **统一状态管理** - 所有状态在 `AllProviders` 中统一管理
   - **直接值传递** - 避免创建对象导致的重渲染
   - 精确重渲染控制 - 只有使用特定状态的组件才会重渲染
   - 组件拆分减少重渲染范围

4. **页面功能**：
   - 多个交互组件（点赞、收藏、评论）
   - 懒加载评论区
   - 响应式侧边栏
   - 搜索功能

## 技术栈

- React 18
- TypeScript 5
- Vite 4
- Tailwind CSS 3
- Hono (生产服务器)
- tsx (TypeScript 执行器)

## 开发说明

- 生产端口：3000
- 所有静态资源都会被构建到 `dist/` 目录
- 服务器包含性能优化演示（缓存、ETag 等）
- 支持响应式设计，适配各种设备

## License

MIT

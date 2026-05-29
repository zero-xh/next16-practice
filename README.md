# NextPro Blog 🚀

一个基于 **Next.js 16** 和 **Convex** 构建的现代化全栈博客平台。具备实时搜索、身份验证、评论系统以及优雅的 UI 设计。

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![Convex](https://img.shields.io/badge/Convex-Backend-orange?style=for-the-badge&logo=convex)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ 主要特性

- **🔐 身份验证**: 集成 [Better Auth](https://www.better-auth.com/)，支持邮箱/密码登录注册，会话管理安全可靠。
- **⚡ 实时后端**: 使用 [Convex](https://www.convex.dev/) 作为后端数据库和函数执行引擎，实现类型安全的 API 调用。
- **🔍 全文搜索**: 基于 Convex Search Indexes实现的实时博客标题和内容搜索。
- **💬 评论系统：支持用户登录后对文章进行评论，数据实时同步。
- **🎨 现代 UI**: 基于 [Shadcn/ui](https://ui.shadcn.com/) 和 [Tailwind CSS v4](https://tailwindcss.com/) 构建，支持深色/浅色模式切换。
- **📱 响应式设计**: 完美适配移动端、平板和桌面端。
- **🖼️ 图片上传**: 支持博客封面图片上传至 Convex Storage。
- **👀 实时在线状态**: 集成 `@convex-dev/presence`，显示当前正在阅读文章的用户头像。

## 🛠️ 技术栈

| 类别 | 技术 |
| :--- | :--- |
| **框架** | Next.js 16 (App Router) |
| **语言** | TypeScript |
| **后端/数据库** | Convex (Serverless Backend) |
| **身份验证** | Better Auth |
| **样式** | Tailwind CSS v4, Shadcn/ui, Radix UI |
| **表单验证** | React Hook Form, Zod |
| **状态管理** | Convex React Hooks |
| **图标** | Lucide React |
| **通知** | Sonner |

## 📦 安装与运行

### 前置要求

- Node.js 18.17 或更高版本
- npm, yarn, pnpm 或 bun
- Convex 账户

### 1. 克隆项目

```bash
git clone 
cd nextpro-blog
```

### 2. 安装依赖

```bash
npm install
# 或者
yarn install
pnpm install
```

### 3. 配置环境变量

复制 `.env.example` 文件为 `.env.local` 并填写必要的环境变量：

```bash
cp .env.example .env.local
```

你需要配置以下关键变量：
- `NEXT_PUBLIC_CONVEX_URL`: 你的 Convex 部署 URL
- `CONVEX_DEPLOYMENT`: 你的 Convex 部署 ID (用于开发环境)
- Better Auth 相关的密钥 (如果在 `.env` 中配置)

### 4. 启动 Convex 后端

在终端中运行：

```bash
npx convex dev
```

这将启动 Convex 本地开发服务器并同步数据库架构。

### 5. 启动前端开发服务器

在另一个终端窗口中运行：

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 📂 项目结构

```
my_next_blog/
├── app/                    # Next.js App Router
│   ├── (shared-layout)/    # 共享布局 (Navbar, Footer)
│   │   ├── blog/           # 博客列表和详情页
│   │   ├── create/         # 创建博客页面
│   │   └── ...
│   ├── api/                # API 路由 (Auth, etc.)
│   ├── auth/               # 登录/注册页面
│   ├── actions.ts          # Server Actions
│   └── schemas/            # Zod 验证 Schema
├── components/             # React 组件
│   ├── ui/                 # Shadcn/ui 基础组件
│   └── web/                # 业务组件 (Navbar, SearchInput, etc.)
├── convex/                 # Convex 后端代码
│   ├── posts.ts            # 博客相关函数
│   ├── comments.ts         # 评论相关函数
│   ├── presence.ts         # 在线状态函数
│   ├── schema.ts           # 数据库架构定义
│   └── _generated/         # 自动生成的类型和 API
├── lib/                    # 工具函数和配置
│   ├── auth-client.ts      # Better Auth 客户端配置
│   ├── auth-server.ts      # Better Auth 服务端配置
│   └── utils.ts            # 通用工具函数
└── public/                 # 静态资源
```

## 🚀 部署指南

### 部署 Convex 后端

```bash
npx convex deploy
```

### 部署 Next.js 前端

推荐部署到 [Vercel](https://vercel.com/)：

1. 将代码推送到 GitHub。
2. 在 Vercel 中导入项目。
3. 设置环境变量：
   - `NEXT_PUBLIC_CONVEX_URL`: 生产环境的 Convex URL
   - 其他必要的 Auth 密钥
4. 点击部署。

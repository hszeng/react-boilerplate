# Task Management - GitHub Pages 部署指南

## 项目概述

这是一个纯前端的任务管理应用，使用localStorage存储数据，可以部署到GitHub Pages。

## 主要修改

### 1. 数据存储

- 从API调用改为localStorage存储
- 保持相同的API接口，确保代码兼容性
- 包含默认的示例任务数据

### 2. 构建配置

- 添加了GitHub Pages的publicPath配置
- 配置了正确的homepage路径
- 添加了gh-pages部署脚本

### 3. 路由支持

- 添加了404.html支持客户端路由
- 配置了historyApiFallback

## 部署步骤

### 1. 修改homepage路径

在`package.json`中修改homepage字段：

```json
{
  "homepage": "https://your-username.github.io/forsyth-barr/task-management"
}
```

### 2. 构建项目

```bash
npm run build
```

### 3. 部署到GitHub Pages

```bash
npm run deploy
```

### 4. 配置GitHub Pages

1. 进入GitHub仓库设置
2. 找到Pages设置
3. 选择"Deploy from a branch"
4. 选择"gh-pages"分支
5. 保存设置

## 本地开发

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npx serve dist
```

## 功能特性

- ✅ 任务创建、编辑、删除
- ✅ 任务状态管理
- ✅ 优先级设置
- ✅ 截止日期设置
- ✅ 任务搜索和过滤
- ✅ 响应式设计
- ✅ 本地数据持久化

## 技术栈

- React 18
- TypeScript
- Webpack 5
- Styled Components
- LocalStorage API

## 注意事项

1. 数据存储在浏览器本地，清除浏览器数据会丢失任务
2. 不同浏览器/设备之间的数据不会同步
3. 应用完全离线可用
4. 无需后端服务器支持

## 故障排除

### 构建失败

- 检查Node.js版本（需要>=20.0.0）
- 确保所有依赖已安装：`npm install`

### 部署失败

- 检查homepage路径是否正确
- 确保GitHub仓库已正确配置
- 检查gh-pages分支是否创建成功

### 路由问题

- 确保404.html文件存在
- 检查GitHub Pages设置中的重定向规则

#!/bin/bash

echo "🚀 开始部署 Task Management 到 GitHub Pages..."

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在 task-management 目录下运行此脚本"
    exit 1
fi

# 检查homepage配置
if ! grep -q '"homepage"' package.json; then
    echo "❌ 错误：请在 package.json 中配置 homepage 字段"
    echo "例如：\"homepage\": \"https://your-username.github.io/forsyth-barr/task-management\""
    exit 1
fi

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建是否成功
if [ ! -d "dist" ]; then
    echo "❌ 构建失败：dist 目录不存在"
    exit 1
fi

# 部署到GitHub Pages
echo "🚀 部署到 GitHub Pages..."
npm run deploy

echo "✅ 部署完成！"
echo "📝 请确保在 GitHub 仓库设置中启用 Pages 功能"
echo "🔗 访问地址：$(grep -o '"homepage": "[^"]*"' package.json | cut -d'"' -f4)"

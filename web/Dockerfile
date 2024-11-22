# Node.js の公式イメージをベースに使用
FROM node:20

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY postcss.config.mjs ./
COPY tailwind.config.ts ./
COPY next.config.mjs ./
COPY package*.json ./
COPY tsconfig.json ./
COPY public ./public
COPY src ./src

# 依存関係をインストール
RUN npm ci

# アプリケーションのビルド（もし必要であれば）
RUN npm run build

# ポート3000番を開放
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]

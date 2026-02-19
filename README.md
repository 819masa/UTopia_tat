# UTopia 

UTopia は TypeScript で作られた簡易マッチングアプリの雛形です。
このリポジトリは学習・プロトタイプ用で、実動作する最小限のサーバーとクライアントのファイル構成、API 定義、型定義、モックデータ、README を豊富に含みます。

## 目的
- マッチングアプリの基本的なアーキテクチャを示す
- TypeScript フルスタック（サーバー + クライアント）雛形を提供する
- 開発者が機能を拡充しやすいようにファイルを多めに用意する

## 主要な機能
- ユーザー一覧取得 API
- マッチ候補の取得 API
- クライアント側でのユーザーカード表示
- プロフィールを見る / マッチを作るための簡易 UI

## ディレクトリ構成

- `src/server` — Express + TypeScript の API サーバー雛形
- `src/client` — React + TypeScript のフロントエンド雛形
- `src/shared` — サーバー・クライアントで共有する型定義
- `public` — クライアントの静的 HTML

ファイル例:
- `src/shared/types.ts` — `User`, `Profile`, `Match` の型
- `src/server/index.ts` — サーバー起点
- `src/server/routes/users.ts` — ユーザー API
- `src/server/mockData.ts` — モックユーザーデータ
- `src/client/App.tsx` — クライアントのルートコンポーネント
- `src/client/components/ProfileCard.tsx` — ユーザーカード表示コンポーネント

## 開発環境セットアップ（ローカル）

1. 依存をインストール

```bash
npm install
```

2. サーバーとクライアントを同時起動（concurrently 使用）

```bash
npm run dev
```

※ 実際に動かすには `npm install` で依存を入れてください。これは雛形で、必要に応じて `vite` や `ts-node-dev` などをグローバルに入れる必要はありません。

## API ドキュメント（雛形）

- GET `/api/users` — すべてのユーザー（モック）を返す
- GET `/api/users/:id` — 指定 ID のユーザー詳細
- GET `/api/matches/:userId` — 指定ユーザー向けのマッチ候補一覧

レスポンスは JSON（モックデータ）です。

## 型 (`src/shared/types.ts`)

主な型定義:
- `User` — 基本ユーザー情報
- `Profile` — プロフィール詳細
- `Match` — マッチ候補の情報

## 拡張アイデア
- JWT 認証、OAuth ログイン
- 画像アップロード、プロフィール編集
- マッチングアルゴリズム（距離、趣味、スコアリング）
- WebSocket によるリアルタイム通知

## 注意事項
このリポジトリは学習用・プロトタイプです。本番環境でそのまま使えるセキュリティやスケーリング対策は含みません。

---

作業を続けますか？次は `npm install` 実行や、実際にサーバーを起動して動作確認を行えます。希望があれば実行します。
# UTopia_tat
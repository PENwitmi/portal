# デザイン詳細仕様書

作成日時: 2025-07-17 04:56

## CSS設計方針

### ファイル分割
- **components.css**: 汎用的で再利用可能なUIコンポーネント（約200-250行）
  - コンテナ、グリッドシステム
  - ボタン、カード、タグ
  - アコーディオン
  - ユーティリティクラス
  - 基本アニメーション

- **style.css**: サイト固有のスタイル（約250-300行）
  - CSS変数定義
  - リセット/ベーススタイル
  - 各セクション固有のスタイル
  - このサイト特有の調整

## 1. カラーパレット

### プライマリカラー（青系グラデーション）
```css
:root {
  /* メインカラー */
  --primary-blue: #3498db;      /* HSL(204, 70%, 53%) */
  --primary-light: #5dade2;     /* HSL(204, 64%, 62%) */
  --primary-dark: #2874a6;      /* HSL(204, 61%, 40%) */
  
  /* グラデーション */
  --gradient-primary: linear-gradient(135deg, #3498db 0%, #2874a6 100%);
  --gradient-soft: linear-gradient(135deg, #5dade2 0%, #3498db 100%);
}
```

### サービス識別色
```css
:root {
  /* 各サービスのテーマカラー */
  --service-okusuri: #27ae60;   /* 緑系 - 薬学知識の成長 */
  --service-timer: #e74c3c;     /* 赤系 - 時間の重要性 */
  --service-game: #f39c12;      /* オレンジ系 - 楽しさ・活力 */
}
```

### ベースカラー
```css
:root {
  /* 背景色 */
  --bg-white: #ffffff;
  --bg-light: #f8f9fa;
  --bg-section: #f5f7fa;
  
  /* テキスト色 */
  --text-primary: #2c3e50;
  --text-secondary: #7f8c8d;
  --text-muted: #95a5a6;
  
  /* ボーダー・区切り線 */
  --border-light: #ecf0f1;
  --border-medium: #dfe6e9;
  
  /* 影 */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.12);
  --shadow-lg: 0 8px 16px rgba(0,0,0,0.16);
}
```

## 2. タイポグラフィ

### フォントファミリー
```css
:root {
  --font-primary: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### フォントサイズ（rem基準）
```css
:root {
  /* 見出し */
  --fs-h1: 2.5rem;        /* 40px */
  --fs-h2: 2rem;          /* 32px */
  --fs-h3: 1.5rem;        /* 24px */
  --fs-h4: 1.25rem;       /* 20px */
  
  /* 本文 */
  --fs-body: 1rem;        /* 16px */
  --fs-small: 0.875rem;   /* 14px */
  --fs-tiny: 0.75rem;     /* 12px */
  
  /* モバイル用（max-width: 767px） */
  --fs-h1-mobile: 2rem;   /* 32px */
  --fs-h2-mobile: 1.5rem; /* 24px */
  --fs-h3-mobile: 1.25rem;/* 20px */
}
```

### フォントウェイト
```css
:root {
  --fw-normal: 400;
  --fw-medium: 500;
  --fw-bold: 700;
}
```

### 行間
```css
:root {
  --lh-tight: 1.4;
  --lh-normal: 1.6;
  --lh-relaxed: 1.8;
}
```

## 3. レイアウト仕様

### コンテナ
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 24px;
  }
}
```

### グリッドシステム
```css
.grid {
  display: grid;
  gap: 24px;
}

/* デスクトップ: 3カラム */
@media (min-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* タブレット: 2カラム */
@media (min-width: 768px) and (max-width: 1023px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* モバイル: 1カラム */
@media (max-width: 767px) {
  .grid-3 {
    grid-template-columns: 1fr;
  }
}
```

### 余白システム（8px基準）
```css
:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2rem;     /* 32px */
  --space-xl: 3rem;     /* 48px */
  --space-2xl: 4rem;    /* 64px */
  --space-3xl: 6rem;    /* 96px */
}
```

## 4. コンポーネントデザイン

### ボタン
```css
.button {
  /* 基本スタイル */
  display: inline-block;
  padding: 12px 32px;
  font-size: var(--fs-body);
  font-weight: var(--fw-medium);
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  /* モバイル最小サイズ */
  min-height: 44px;
  min-width: 120px;
}

.button-primary {
  background: var(--gradient-primary);
  color: white;
  box-shadow: var(--shadow-md);
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### サービスカード
```css
.service-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* サービスごとのアクセントライン */
.service-card[data-service="okusuri"] {
  border-top: 4px solid var(--service-okusuri);
}

.service-card[data-service="timer"] {
  border-top: 4px solid var(--service-timer);
}

.service-card[data-service="game"] {
  border-top: 4px solid var(--service-game);
}
```

### お知らせアイテム
```css
.update-item {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-light);
}

.update-date {
  color: var(--text-secondary);
  font-size: var(--fs-small);
  min-width: 100px;
}

.update-tag {
  display: inline-block;
  padding: 4px 12px;
  font-size: var(--fs-tiny);
  border-radius: 4px;
  font-weight: var(--fw-medium);
}

/* タグの色分け */
.tag-okusuri {
  background: rgba(39, 174, 96, 0.1);
  color: var(--service-okusuri);
}

.tag-timer {
  background: rgba(231, 76, 60, 0.1);
  color: var(--service-timer);
}

.tag-game {
  background: rgba(243, 156, 18, 0.1);
  color: var(--service-game);
}
```

## 5. アニメーション仕様

### トランジション
```css
:root {
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

### ホバーエフェクト
- カード: translateY(-4px) + shadow変化
- ボタン: translateY(-2px) + shadow変化
- リンク: opacity(0.8)

### スクロールアニメーション
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
}
```

## 6. ブレークポイント

```css
/* モバイル（デフォルト） */
/* 〜767px */

/* タブレット */
@media (min-width: 768px) {
  /* タブレット用スタイル */
}

/* デスクトップ */
@media (min-width: 1024px) {
  /* デスクトップ用スタイル */
}

/* 大画面 */
@media (min-width: 1440px) {
  /* 大画面用の微調整 */
}
```

## 7. アクセシビリティ考慮

### フォーカススタイル
```css
:focus {
  outline: 2px solid var(--primary-blue);
  outline-offset: 2px;
}
```

### コントラスト比
- 通常テキスト: 4.5:1以上
- 大きいテキスト（18px以上）: 3:1以上
- ボタン・インタラクティブ要素: 3:1以上

### タップターゲット
- 最小サイズ: 44px × 44px
- 間隔: 最低8px
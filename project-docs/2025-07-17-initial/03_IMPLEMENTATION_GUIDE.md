# 実装ガイド

作成日時: 2025-07-17 04:56

## Phase 1: 基本構造構築（30分）

### 1.1 HTML基本構造
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>薬学生のためのサイト - 薬学学習の総合プラットフォーム</title>
    <meta name="description" content="ラクして楽しく、最短合格への近道。薬学生のための学習ツールを集めた総合プラットフォーム">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header id="hero">
        <!-- ヒーローセクション -->
    </header>
    
    <main>
        <section id="services">
            <!-- サービス紹介 -->
        </section>
        
        <section id="updates">
            <!-- お知らせ -->
        </section>
    </main>
    
    <footer>
        <!-- フッター -->
    </footer>
    
    <script src="assets/js/main.js"></script>
</body>
</html>
```

### 1.2 CSS基盤設定
```css
/* リセットCSS */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* CSS変数定義 */
:root {
    /* カラーパレット（02_DESIGN_SPECIFICATIONS.mdから） */
    /* タイポグラフィ（02_DESIGN_SPECIFICATIONS.mdから） */
    /* 余白システム（02_DESIGN_SPECIFICATIONS.mdから） */
}

/* ベーススタイル */
body {
    font-family: var(--font-primary);
    font-size: var(--fs-body);
    line-height: var(--lh-normal);
    color: var(--text-primary);
    background-color: var(--bg-white);
}

/* ユーティリティクラス */
.container { /* 定義済み */ }
.grid { /* 定義済み */ }
```

## Phase 2: セクション実装（60分）

### 2.1 ヒーローセクション（20分）
```html
<header id="hero" class="hero">
    <div class="hero-bg"></div>
    <div class="container hero-content">
        <h1 class="hero-title">薬学生のためのサイト</h1>
        <p class="hero-subtitle">薬学学習の総合プラットフォーム</p>
        <p class="hero-catch">ラクして楽しく、最短合格への近道</p>
        <p class="hero-sub-catch">あなたの学習スタイルに合わせた、多彩な学習ツール</p>
        <div class="scroll-indicator">
            <span>スクロール</span>
            <svg><!-- 下向き矢印 --></svg>
        </div>
    </div>
</header>
```

```css
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    inset: 0;
    background: var(--gradient-primary);
    opacity: 0.95;
}

.hero-content {
    text-align: center;
    color: white;
    position: relative;
    z-index: 1;
}

.hero-title {
    font-size: var(--fs-h1);
    font-weight: var(--fw-bold);
    margin-bottom: var(--space-sm);
}

/* アニメーション */
.hero-content > * {
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
}

.hero-content > *:nth-child(2) { animation-delay: 0.2s; }
.hero-content > *:nth-child(3) { animation-delay: 0.4s; }
.hero-content > *:nth-child(4) { animation-delay: 0.6s; }
```

### 2.2 サービスカード（30分）

```html
<section id="services" class="services">
    <div class="container">
        <h2 class="section-title">学習ツール</h2>
        <div class="grid grid-3">
            <!-- OkusuriNote -->
            <article class="service-card" data-service="okusuri">
                <h3 class="service-name">OkusuriNote</h3>
                <p class="service-subtitle">薬剤図鑑</p>
                <p class="service-desc">
                    24種類の重要薬剤を詳しく解説。
                    感動的な開発ストーリーと共に、
                    薬の知識を深く理解できます。
                </p>
                <ul class="service-features">
                    <li>薬剤の詳細解説</li>
                    <li>開発ストーリー</li>
                    <li>循環器オーケストラ理論</li>
                </ul>
                <p class="service-scene">
                    こんな時に：じっくり薬の知識を深めたい時
                </p>
                <a href="/okusuri_note/" class="button button-primary">
                    アクセスする
                </a>
            </article>
            
            <!-- 同様にPharmTimer、薬理マスターも実装 -->
        </div>
    </div>
</section>
```

### 2.3 お知らせセクション（10分）

```html
<section id="updates" class="updates">
    <div class="container">
        <h2 class="section-title">お知らせ</h2>
        <div class="updates-list">
            <!-- 最新3件表示 -->
            <div id="recent-updates"></div>
            
            <!-- アコーディオン -->
            <details class="updates-accordion">
                <summary>過去の更新を見る</summary>
                <div id="past-updates"></div>
            </details>
        </div>
    </div>
</section>
```

## Phase 3: レスポンシブ対応（30分）

### 3.1 モバイル最適化チェックリスト

- [ ] viewport metaタグ設定
- [ ] タップターゲット44px以上
- [ ] 横スクロール防止
- [ ] フォントサイズ調整
- [ ] グリッドレイアウト変更
- [ ] 余白調整

### 3.2 主要なレスポンシブ対応

```css
/* モバイル用調整 */
@media (max-width: 767px) {
    /* ヒーローセクション */
    .hero-title {
        font-size: var(--fs-h1-mobile);
    }
    
    /* サービスカード */
    .service-card {
        padding: 24px;
    }
    
    /* ボタン */
    .button {
        width: 100%;
        display: block;
    }
}
```

## Phase 4: インタラクション実装（30分）

### 4.1 JavaScript機能リスト

1. **お知らせデータの読み込みと表示**
   ```javascript
   async function loadUpdates() {
       const response = await fetch('data/updates.json');
       const data = await response.json();
       displayUpdates(data.updates);
   }
   ```

2. **スムーズスクロール**
   ```javascript
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', smoothScroll);
   });
   ```

3. **アコーディオン制御**
   ```javascript
   const accordion = document.querySelector('.updates-accordion');
   accordion.addEventListener('toggle', handleAccordionToggle);
   ```

4. **スクロールアニメーション**
   ```javascript
   const observerOptions = {
       threshold: 0.1,
       rootMargin: '0px 0px -50px 0px'
   };
   
   const observer = new IntersectionObserver(handleIntersection, observerOptions);
   ```

## Phase 5: 最終調整（30分）

### 5.1 パフォーマンス最適化

- [ ] CSSの最小化
- [ ] 不要なコードの削除
- [ ] 画像の最適化（将来的に）
- [ ] font-displayの設定

### 5.2 SEO最適化

```html
<!-- 構造化データ -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "薬学生のためのサイト",
    "description": "薬学学習の総合プラットフォーム",
    "url": "https://pharm.nishimoto-learning.jp/"
}
</script>

<!-- OGPタグ -->
<meta property="og:title" content="薬学生のためのサイト">
<meta property="og:description" content="ラクして楽しく、最短合格への近道">
<meta property="og:type" content="website">
<meta property="og:url" content="https://pharm.nishimoto-learning.jp/">
```

### 5.3 アクセシビリティチェック

- [ ] 見出しレベルの階層構造
- [ ] altテキストの設定
- [ ] フォーカス順序
- [ ] ARIAラベル（必要に応じて）
- [ ] キーボード操作テスト

### 5.4 ブラウザテスト

テスト環境：
- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- iPhone Safari
- Android Chrome

## 6. デプロイ準備

### 6.1 vercel.json作成

```json
{
    "rewrites": [
        {
            "source": "/lp/:path*",
            "destination": "https://pharm-tutor-lp.vercel.app/:path*"
        },
        {
            "source": "/okusuri_note/:path*",
            "destination": "https://penwitmi.github.io/okusuri_note/:path*"
        },
        {
            "source": "/timer/:path*",
            "destination": "https://pharm-timer.vercel.app/:path*"
        },
        {
            "source": "/game/:path*",
            "destination": "https://pharm-game.vercel.app/:path*"
        }
    ]
}
```

### 6.2 デプロイチェックリスト

- [ ] 全ファイルのコミット
- [ ] GitHubへのプッシュ
- [ ] Vercelプロジェクト作成
- [ ] ドメイン設定
- [ ] rewrite動作確認

## 7. 完成確認項目

- [ ] 全セクションの表示確認
- [ ] レスポンシブ動作確認
- [ ] リンク動作確認
- [ ] アニメーション動作確認
- [ ] お知らせ表示確認
- [ ] パフォーマンス測定
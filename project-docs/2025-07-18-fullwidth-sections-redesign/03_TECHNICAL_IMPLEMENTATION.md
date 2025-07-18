# 技術実装ガイド - フルワイドセクション

作成日時: 2025-07-18 4:10
実装の具体的なコード例とガイドライン

## 1. HTML構造の変更

### 現在の構造（削除予定）
```html
<section id="services" class="services">
  <div class="container">
    <div class="grid grid-3 services-grid">
      <article class="service-card">...</article>
      <article class="service-card">...</article>
      <article class="service-card">...</article>
    </div>
  </div>
</section>
```

### 新しい構造
```html
<!-- サクッとお薬ノート -->
<section id="service-okusuri" class="service-section service-okusuri">
  <div class="container">
    <div class="service-layout">
      <div class="service-content">
        <div class="service-icon-wrapper">
          <svg class="service-icon">...</svg>
        </div>
        <h2 class="service-title">サクッとお薬ノート</h2>
        <p class="service-subtitle">包括的な薬剤図鑑</p>
        <p class="service-description">
          暗記が苦手でも薬が覚えられる。
          「なぜこの薬を使うのか」が分かるから、
          国試本番で応用問題にも対応できます。
        </p>
        <ul class="service-benefits">
          <li><span class="benefit-icon">✓</span>忘れない知識が身につく</li>
          <li><span class="benefit-icon">✓</span>薬の使い分けが分かる</li>
          <li><span class="benefit-icon">✓</span>実習で役立つ実践知識</li>
        </ul>
        <div class="service-cta">
          <p class="cta-label">じっくり薬の知識を深めたい時</p>
          <a href="https://pharm.nishimoto-learning.jp/okusuri_note/" 
             class="button button-primary button-large">
            アクセスする
            <svg class="button-arrow">...</svg>
          </a>
        </div>
      </div>
      <div class="service-visuals">
        <div class="visual-pc">
          <img src="assets/img/services/okusuri_note_feature_pc.png" 
               alt="お薬ノートのPC画面"
               loading="lazy"
               class="service-screenshot">
        </div>
      </div>
    </div>
  </div>
  <div class="section-decoration okusuri-decoration"></div>
</section>

<!-- 誰でも薬理マスター -->
<section id="service-game" class="service-section service-game">
  <div class="container">
    <div class="service-layout service-layout-reverse">
      <div class="service-visuals">
        <div class="visual-mobile-group">
          <img src="assets/img/services/yakuri_master_quiz.jpg" 
               alt="薬理マスターのクイズ画面"
               loading="lazy"
               class="service-screenshot mobile-screen mobile-screen-1">
          <img src="assets/img/services/yakuri_master_quiz2.jpg" 
               alt="薬理マスターの結果画面"
               loading="lazy"
               class="service-screenshot mobile-screen mobile-screen-2">
        </div>
      </div>
      <div class="service-content">
        <!-- 同様の構造 -->
      </div>
    </div>
  </div>
  <div class="section-decoration game-decoration"></div>
</section>

<!-- 薬剤師国試勉強タイマー -->
<section id="service-timer" class="service-section service-timer">
  <!-- お薬ノートと同様の構造 -->
</section>
```

## 2. CSS実装

### 新しいスタイルファイル構造
```
assets/css/
├── style.css (既存 - 修正)
├── components.css (既存 - 一部削除)
└── fullwidth-sections.css (新規)
```

### fullwidth-sections.css の内容
```css
/* ========================================
   フルワイドセクション共通スタイル
   ======================================== */

.service-section {
  min-height: 100vh;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.service-layout {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 60px;
  align-items: center;
  min-height: 600px;
}

.service-layout-reverse {
  grid-template-columns: 60% 40%;
}

/* コンテンツスタイル */
.service-content {
  animation: slideInLeft 0.8s ease forwards;
  opacity: 0;
}

.service-content.visible {
  opacity: 1;
}

.service-icon-wrapper {
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
  color: var(--service-color);
  opacity: 0.9;
}

.service-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.service-subtitle {
  font-size: 1.125rem;
  color: var(--service-color);
  margin-bottom: 24px;
  font-weight: 500;
}

.service-description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.service-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}

.service-benefits li {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  font-size: 1.05rem;
}

.benefit-icon {
  color: var(--service-color);
  font-weight: 700;
  font-size: 1.2rem;
}

/* ビジュアルスタイル */
.service-visuals {
  position: relative;
  animation: slideInRight 0.8s ease forwards;
  opacity: 0;
}

.service-visuals.visible {
  opacity: 1;
}

.visual-pc {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}

.service-screenshot {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-screenshot:hover {
  transform: scale(1.02);
  box-shadow: 0 30px 60px rgba(0,0,0,0.2);
}

/* モバイル画面グループ */
.visual-mobile-group {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.mobile-screen {
  width: 280px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  border: 8px solid #1a1a1a;
}

.mobile-screen-1 {
  transform: rotate(-5deg) translateY(-20px);
}

.mobile-screen-2 {
  transform: rotate(5deg) translateY(20px);
}

/* ========================================
   各サービスの個別スタイル
   ======================================== */

/* お薬ノート */
.service-okusuri {
  --service-color: var(--service-okusuri);
  background: linear-gradient(180deg, #e6f3ff 0%, #f0f9ff 100%);
}

.okusuri-decoration {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(5, 150, 105, 0.05) 0%, transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.05) 0%, transparent 40%);
  pointer-events: none;
}

/* 薬理マスター */
.service-game {
  --service-color: var(--service-game);
  background: linear-gradient(135deg, #fef3c7 0%, #fee2e2 100%);
}

.game-decoration {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 30%),
    radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.1) 0%, transparent 30%);
  pointer-events: none;
}

/* タイマー */
.service-timer {
  --service-color: var(--service-timer);
  background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
}

/* ========================================
   レスポンシブデザイン
   ======================================== */

@media (max-width: 1024px) {
  .service-layout,
  .service-layout-reverse {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .visual-pc {
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .service-section {
    padding: 60px 0;
    min-height: auto;
  }
  
  .service-layout {
    gap: 32px;
  }
  
  .service-title {
    font-size: 2rem;
  }
  
  .service-description {
    font-size: 1rem;
  }
  
  /* PC画面は非表示、モバイル画面を表示 */
  .visual-pc {
    display: none;
  }
  
  .visual-mobile-group {
    flex-direction: column;
    gap: 24px;
  }
  
  .mobile-screen {
    width: 90%;
    max-width: 300px;
    transform: none !important;
  }
  
  /* モバイルではコンテンツを先に表示 */
  .service-content {
    order: -1;
  }
}

/* ========================================
   アニメーション定義
   ======================================== */

@keyframes slideInLeft {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

## 3. JavaScript実装

### main.js への追加
```javascript
// フルワイドセクションのアニメーション
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer設定
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.service-content').classList.add('visible');
        entry.target.querySelector('.service-visuals').classList.add('visible');
      }
    });
  }, observerOptions);
  
  // 各セクションを監視
  document.querySelectorAll('.service-section').forEach(section => {
    observer.observe(section);
  });
  
  // パララックス効果（オプション）
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    document.querySelectorAll('.section-decoration').forEach(decoration => {
      const speed = 0.5;
      decoration.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
});
```

## 4. 移行手順

### Step 1: バックアップ
```bash
# 現在のファイルをバックアップ
cp index.html index.html.backup
cp assets/css/style.css assets/css/style.css.backup
```

### Step 2: HTML更新
1. 現在のservicesセクションをコメントアウト
2. 新しいフルワイドセクション構造を追加
3. 画像パスの確認と調整

### Step 3: CSS追加
1. fullwidth-sections.cssを作成
2. index.htmlにリンクを追加
3. 既存のservice-card関連スタイルを無効化

### Step 4: テスト
1. 各ブレークポイントでの表示確認
2. 画像の読み込み確認
3. アニメーションの動作確認

## 5. 注意点

### パフォーマンス
- 画像は必ずloading="lazy"を設定
- 適切な画像圧縮を実施
- CSSアニメーションはGPU加速を活用

### アクセシビリティ
- すべての画像に適切なalt属性
- フォーカス可能な要素の視覚的フィードバック
- アニメーションの無効化オプション

### SEO
- セクションIDを維持（ナビゲーション用）
- 見出しタグの階層を保持
- 画像の適切な命名規則
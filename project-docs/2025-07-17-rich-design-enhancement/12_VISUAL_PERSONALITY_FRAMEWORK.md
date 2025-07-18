# Visual Personality Framework - 3つの個性の視覚的表現

作成日時: 2025-07-17 10:55
コンセプト: 各サービスに「視覚的な人格」を与える

## 1. 基本哲学：Three Personalities, One Family

### 視覚的な家族構成
```
父: OkusuriNote（信頼・威厳・知識）
母: PharmTimer（支援・見守り・励まし）
子: 薬理マスター（元気・好奇心・成長）
```

この「家族」が一つの家（ポータル）に住んでいるイメージ。

## 2. ヒーローセクションの再構築

### 空の時間変化を表現（CSSのみ）
```css
/* 朝から夜への自然なグラデーション */
.hero {
  min-height: 90vh;
  background: 
    /* 朝の空 */
    linear-gradient(
      180deg,
      #87CEEB 0%,      /* スカイブルー */
      #98D8E8 20%,     /* 明るい水色 */
      #FDB813 80%,     /* 朝日のオレンジ */
      #FD7E14 100%     /* 地平線のオレンジ */
    );
  position: relative;
}

/* 時間の概念を静的に表現 */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    /* 昼の太陽 */
    radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 30%),
    /* 夕方の雲 */
    radial-gradient(ellipse at 20% 70%, rgba(255, 182, 193, 0.2) 0%, transparent 40%),
    /* 夜の星 */
    radial-gradient(2px at 10% 20%, white 0%, transparent 50%),
    radial-gradient(2px at 80% 10%, white 0%, transparent 50%),
    radial-gradient(1px at 90% 30%, white 0%, transparent 50%);
}
```

## 3. サービスカードの「顔」デザイン

### カードを人格として表現
```css
/* 共通の顔構造 */
.service-card {
  background: white;
  border-radius: 20px;
  padding: 40px 32px 32px;
  position: relative;
  min-height: 400px;
}

/* 各サービスの「表情」 */
.service-personality {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* OkusuriNote - 威厳ある父 */
[data-service="okusuri"] {
  background: linear-gradient(to bottom, #f0f9ff 0%, white 100%);
  border: 2px solid #e0f2fe;
}

[data-service="okusuri"] .service-personality {
  background: linear-gradient(135deg, #1e3a8a, #3730a3);
  color: white;
  font-family: serif;
  font-weight: bold;
}

[data-service="okusuri"] .service-personality::after {
  content: '本';
  font-size: 1.5rem;
}

/* PharmTimer - 優しい母 */
[data-service="timer"] {
  background: linear-gradient(to bottom, #fef3c7 0%, white 100%);
  border: 2px solid #fde68a;
}

[data-service="timer"] .service-personality {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
}

[data-service="timer"] .service-personality::after {
  content: '⏰';
  font-size: 1.8rem;
}

/* 薬理マスター - 元気な子 */
[data-service="game"] {
  background: linear-gradient(to bottom, #fce7f3 0%, white 100%);
  border: 2px solid #fbcfe8;
  overflow: hidden;
}

[data-service="game"] .service-personality {
  background: linear-gradient(135deg, #ec4899, #f43f5e);
  color: white;
  animation: happyBounce 4s ease-in-out infinite;
}

[data-service="game"] .service-personality::after {
  content: '😊';
  font-size: 1.8rem;
}

@keyframes happyBounce {
  0%, 100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
  25% { transform: translateX(-50%) translateY(-5px) rotate(-5deg); }
  75% { transform: translateX(-50%) translateY(-5px) rotate(5deg); }
}

/* カード内の装飾パターン */
[data-service="game"]::before {
  content: '';
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: 
    radial-gradient(circle, rgba(236, 72, 153, 0.1) 20%, transparent 20%),
    radial-gradient(circle, rgba(244, 63, 94, 0.1) 20%, transparent 20%);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  border-radius: 50%;
  transform: rotate(45deg);
}
```

## 4. インフォグラフィック的な特徴表示

### 視覚的な情報表現
```css
/* OkusuriNote - 本棚メタファー */
[data-service="okusuri"] .service-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 20px 0;
}

[data-service="okusuri"] .service-features li {
  background: linear-gradient(to bottom, #3730a3 0%, #1e3a8a 100%);
  color: white;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  list-style: none;
  transform: perspective(100px) rotateY(-5deg);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

/* PharmTimer - 時計の文字盤 */
[data-service="timer"] .service-features {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 20px auto;
  border: 3px solid #f59e0b;
  border-radius: 50%;
}

[data-service="timer"] .service-features li {
  position: absolute;
  width: 80%;
  text-align: center;
  font-size: 0.75rem;
  list-style: none;
  transform-origin: center;
}

[data-service="timer"] .service-features li:nth-child(1) {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

[data-service="timer"] .service-features li:nth-child(2) {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

[data-service="timer"] .service-features li:nth-child(3) {
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  writing-mode: vertical-rl;
}

/* 薬理マスター - ゲームのステージ */
[data-service="game"] .service-features {
  display: flex;
  gap: 4px;
  justify-content: center;
  margin: 20px 0;
}

[data-service="game"] .service-features li {
  width: 60px;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  list-style: none;
  position: relative;
  overflow: hidden;
}

[data-service="game"] .service-features li::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #ec4899, #f43f5e);
  border-radius: 4px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

[data-service="game"] .service-features li:nth-child(1)::before {
  transform: scaleX(1);
}

[data-service="game"] .service-features li:nth-child(2)::before {
  transform: scaleX(0.7);
}

[data-service="game"] .service-features li:nth-child(3)::before {
  transform: scaleX(0.3);
}
```

## 5. ボタンの個性表現

```css
/* OkusuriNote - 辞書の背表紙 */
[data-service="okusuri"] .button {
  background: linear-gradient(to right, #1e3a8a 0%, #1e3a8a 5%, #3730a3 5%, #3730a3 95%, #1e3a8a 95%, #1e3a8a 100%);
  color: white;
  padding: 14px 32px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* PharmTimer - デジタル時計風 */
[data-service="timer"] .button {
  background: #000;
  color: #0f0;
  padding: 12px 28px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  border: 2px solid #333;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
  text-shadow: 0 0 5px #0f0;
}

/* 薬理マスター - ゲームのスタートボタン */
[data-service="game"] .button {
  background: linear-gradient(to bottom, #f43f5e 0%, #ec4899 50%, #f43f5e 100%);
  color: white;
  padding: 16px 40px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  box-shadow: 
    0 4px 0 #be123c,
    0 8px 15px rgba(236, 72, 153, 0.4);
  transform: translateY(-2px);
  position: relative;
}

[data-service="game"] .button:active {
  transform: translateY(0);
  box-shadow: 
    0 2px 0 #be123c,
    0 4px 8px rgba(236, 72, 153, 0.3);
}
```

## 6. 空間デザインの工夫

### セクション間の視覚的つながり
```css
/* 波のような区切り線 */
.section-divider {
  height: 100px;
  position: relative;
  overflow: hidden;
}

.section-divider svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
}

/* 各セクションに異なる波形 */
.wave-professional {
  fill: #e0f2fe;
}

.wave-balanced {
  fill: #fef3c7;
}

.wave-playful {
  fill: #fce7f3;
}
```

## 7. レイアウトの動的感（静的に表現）

### カードの配置に遊び
```css
/* デスクトップでカードを少しずらす */
@media (min-width: 1024px) {
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    padding: 60px 0;
  }
  
  .service-card:nth-child(1) {
    transform: translateY(0);
  }
  
  .service-card:nth-child(2) {
    transform: translateY(20px);
  }
  
  .service-card:nth-child(3) {
    transform: translateY(40px);
  }
}
```

## 結論

この「Visual Personality Framework」は：

1. **各サービスに視覚的な人格を付与**
2. **家族のメタファーで統一感を演出**
3. **純粋にCSSで実現可能**
4. **JavaScriptや架空データ不要**
5. **医療の信頼感と遊び心の両立**

見た人が「それぞれ個性があって面白い」と感じつつ、「でも統一感があって信頼できる」と思えるデザインです。
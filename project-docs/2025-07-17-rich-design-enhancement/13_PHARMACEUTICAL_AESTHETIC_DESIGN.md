# Pharmaceutical Aesthetic Design - 薬学の美学

作成日時: 2025-07-17 10:55
コンセプト: 薬学の視覚的要素を抽象化したモダンデザイン

## 1. デザインインスピレーション：薬学の美しさ

### 薬学から抽出した視覚要素
- **カプセルの形状**: 楕円、分割された色彩
- **錠剤の質感**: マット、光沢、刻印
- **化学構造式**: 六角形、結合線、対称性
- **薬瓶**: 透明感、ラベル、グラデーション
- **白衣**: 清潔感、プロフェッショナリズム

## 2. カプセルモチーフのヒーローデザイン

```css
/* ヒーローをカプセル型に */
.hero {
  min-height: 85vh;
  background: white;
  position: relative;
  overflow: hidden;
}

/* 巨大なカプセル背景 */
.hero-capsule {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-15deg);
  width: 120%;
  height: 70%;
  border-radius: 50vh;
  overflow: hidden;
  opacity: 0.95;
}

.hero-capsule::before,
.hero-capsule::after {
  content: '';
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
}

.hero-capsule::before {
  left: 0;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.hero-capsule::after {
  right: 0;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

/* カプセルの分割線 */
.hero-capsule-divider {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: white;
  transform: translateX(-50%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

/* テキストは前面に */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
```

## 3. 化学構造式をモチーフにしたレイアウト

```css
/* セクション背景に化学構造パターン */
.chemical-pattern {
  position: relative;
  background: #fafafa;
}

.chemical-pattern::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="%23e5e7eb" stroke-width="0.5"/><line x1="50" y1="10" x2="50" y2="90" stroke="%23e5e7eb" stroke-width="0.5"/><line x1="15" y1="30" x2="85" y2="70" stroke="%23e5e7eb" stroke-width="0.5"/><line x1="85" y1="30" x2="15" y2="70" stroke="%23e5e7eb" stroke-width="0.5"/></svg>');
  opacity: 0.5;
}

/* サービスカードを六角形風に */
.service-hexagon {
  position: relative;
  background: white;
  padding: 40px;
  margin: 30px 0;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.service-hexagon::before,
.service-hexagon::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  background: inherit;
  transform: rotate(45deg);
  box-shadow: inherit;
}

.service-hexagon::before {
  top: -15px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
}

.service-hexagon::after {
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
}
```

## 4. 錠剤風のボタンデザイン

```css
/* ベース錠剤スタイル */
.pill-button {
  display: inline-block;
  padding: 14px 40px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* 刻印効果 */
.pill-button::before {
  content: attr(data-text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: bold;
  opacity: 0.05;
  pointer-events: none;
}

/* OkusuriNote - マット仕上げ */
[data-service="okusuri"] .pill-button {
  background: linear-gradient(145deg, #2563eb, #1d4ed8);
  color: white;
  box-shadow: 
    inset 0 2px 4px rgba(255, 255, 255, 0.2),
    inset 0 -2px 4px rgba(0, 0, 0, 0.2),
    0 4px 8px rgba(37, 99, 235, 0.3);
}

/* PharmTimer - 光沢仕上げ */
[data-service="timer"] .pill-button {
  background: linear-gradient(to bottom, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
  color: white;
  box-shadow: 
    inset 0 2px 4px rgba(255, 255, 255, 0.5),
    0 4px 8px rgba(245, 158, 11, 0.3);
  position: relative;
}

[data-service="timer"] .pill-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s ease;
}

[data-service="timer"] .pill-button:hover::after {
  left: 100%;
}

/* 薬理マスター - カラフルコーティング */
[data-service="game"] .pill-button {
  background: linear-gradient(45deg, #ec4899, #f43f5e, #f97316, #fbbf24);
  background-size: 300% 300%;
  color: white;
  animation: rainbowShift 5s ease infinite;
  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
}

@keyframes rainbowShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

## 5. 薬瓶をモチーフにしたカード

```css
/* カードを薬瓶のように */
.medicine-bottle-card {
  position: relative;
  background: white;
  border-radius: 8px 8px 16px 16px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* ボトルキャップ */
.bottle-cap {
  height: 40px;
  background: linear-gradient(to bottom, #374151 0%, #1f2937 100%);
  position: relative;
}

.bottle-cap::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  height: 20px;
  background: inherit;
  clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
}

/* ラベル部分 */
.bottle-label {
  padding: 30px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
  backdrop-filter: blur(10px);
  position: relative;
}

/* 薬剤情報風の装飾 */
.bottle-label::before {
  content: 'Rx';
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #e5e7eb;
  font-style: italic;
}

/* バーコード風の装飾 */
.bottle-barcode {
  position: absolute;
  bottom: 20px;
  left: 30px;
  right: 30px;
  height: 30px;
  background: repeating-linear-gradient(
    90deg,
    #000 0px,
    #000 2px,
    transparent 2px,
    transparent 4px,
    #000 4px,
    #000 5px,
    transparent 5px,
    transparent 8px
  );
  opacity: 0.1;
}
```

## 6. 白衣のプロフェッショナリズム

```css
/* フッターを白衣の清潔感で表現 */
.footer {
  background: linear-gradient(to bottom, #f9fafb 0%, #f3f4f6 100%);
  border-top: 1px solid #e5e7eb;
  position: relative;
  padding: 60px 0 40px;
}

/* 白衣の襟元をイメージ */
.footer::before {
  content: '';
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 60px;
  background: white;
  border-radius: 0 0 100px 100px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

/* ステッチ風の装飾 */
.footer::after {
  content: '';
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 1px;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 10px,
    #e5e7eb 10px,
    #e5e7eb 20px
  );
}
```

## 7. インタラクティブな視覚効果（CSSのみ）

```css
/* ホバー時の化学反応効果 */
.service-card {
  position: relative;
  transition: all 0.3s ease;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, currentColor 0%, transparent 70%);
  opacity: 0.1;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  pointer-events: none;
}

.service-card:hover::before {
  width: 300%;
  height: 300%;
}

/* フォーカス時の処方箋効果 */
.button:focus {
  outline: none;
  box-shadow: 
    0 0 0 3px white,
    0 0 0 6px currentColor,
    0 0 20px currentColor;
}
```

## 実装の要点

1. **薬学要素の抽象化**: 直接的すぎない表現
2. **モダンな解釈**: 古臭くならない工夫
3. **統一感**: 医療のプロフェッショナリズムを保持
4. **実装の簡潔性**: 複雑なJavaScript不要
5. **パフォーマンス**: 軽量なSVGとCSSのみ

この「Pharmaceutical Aesthetic」アプローチにより、薬学生が親しみを感じつつ、プロフェッショナルな印象を持つデザインが実現できます。
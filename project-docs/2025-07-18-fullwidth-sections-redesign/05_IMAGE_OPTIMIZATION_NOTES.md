# 画像最適化メモ

作成日時: 2025-07-18 09:20

## 現在の画像サイズ

```
okusuri_note_drugpage.jpg   - 449KB (OK)
okusuri_note_feature_pc.png - 428KB (OK)
timer_mobile.jpg            - 1.2MB (要最適化)
timer_pc.png               - 206KB (OK)
yakuri_master_quiz.jpg     - 358KB (OK)
yakuri_master_quiz2.jpg    - 798KB (要最適化)
```

## 推奨事項

### timer_mobile.jpg (1.2MB)
- 推奨サイズ: 300KB以下
- モバイル画面のスクリーンショットなので、品質80%程度でも十分
- 画像圧縮ツール（TinyPNG等）で最適化を推奨

### yakuri_master_quiz2.jpg (798KB)
- 推奨サイズ: 400KB以下
- 同様に品質80%程度で圧縮

## 将来的な改善案

1. **WebP形式への変換**
   - JPG/PNGより30-40%ファイルサイズ削減
   - Safariも対応済み（iOS 14以降）

2. **srcset実装**
   ```html
   <img srcset="image-small.jpg 480w,
                image-medium.jpg 768w,
                image-large.jpg 1200w"
        sizes="(max-width: 480px) 100vw,
               (max-width: 768px) 50vw,
               33vw"
        src="image-medium.jpg"
        alt="...">
   ```

3. **画像CDN利用**
   - Cloudinary、imgix等のサービスで自動最適化

## 現在の対応

loading="lazy"は全画像に実装済み。これにより初期表示は高速化されている。

## 画像詳細情報

### timer_mobile.jpg
- 解像度: 1290x2574px（高解像度）
- DPI: 216
- 推奨対応: 幅を1000px程度にリサイズ、品質80%で再エクスポート

### yakuri_master_quiz2.jpg  
- 解像度: 1290x2211px（高解像度）
- DPI: 216
- 推奨対応: 幅を1000px程度にリサイズ、品質80%で再エクスポート

## 圧縮コマンド例（ImageMagick使用時）
```bash
# timer_mobile.jpg の最適化
convert timer_mobile.jpg -resize 1000x -quality 80 timer_mobile_optimized.jpg

# yakuri_master_quiz2.jpg の最適化
convert yakuri_master_quiz2.jpg -resize 1000x -quality 80 yakuri_master_quiz2_optimized.jpg
```
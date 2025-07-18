/**
 * 薬学生のためのサイト - メインJavaScript
 * main.js
 * 作成日: 2025-07-17
 */

// DOM要素の取得
const elements = {
    recentUpdates: document.getElementById('recent-updates'),
    pastUpdates: document.getElementById('past-updates'),
    scrollIndicator: document.querySelector('.scroll-indicator'),
    serviceCards: document.querySelectorAll('.service-card'),
    sectionHeaders: document.querySelectorAll('.section-header'),
    updateItems: document.querySelectorAll('.update-item'),
    serviceSections: document.querySelectorAll('.service-section'),
    supportSection: document.querySelector('.support-section')
};

// お知らせデータの管理
const updatesManager = {
    updates: [],
    recentCount: 3,
    
    // お知らせデータを読み込み
    async loadUpdates() {
        try {
            const response = await fetch('./data/updates.json');
            if (!response.ok) throw new Error('Failed to load updates');
            const data = await response.json();
            this.updates = data.updates;
            this.displayUpdates();
        } catch (error) {
            console.error('Error loading updates:', error);
            this.displayError();
        }
    },
    
    // お知らせを表示
    displayUpdates() {
        const recent = this.updates.slice(0, this.recentCount);
        const past = this.updates.slice(this.recentCount);
        
        // 最新のお知らせ
        elements.recentUpdates.innerHTML = recent.map(update => this.createUpdateHTML(update)).join('');
        
        // 過去のお知らせ
        if (past.length > 0) {
            elements.pastUpdates.innerHTML = past.map(update => this.createUpdateHTML(update)).join('');
        } else {
            document.querySelector('.updates-accordion').style.display = 'none';
        }
        
        // アニメーション対象として登録
        this.registerUpdateAnimations();
    },
    
    // お知らせアイテムのHTML生成
    createUpdateHTML(update) {
        const tagClass = this.getTagClass(update.service);
        return `
            <article class="update-item" role="listitem">
                <time class="update-date" datetime="${update.date.replace(/\./g, '-')}">${update.date}</time>
                <div class="update-content">
                    <span class="update-tag ${tagClass}">${update.tag}</span>
                    <p class="update-text">${update.content}</p>
                </div>
            </article>
        `;
    },
    
    // サービスに応じたタグクラスを返す
    getTagClass(service) {
        const classes = {
            'okusuri': 'tag-okusuri',
            'timer': 'tag-timer',
            'game': 'tag-game',
            'portal': 'tag-portal'
        };
        return classes[service] || 'tag-portal';
    },
    
    // エラー表示
    displayError() {
        elements.recentUpdates.innerHTML = `
            <div class="no-updates">
                <p>お知らせの読み込みに失敗しました。</p>
                <p>後ほど再度お試しください。</p>
            </div>
        `;
    },
    
    // アニメーション対象として登録
    registerUpdateAnimations() {
        const updateItems = document.querySelectorAll('.update-item');
        updateItems.forEach(item => {
            scrollAnimation.observe(item);
        });
    }
};

// スムーズスクロール
const smoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    const offset = 80; // ヘッダーの高さ分のオフセット
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// スクロールアニメーション
const scrollAnimation = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // 一度表示したら監視を停止
            scrollAnimation.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// アニメーション対象の要素を監視
function setupScrollAnimations() {
    // セクションヘッダー
    elements.sectionHeaders.forEach(header => {
        scrollAnimation.observe(header);
    });
    
    // サービスカード
    elements.serviceCards.forEach(card => {
        scrollAnimation.observe(card);
    });
    
    // フルワイドサービスセクション
    elements.serviceSections.forEach(section => {
        scrollAnimation.observe(section);
    });
    
    // サポートセクション
    if (elements.supportSection) {
        scrollAnimation.observe(elements.supportSection);
    }
}

// スクロールインジケーターの表示制御
function setupScrollIndicator() {
    if (!elements.scrollIndicator) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            elements.scrollIndicator.style.opacity = '0';
            elements.scrollIndicator.style.pointerEvents = 'none';
        } else {
            elements.scrollIndicator.style.opacity = '';
            elements.scrollIndicator.style.pointerEvents = '';
        }
    });
}

// パフォーマンス最適化：スクロールイベントのスロットリング
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// アコーディオンのアニメーション改善とアクセシビリティ
function setupAccordion() {
    const accordion = document.querySelector('.updates-accordion');
    if (!accordion) return;
    
    const toggle = accordion.querySelector('.accordion-toggle');
    
    accordion.addEventListener('toggle', (e) => {
        // aria-expanded属性の更新
        toggle.setAttribute('aria-expanded', e.target.open);
        
        if (e.target.open) {
            // 開いた時のアニメーション
            const content = e.target.querySelector('#past-updates');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}

// キーボードナビゲーションサポート
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Escapeキーでアコーディオンを閉じる
        if (e.key === 'Escape') {
            const openAccordion = document.querySelector('.updates-accordion[open]');
            if (openAccordion) {
                openAccordion.open = false;
                openAccordion.querySelector('.accordion-toggle').setAttribute('aria-expanded', 'false');
            }
        }
        
        // TabキーでのフォーカスナビゲーションはブラウザのデフォルトでOK
    });
}

// パララックス効果
function setupParallax() {
    const decorations = document.querySelectorAll('.section-decoration');
    if (!decorations.length) return;
    
    // requestAnimationFrameで最適化
    let ticking = false;
    function updateParallax() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                decorations.forEach(decoration => {
                    const speed = 0.3; // パララックス速度
                    const yPos = -(scrolled * speed);
                    decoration.style.transform = `translateY(${yPos}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', throttle(updateParallax, 16)); // 60fps
}

// 初期化
function init() {
    // お知らせデータの読み込み
    updatesManager.loadUpdates();
    
    // スムーズスクロールの設定
    smoothScroll.init();
    
    // スクロールアニメーションの設定
    setupScrollAnimations();
    
    // スクロールインジケーターの設定
    setupScrollIndicator();
    
    // アコーディオンの設定
    setupAccordion();
    
    // キーボードナビゲーションの設定
    setupKeyboardNavigation();
    
    // パララックス効果の設定
    setupParallax();
    
    // サービスカードのホバーエフェクト強化
    elements.serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// DOMContentLoadedで初期化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// エラーハンドリング
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});
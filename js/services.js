// ==========================================
// 1. 通用平滑跳转逻辑 (处理顶部面包屑按钮点击)
// ==========================================
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        // 预留顶部导航栏的偏移量，防止标题被遮挡
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        updateTabActive(sectionId);
    }
}

function updateTabActive(sectionId) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        if (tab.getAttribute('onclick') && tab.getAttribute('onclick').includes(sectionId)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// ==========================================
// 2. 真实案例动画滑动与自动播放逻辑
// ==========================================
let currentCaseIndex = 0;
let caseAutoPlayTimer; // 自动播放的定时器

// 手动点击左右箭头滑动
function moveCases(direction) {
    const track = document.getElementById('casesTrack');
    const cards = document.querySelectorAll('.case-card');
    if (cards.length === 0) return;

    const totalCards = cards.length;
    const cardWidth = cards[0].offsetWidth + 30; // 卡片宽度 + gap间距
    const visibleCards = Math.round(track.parentElement.offsetWidth / cardWidth);

    currentCaseIndex += direction;

    // 边界检查：如果点到了头或尾，就卡住不让点
    if (currentCaseIndex < 0) {
        currentCaseIndex = 0;
    } else if (currentCaseIndex > totalCards - visibleCards) {
        currentCaseIndex = totalCards - visibleCards;
    }

    // 执行 CSS 平滑位移动画
    const moveX = currentCaseIndex * cardWidth;
    track.style.transform = `translateX(-${moveX}px)`;

    updateArrows(totalCards, visibleCards);

    // 用户手动点击后，重置一下自动播放时间，防止刚点完它自己又滑走了
    resetCaseAutoPlay();
}

// 自动滑动逻辑
function autoSlideCases() {
    const track = document.getElementById('casesTrack');
    if (!track) return;
    const cards = document.querySelectorAll('.case-card');
    const totalCards = cards.length;
    if (totalCards === 0) return;

    const cardWidth = cards[0].offsetWidth + 30;
    const visibleCards = Math.round(track.parentElement.offsetWidth / cardWidth);

    // 如果已经滚到最后一张了，就平滑地“弹”回第一张
    if (currentCaseIndex >= totalCards - visibleCards) {
        currentCaseIndex = 0;
    } else {
        currentCaseIndex++;
    }

    const moveX = currentCaseIndex * cardWidth;
    track.style.transform = `translateX(-${moveX}px)`;
    updateArrows(totalCards, visibleCards);
}

// 更新箭头透明度状态
function updateArrows(total, visible) {
    const leftBtn = document.querySelector('.left-arrow');
    const rightBtn = document.querySelector('.right-arrow');

    if (leftBtn) leftBtn.style.opacity = currentCaseIndex === 0 ? "0.3" : "1";
    if (rightBtn) rightBtn.style.opacity = currentCaseIndex >= (total - visible) ? "0.3" : "1";
}

// 启动/停止自动播放
function startCaseAutoPlay() {
    // 每隔 3.5 秒自动滑一次，节奏刚刚好
    caseAutoPlayTimer = setInterval(autoSlideCases, 3500);
}

function stopCaseAutoPlay() {
    clearInterval(caseAutoPlayTimer);
}

function resetCaseAutoPlay() {
    stopCaseAutoPlay();
    startCaseAutoPlay();
}

// ==========================================
// 3. 页面加载完成后的初始化操作
// ==========================================
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.case-card');
    if (cards.length > 0) {
        updateArrows(cards.length, 3);
        startCaseAutoPlay(); // 启动全自动播放！
    }

    // ✨ 贴心细节：鼠标放到轮播图上面看字时，自动暂停播放；鼠标移开，继续播放
    const sliderWrapper = document.querySelector('.cases-slider-wrapper');
    if (sliderWrapper) {
        sliderWrapper.addEventListener('mouseenter', stopCaseAutoPlay);
        sliderWrapper.addEventListener('mouseleave', startCaseAutoPlay);
    }
});
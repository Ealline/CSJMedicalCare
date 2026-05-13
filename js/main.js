/**
 * 诚胜佳医疗 - 公共交互脚本 main.js
 */

// ==========================================
// 💡 核心新增：全站产品数据库 (前端数据中心)
// 包含所有子产品的名字、所属系列、简述、链接以及对应详情页的主图
// ==========================================
const productDatabase = [
    { name: '胸骨中央型凸起固定器', category: '胸廓畸形系列', desc: '对人体躯干部位的外固定和支撑', link: 'pectus_sternal-center.html', img: 'images/products/sternal-center/1.png' },
    { name: '锁骨下胸廓凸起固定器', category: '胸廓畸形系列', desc: '对锁骨下胸廓凸起的外固定和支撑', link: 'pectus_subclavicular.html', img: 'images/products/subclavicular/1.png' },
    { name: '单侧胸廓不对称固定器', category: '胸廓畸形系列', desc: '单侧定制 改善不对称支撑', link: 'pectus_unilateral.html', img: 'images/products/unilateral/1.png' },
    { name: '肋骨外翻塑形固定器', category: '胸廓畸形系列', desc: '物理塑形 改善肋骨外翻', link: 'pectus_rib-flare.html', img: 'images/products/rib-flare/1.png' },
    { name: '复合固定器', category: '胸廓畸形系列', desc: '对复合特殊类型的外固定和支撑', link: 'pectus_chicken-breast-rib-flare.html', img: 'images/products/complex/1.png' },
    { name: '漏斗胸负压吸盘', category: '胸廓畸形系列', desc: '物理负压吸附 无需手术不损伤皮肤', link: 'funnel-chest.html', img: 'images/products/funnel-chest/1.png' },
    { name: '异型漏斗胸负压吸盘', category: '胸廓畸形系列', desc: '异型定制 物理负压温和治疗', link: 'atypical-funnel-chest.html', img: 'images/products/atypical-funnel-chest/1.png' },

    { name: '肘外翻固定器', category: '上肢康复系列', desc: '稳定肘部 矫正肘外翻', link: 'elbow-valgus.html', img: 'images/products/elbow-valgus/1.png' },
    { name: '肘内翻固定器', category: '上肢康复系列', desc: '稳定支撑 矫正肘内翻', link: 'elbow-varus.html', img: 'images/products/elbow-varus/1.png' },
    { name: '肘关节可活动器', category: '上肢康复系列', desc: '活动角度可调 辅助康复', link: 'elbow-activity.html', img: 'images/products/elbow-mobile/1.png' },

    { name: '髋关节固定器', category: '下肢康复系列', desc: '稳定发育 舒适透气材质', link: 'hip-joint.html', img: 'images/products/hip-joint/1.png' },
    { name: '腿型固定器', category: '下肢康复系列', desc: '矫正腿型 改善下肢体态', link: 'leg-shape.html', img: 'images/products/leg/1.png' },
    { name: '内八足固定器', category: '下肢康复系列', desc: '矫正内八字步态 舒适矫形', link: 'intoeing-correction.html', img: 'images/products/intoeing-foot/1.png' },

    { name: '胸腰椎固定器', category: '脊柱固定系列', desc: '主体轻质高强度 贴合人体曲线', link: 'thoracolumbar.html', img: 'images/products/thoracolumbar/1.png' },
    { name: '颈胸椎固定器', category: '脊柱固定系列', desc: '颈胸椎稳定支撑 限制异常活动', link: 'cervicothoracic.html', img: 'images/products/cervicothoracic/1.png' },
    { name: '脊柱侧弯固定器', category: '脊柱固定系列', desc: '矫正脊柱侧弯 量身私人定制', link: 'scoliosis.html', img: 'images/products/scoliosis/1.png' }
];

document.addEventListener("DOMContentLoaded", function() {
    try {
        // 1. 初始化状态：所有分类默认展开
        const allMenuItems = document.querySelectorAll('.menu-item');
        allMenuItems.forEach(item => {
            item.classList.remove('active');
            item.classList.add('open');
        });

        const allSubLinks = document.querySelectorAll('.submenu li a');
        allSubLinks.forEach(link => link.classList.remove('active'));

// 2. 匹配当前页面并点亮侧边栏
        const currentUrl = decodeURIComponent(window.location.href);
        const currentPath = currentUrl.split('?')[0].split('#')[0];
        // 提取当前浏览器网址的纯文件名，例如 "异型漏斗胸.html"
        const currentFilename = currentPath.split('/').pop();

        allSubLinks.forEach(link => {
            let href = link.getAttribute('href');
            if (href && href !== '#' && href !== 'javascript:void(0);') {
                let decodedHref = decodeURIComponent(href.split('?')[0].split('#')[0]);
                // 同样提取侧边栏链接的纯文件名，例如 "漏斗胸.html"
                let hrefFilename = decodedHref.split('/').pop();

                // 核心修复：必须 100% 相同！多一个“异型”都不行！
                if (currentFilename === hrefFilename && currentFilename !== '') {
                    link.classList.add('active');
                    const parentMenuItem = link.closest('.menu-item');
                    if (parentMenuItem) {
                        parentMenuItem.classList.add('active');
                    }
                }
            }
        });
        // 3. 智能跳跃逻辑：只针对左侧菜单生效！
        if (sessionStorage.getItem('allowSidebarScroll') === 'true') {
            setTimeout(function() {
                const targetArea = document.querySelector('.page-layout');
                if (targetArea) {
                    targetArea.scrollIntoView({ behavior: 'auto', block: 'start' });
                }
            }, 50);
            sessionStorage.removeItem('allowSidebarScroll');
        }

        // 给左侧所有的菜单链接绑定事件
        const sidebarLinks = document.querySelectorAll('.sidebar-menu a, .sidebar-header');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                sessionStorage.setItem('allowSidebarScroll', 'true');
            });
        });

      // ==========================================
        // ✨ 核心机制：动态渲染产品卡片 (含分页功能版)
        // ==========================================
        const gridContainer = document.querySelector('.products-grid');

        // 新增全局状态控制：记录当前选中的分类、页码，并设定一页展示 6 个（2列x3行）
        let currentCategory = 'all';
        let currentPage = 1;
        const itemsPerPage = 6;

        function renderProductCards(category, page = 1) {
            if (!gridContainer) return;

            currentCategory = category;
            currentPage = page;
            gridContainer.innerHTML = ''; // 清空右侧旧数据

            // 1. 过滤数据
            const filteredProducts = (category === 'all' || !category)
                ? productDatabase
                : productDatabase.filter(p => p.category === category);

            // 2. 分页计算核心逻辑
            const totalItems = filteredProducts.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

            // 防止越界
            if (currentPage > totalPages) currentPage = totalPages;
            if (currentPage < 1) currentPage = 1;

            // 截取当前页需要展示的数据片段
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

            // 3. 循环生成当前页的卡片
            paginatedProducts.forEach(p => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.onclick = () => window.location.href = p.link;

                card.innerHTML = `
                    <div class="product-info">
                        <h3>${p.name}</h3>
                        <p>${p.desc}</p>
                        <span class="explore-btn">查看详情</span>
                    </div>
                    <div class="product-img">
                        <img src="${p.img}" alt="${p.name}" onerror="this.src='images/logo.png'">
                    </div>
                `;
                gridContainer.appendChild(card);
            });

            // 4. 自动生成并渲染底部的分页按钮
            renderPagination(totalPages);

            // 5. 动态更新面包屑导航
            const breadcrumb = document.querySelector('.content-breadcrumb');
            if (breadcrumb) {
                if (category === 'all' || !category) {
                    breadcrumb.innerHTML = `<a href="index.html">首页</a> &gt; <span>产品中心</span>`;
                } else {
                    breadcrumb.innerHTML = `<a href="index.html">首页</a> &gt; <a href="products.html">产品中心</a> &gt; <span style="color: var(--primary-color); font-weight:bold;">${category}</span>`;
                }
            }

            // 6. 翻页体验优化：点击第二页等操作时，页面顺滑回滚到产品区顶部
            if (page !== 1) {
                const targetArea = document.querySelector('.page-layout');
                if (targetArea) {
                    targetArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }

        // --- 分页控件生成函数 ---
        function renderPagination(totalPages) {
            let paginationContainer = document.getElementById('pagination-container');
            // 如果页面上还没有分页容器，用 JS 动态生成一个，挂载到商品列表的正下方！
            if (!paginationContainer) {
                paginationContainer = document.createElement('div');
                paginationContainer.id = 'pagination-container';
                paginationContainer.className = 'pagination-container';
                gridContainer.parentNode.insertBefore(paginationContainer, gridContainer.nextSibling);
            }

            paginationContainer.innerHTML = ''; // 清空旧分页

            // 如果总产品很少（1页以内），直接隐藏分页器
            if (totalPages <= 1) return;

            // 生成： < 上一页按钮
            const prevBtn = document.createElement('button');
            prevBtn.className = 'page-btn';
            prevBtn.innerText = '<';
            prevBtn.disabled = currentPage === 1; // 如果是第一页，禁用上一页
            prevBtn.onclick = () => renderProductCards(currentCategory, currentPage - 1);
            paginationContainer.appendChild(prevBtn);

            // 生成： 数字页码按钮
            for (let i = 1; i <= totalPages; i++) {
                const pageBtn = document.createElement('button');
                // 给当前正在浏览的页码加上高亮样式
                pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
                pageBtn.innerText = i;
                pageBtn.onclick = () => renderProductCards(currentCategory, i);
                paginationContainer.appendChild(pageBtn);
            }

            // 生成： > 下一页按钮
            const nextBtn = document.createElement('button');
            nextBtn.className = 'page-btn';
            nextBtn.innerText = '>';
            nextBtn.disabled = currentPage === totalPages; // 如果是最后一页，禁用下一页
            nextBtn.onclick = () => renderProductCards(currentCategory, currentPage + 1);
            paginationContainer.appendChild(nextBtn);
        }

        // --- 拦截 URL 参数，页面刚打开时执行一次渲染 ---
        if (gridContainer) {
            const params = new URLSearchParams(window.location.search);
            const initCategory = params.get('category');
            renderProductCards(initCategory || 'all');

            // 如果带参数跳过来，点亮对应的父菜单
            if (initCategory) {
                allMenuItems.forEach(item => {
                    const titleEl = item.querySelector('.menu-title');
                    if (titleEl && titleEl.innerText.trim() === initCategory) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        }

        // 4. 手动交互：拦截侧边栏标题的点击，更新卡片
        const menuTitles = document.querySelectorAll('.sidebar-menu .menu-title');
        menuTitles.forEach(title => {
            title.addEventListener('click', function() {
                const parentLi = this.parentElement;
                parentLi.classList.toggle('open');

                const categoryName = this.innerText.trim();

                if (gridContainer) {
                    // 如果就在产品总览页，瞬间无刷新更新右侧所有卡片
                    renderProductCards(categoryName);
                    // 清除别人高亮，只亮自己
                    allMenuItems.forEach(item => item.classList.remove('active'));
                    parentLi.classList.add('active');
                } else {
                    // 如果在子产品的详情页，就带上参数跳回总览页
                    window.location.href = `products.html?category=${encodeURIComponent(categoryName)}`;
                }
            });
        });

        // 拦截最顶上“产品系列”的点击，显示所有产品
        const sidebarHeader = document.querySelector('.sidebar-header');
        if (sidebarHeader) {
            sidebarHeader.onclick = function(e) {
                e.preventDefault(); // 阻断 HTML 里的跳转
                if (gridContainer) {
                    renderProductCards('all');
                    allMenuItems.forEach(item => item.classList.remove('active'));
                } else {
                    window.location.href = 'products.html';
                }
            };
        }


        // ==========================================
        // 唤醒放大镜功能
        // ==========================================
        const mainImg = document.getElementById('main-image');
        const magResult = document.getElementById('magnifier-result');
        if (mainImg && magResult) {
            magnify("main-image", "magnifier-result", 2.5);
            magResult.style.backgroundImage = "url('" + mainImg.src + "')";
        }

    } catch (error) {
        console.error("脚本运行异常:", error);
    }
});

// ==========================================
// 以下是功能函数区
// ==========================================

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
}

function changeMainImg(element, src) {
    document.querySelectorAll('.thumb-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
    const mainImg = document.getElementById('main-image');
    const tempImg = new Image();
    tempImg.src = src;
    tempImg.onload = function() {
        mainImg.src = src;
        document.getElementById('magnifier-result').style.backgroundImage = "url('" + src + "')";
    }
}

function magnify(imgID, resultID, zoom) {
    var img, glass, w, h, result, container;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    glass = document.getElementById("magnifier-glass");
    container = document.querySelector('.img-magnifier-container');

    glass.style.pointerEvents = "none";
    result.style.pointerEvents = "none";

    container.addEventListener("mouseenter", function() {
        if(window.innerWidth < 992) return;
        glass.style.display = "block";
        result.style.display = "block";
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
        w = result.offsetWidth / zoom;
        h = result.offsetHeight / zoom;
        glass.style.width = w + "px";
        glass.style.height = h + "px";
    });

    container.addEventListener("mouseleave", function(e) {
        glass.style.display = "none";
        result.style.display = "none";
    });

    container.addEventListener("mousemove", moveMagnifier);

    function moveMagnifier(e) {
        if(window.innerWidth < 992) return;
        var pos, x, y;
        e.preventDefault();
        pos = getCursorPos(e);
        x = pos.x; y = pos.y;
        if (x > img.width - (w / 2)) {x = img.width - (w / 2);}
        if (x < w / 2) {x = w / 2;}
        if (y > img.height - (h / 2)) {y = img.height - (h / 2);}
        if (y < h / 2) {y = h / 2;}
        glass.style.left = (x - w / 2) + "px";
        glass.style.top = (y - h / 2) + "px";
        result.style.backgroundPosition = "-" + ((x * zoom) - result.offsetWidth / 2) + "px -" + ((y * zoom) - result.offsetHeight / 2) + "px";
    }

    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.clientX - a.left;
        y = e.clientY - a.top;
        return {x : x, y : y};
    }
}
       // --- 头部及导航逻辑 ---
        function toggleMenu() {
            const nav = document.getElementById('nav');
            nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
        }

        // --- 平滑滚动及页签 ---
        function scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });

        // ===== 新增：四张图片滚动弹入动画逻辑 =====
        const galleryObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.gallery-item');
                    items.forEach((item, index) => {
                        // 每张图片增加 150ms 的延迟，形成从左到右依次弹入的感觉
                        setTimeout(() => {
                            item.classList.add('show');
                        }, index * 150);
                    });
                    // 动画执行一次后取消监听
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        const gallery = document.querySelector('.about-image-gallery');
        if (gallery) {
            galleryObserver.observe(gallery);
        }

        // --- 数字动画 ---
        document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll('.stat-num');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const updateCount = () => {
                    const c = +counter.innerText;
                    const increment = target / 100;
                    if (c < target) {
                        counter.innerText = Math.ceil(c + increment);
                        setTimeout(updateCount, 20);
                    } else counter.innerText = target;
                };
                updateCount();
            });
        });

        // --- 3D轮播逻辑 ---
        const certItems = document.querySelectorAll('.cert-item');
        const certDotsContainer = document.getElementById('certDots');
        const totalCerts = certItems.length;
        let certCurrentIndex = 0;
        let certAutoPlay;

        certItems.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('cert-dot');
            if(i === certCurrentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => goToCert(i));
            certDotsContainer.appendChild(dot);
        });
        const certDots = document.querySelectorAll('.cert-dot');

        function updateCertCarousel() {
            certItems.forEach((item, index) => {
                let offset = index - certCurrentIndex;
                if (offset > Math.floor(totalCerts / 2)) offset -= totalCerts;
                if (offset < -Math.floor(totalCerts / 2)) offset += totalCerts;

                let absOffset = Math.abs(offset);
                let sign = Math.sign(offset);
                let rotateY = sign * -20;
                let translateZ = absOffset * -50;
                let translateX = absOffset === 0 ? 0 : (sign * 240 + (offset - sign) * 150);

                if (absOffset === 0) translateZ = 120;

                item.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`;
                item.style.zIndex = 100 - absOffset;
                if(absOffset === 0) item.classList.add('active');
                else item.classList.remove('active');
            });

            certDots.forEach((dot, index) => dot.classList.toggle('active', index === certCurrentIndex));
        }

        function goToCert(index) { certCurrentIndex = index; updateCertCarousel(); resetCertAutoPlay(); }
        function nextCert() { certCurrentIndex = (certCurrentIndex + 1) % totalCerts; updateCertCarousel(); }
        function startCertAutoPlay() { certAutoPlay = setInterval(nextCert, 2500); }
        function resetCertAutoPlay() { clearInterval(certAutoPlay); startCertAutoPlay(); }

        certItems.forEach((item, index) => item.addEventListener('click', () => goToCert(index)));
        updateCertCarousel(); startCertAutoPlay();
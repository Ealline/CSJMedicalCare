function toggleMenu() {
            const nav = document.getElementById('nav');
            nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
        }

        // --- 数据跳动动画 ---
        document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const updateCount = () => {
                    const c = +counter.innerText;
                    const increment = target / 100;
                    if (c < target) {
                        counter.innerText = Math.ceil(c + increment);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        });

        // ==========================================
        // 【热门产品】动态数据渲染与自动播放算法
        // ==========================================
        const hotProductsData = [
            { name: '胸骨中央型凸起固定器', desc: '医用级私人定制<br>舒适透气 自由穿戴', img: 'images/products/sternal-center/1.png', link: 'pectus_sternal-center.html' },
            { name: '漏斗胸负压吸盘', desc: '采用物理负压原理<br>无创温和治疗', img: 'images/products/funnel-chest/1.png', link: 'funnel-chest.html' },
            { name: '髋关节固定器', desc: '针对发育不良矫正<br>稳定支撑保持正确姿势', img: 'images/products/hip-joint/1.png', link: 'hip-joint.html' },
            { name: '腿型固定器', desc: '用于O型、X型腿矫正<br>有效改善下肢体态', img: 'images/products/leg/1.png', link: 'leg-shape.html' },
            { name: '胸腰椎固定器', desc: '轻质高强度主体<br>胸腰椎稳定固定与康复', img: 'images/products/thoracolumbar/1.png', link: 'thoracolumbar.html' },
            { name: '单侧胸廓不对称固定器', desc: '单侧专属定制<br>改善胸廓不对称发育', img: 'images/products/unilateral/1.png', link: 'pectus_unilateral.html' },
            { name: '肋骨外翻塑形固定器', desc: '物理塑形 改善肋骨外翻', link: 'pectus_rib-flare.html', img: 'images/products/rib-flare/1.png' },
            { name: '复合固定器', desc: '对复合特殊类型的外固定和支撑', link: 'pectus_chicken-breast-rib-flare.html', img: 'images/products/complex/1.png' },
            { name: '异型漏斗胸负压吸盘', desc: '异型定制 物理负压温和治疗', link: 'atypical-funnel-chest.html', img: 'images/products/atypical-funnel-chest/1.png' },
            { name: '肘外翻固定器', desc: '稳定肘部 矫正肘外翻', link: 'elbow-valgus.html', img: 'images/products/elbow-valgus/1.png' },
            { name: '肘内翻固定器', desc: '稳定支撑 矫正肘内翻', link: 'elbow-varus.html', img: 'images/products/elbow-varus/1.png' },
            { name: '肘关节可活动器', desc: '活动角度可调 辅助康复', link: 'elbow-activity.html', img: 'images/products/elbow-mobile/1.png' },
            { name: '内八足固定器', desc: '矫正内八字步态 舒适矫形', link: 'intoeing-correction.html', img: 'images/products/intoeing-foot/1.png' },
            { name: '颈胸椎固定器', desc: '颈胸椎稳定支撑 限制异常活动', link: 'cervicothoracic.html', img: 'images/products/cervicothoracic/1.png' },
            { name: '脊柱侧弯固定器', desc: '矫正脊柱侧弯 量身私人定制', link: 'scoliosis.html', img: 'images/products/scoliosis/1.png' }
        ];

        const uhpTrack = document.getElementById('uhp-track');

        function renderHotProducts() {
            if (!uhpTrack) return;
            uhpTrack.innerHTML = ''; 

            hotProductsData.forEach(p => {
                const item = document.createElement('div');
                item.className = 'uhp-item';
                item.style.cursor = 'pointer';
                item.onclick = (e) => {
                    if(e.target.tagName.toLowerCase() !== 'a') {
                        window.location.href = p.link;
                    }
                };

                // 👇 就是这里！我已经帮你补上了至关重要的反引号 `
                item.innerHTML = `
                    <div class="uhp-text">
                        <h3>${p.name}</h3>
                        <p>${p.desc}</p>
                    </div>
                    <div class="uhp-img">
                        <img src="${p.img}" alt="${p.name}" onerror="this.src='images/logo.png'">
                    </div>
                   <a href="${p.link}" class="uhp-btn">查看详情</a>
                `; 
                
                uhpTrack.appendChild(item);
            });
        }

        renderHotProducts();

        // 3. 轮播图控制逻辑
        let isPaused = false;
        let autoPlayTimer;

        function slideUhp(direction) {
            if (!uhpTrack.firstElementChild) return;
            const itemWidth = uhpTrack.firstElementChild.offsetWidth + 30; 
            uhpTrack.scrollBy({ left: direction * itemWidth, behavior: 'smooth' });
            resetAutoPlay();
        }

        function startAutoPlay() {
            autoPlayTimer = setInterval(() => {
                if (!isPaused && uhpTrack.firstElementChild) {
                    const itemWidth = uhpTrack.firstElementChild.offsetWidth + 30;
                    const maxScroll = uhpTrack.scrollWidth - uhpTrack.clientWidth;

                    if (uhpTrack.scrollLeft >= maxScroll - 5) {
                        uhpTrack.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        uhpTrack.scrollBy({ left: itemWidth, behavior: 'smooth' });
                    }
                }
            }, 3500);
        }

        if (uhpTrack) {
            uhpTrack.addEventListener('mouseenter', () => isPaused = true);
            uhpTrack.addEventListener('mouseleave', () => isPaused = false);
        }

        function resetAutoPlay() {
            clearInterval(autoPlayTimer);
            startAutoPlay();
        }

        startAutoPlay();

        // --- 3D 证书轮播 ---
        const certItems = document.querySelectorAll('.cert-item');
        const certDotsContainer = document.getElementById('certDots');
        
        if (certItems.length > 0 && certDotsContainer) {
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
                    let translateX = absOffset === 0 ? 0 : sign * 240 + (offset - sign) * 150;

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
        }

        // --- 地图粒子特效 ---
        const canvas = document.getElementById("particleCanvas");
        if(canvas) {
            const ctx = canvas.getContext("2d");
            function resizeCanvas() {
                const mapSection = document.querySelector('.business-scope-map-section');
                if(mapSection) {
                    canvas.width = mapSection.offsetWidth;
                    canvas.height = mapSection.offsetHeight;
                }
            }
            let particlesArray = [];
            class Particle {
                constructor(x, y, directionX, directionY, size, color) {
                    this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY; this.size = size; this.color = color;
                }
                draw() {
                    ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                    ctx.fillStyle = this.color; ctx.fill();
                }
                update() {
                    if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
                    if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
                    this.x += this.directionX; this.y += this.directionY; this.draw();
                }
            }
            function initParticles() {
                particlesArray = [];
                let numberOfParticles = (canvas.height * canvas.width) / 12000;
                for (let i = 0; i < numberOfParticles; i++) {
                    let size = (Math.random() * 2) + 1;
                    let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                    let directionX = (Math.random() * 1) - 0.5;
                    let directionY = (Math.random() * 1) - 0.5;
                    let color = 'rgba(0, 229, 255, 0.5)';
                    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
                }
            }
            function connectParticles() {
                for (let a = 0; a < particlesArray.length; a++) {
                    for (let b = a; b < particlesArray.length; b++) {
                        let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                        + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                        if (distance < (canvas.width / 10) * (canvas.height / 10)) {
                            let opacityValue = 1 - (distance / 20000);
                            ctx.strokeStyle = 'rgba(0, 229, 255, ' + opacityValue + ')';
                            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(particlesArray[a].x, particlesArray[a].y); ctx.lineTo(particlesArray[b].x, particlesArray[b].y); ctx.stroke();
                        }
                    }
                }
            }
            function animateParticles() {
                requestAnimationFrame(animateParticles); ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < particlesArray.length; i++) particlesArray[i].update();
                connectParticles();
            }
            window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
            resizeCanvas(); initParticles(); animateParticles();
        }

        // ==========================================
        // 【视频弹窗】控制逻辑
        // ==========================================
        function openVideoModal() {
            const modal = document.getElementById('videoModal');
            const video = document.getElementById('promoVideo');
            if(modal && video) {
                modal.classList.add('show');
                setTimeout(() => { video.play(); }, 100);
            }
        }

        function closeVideoModal() {
            const modal = document.getElementById('videoModal');
            const video = document.getElementById('promoVideo');
            if(modal && video) {
                modal.classList.remove('show');
                video.pause(); 
                video.currentTime = 0; 
            }
        }

        window.addEventListener('click', function(event) {
            const modal = document.getElementById('videoModal');
            if (event.target === modal) {
                closeVideoModal();
            }
        });
---
layout: default
title: 首页
---

<div class="owl-animation-container">
  <div class="pixel-owl"></div>
</div>

<div class="starry-night-container">
  <div class="starry-night-canvas" id="starryNightCanvas"></div>
  <div class="site-title">冯菁源的个人网站</div>
</div>

<div id="about-section" class="about-container">
  <h2 class="section-title">关于我</h2>
  
  <div class="line"></div>
  
  <div class="about-content">
    <div class="about-section" data-aos="fade-up">
      <h3>个人简介</h3>
      <p>
        大家好，我是<span class="highlight">冯菁源</span>。我对技术和创新充满热情，特别是在网站开发和数据分析领域。
        我喜欢探索新技术，解决复杂问题，并创造有意义的项目。
      </p>
      <p>
        我相信技术的力量在于它能够连接人与人，并为世界带来积极的变化。我的目标是通过我的技能和创造力，
        为用户打造直观、高效且美观的数字体验。
      </p>
    </div>
    
    <div class="about-section skills-section" data-aos="fade-up">
      <h3>专业技能</h3>
      <div class="skills-grid">
        <div class="skill-category">
          <h4>前端开发</h4>
          <ul class="skills-list">
            <li>
              <span class="skill-name">HTML/CSS</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 95%"></div>
              </div>
            </li>
            <li>
              <span class="skill-name">JavaScript</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 90%"></div>
              </div>
            </li>
            <li>
              <span class="skill-name">React</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 85%"></div>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="skill-category">
          <h4>后端开发</h4>
          <ul class="skills-list">
            <li>
              <span class="skill-name">Node.js</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 80%"></div>
              </div>
            </li>
            <li>
              <span class="skill-name">Python</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 85%"></div>
              </div>
            </li>
            <li>
              <span class="skill-name">数据库</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 75%"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="about-section" data-aos="fade-up">
      <h3>教育背景</h3>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">2018 - 2022</div>
          <div class="timeline-content">
            <h4>计算机科学学士</h4>
            <p>某大学</p>
            <p>主修课程：算法与数据结构、Web开发、数据库系统、人工智能基础</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="about-section" data-aos="fade-up">
      <h3>工作经历</h3>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">2022 - 至今</div>
          <div class="timeline-content">
            <h4>Web开发工程师</h4>
            <p>某科技公司</p>
            <ul>
              <li>负责公司网站的开发和维护</li>
              <li>优化用户体验和网站性能</li>
              <li>与设计团队合作实现新功能</li>
              <li>使用现代前端框架构建响应式界面</li>
            </ul>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-date">2021 - 2022</div>
          <div class="timeline-content">
            <h4>前端开发实习生</h4>
            <p>某互联网公司</p>
            <ul>
              <li>参与多个Web应用的开发</li>
              <li>学习并应用现代前端技术</li>
              <li>协助优化用户界面和交互体验</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="about-section" data-aos="fade-up">
      <h3>项目经验</h3>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-header">
            <h4>个人博客网站</h4>
            <div class="project-tags">
              <span>Jekyll</span>
              <span>GitHub Pages</span>
            </div>
          </div>
          <p>使用Jekyll和GitHub Pages构建的个人博客网站，展示我的技术文章和项目。</p>
        </div>
        
        <div class="project-card">
          <div class="project-header">
            <h4>数据可视化平台</h4>
            <div class="project-tags">
              <span>React</span>
              <span>D3.js</span>
            </div>
          </div>
          <p>一个交互式数据可视化平台，帮助用户理解和分析复杂数据集。</p>
        </div>
      </div>
    </div>
    
    <div class="about-section" data-aos="fade-up">
      <h3>兴趣爱好</h3>
      <div class="interests-container">
        <div class="interest-item">
          <div class="interest-icon">📚</div>
          <p>阅读技术书籍和科幻小说</p>
        </div>
        <div class="interest-item">
          <div class="interest-icon">💻</div>
          <p>探索新的编程语言和框架</p>
        </div>
        <div class="interest-item">
          <div class="interest-icon">🌍</div>
          <p>旅行和摄影</p>
        </div>
        <div class="interest-item">
          <div class="interest-icon">🔍</div>
          <p>参与开源项目</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* 全局字体设置 - Medium博客风格 */
  body {
    font-family: 'Charter', 'Bitstream Charter', 'Sitka Text', Cambria, serif;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.84);
    -webkit-font-smoothing: antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  
  p {
    margin-bottom: 1.5em;
    font-size: 18px;
  }
  
  /* 像素猫头鹰动画样式 */
  .owl-animation-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: #fff;
    pointer-events: none;
    animation: fadeOut 0.5s ease-in-out 3s forwards;
  }
  
  .pixel-owl {
    position: absolute;
    width: 120px;
    height: 120px;
    background-image: url("{{ '/assets/images/owl.png' | relative_url }}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    top: 50%;
    transform: translateY(-50%);
    left: -150px;
    animation: flyAcross 3s ease-in-out forwards;
  }
  
  @keyframes flyAcross {
    0% { left: -150px; transform: translateY(-50%) rotate(0deg); }
    10% { transform: translateY(-50%) rotate(5deg); }
    20% { transform: translateY(-50%) rotate(-5deg); }
    30% { transform: translateY(-50%) rotate(5deg); }
    40% { transform: translateY(-50%) rotate(-5deg); }
    50% { transform: translateY(-50%) rotate(5deg); }
    60% { transform: translateY(-50%) rotate(-5deg); }
    70% { transform: translateY(-50%) rotate(5deg); }
    80% { transform: translateY(-50%) rotate(-5deg); }
    90% { transform: translateY(-50%) rotate(5deg); }
    100% { left: calc(100% + 150px); transform: translateY(-50%) rotate(0deg); }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; visibility: hidden; }
  }
  
  /* 梵高星空容器样式 */
  .starry-night-container {
    position: relative;
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #0a1a3f;
    margin-bottom: 20px;
    z-index: 1;
  }
  
  .starry-night-canvas {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .site-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
    z-index: 2;
    text-align: center;
    font-family: 'Times New Roman', serif;
  }
  
  .star {
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    animation: twinkle 4s infinite ease-in-out;
  }
  
  .swirl {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(255, 255, 150, 0.8) 0%, rgba(255, 255, 150, 0) 70%);
    animation: pulse 8s infinite ease-in-out;
  }
  
  @keyframes twinkle {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.2); opacity: 0.9; }
    100% { transform: scale(1); opacity: 0.7; }
  }
  
  /* 交互式像素区域样式 */
  .interactive-pixel-area {
    position: relative;
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #fafafa;
    margin-bottom: 20px;
    z-index: 1;
  }
  
  .pixel-canvas {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .pixel {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #000;
    transition: transform 0.3s ease, background-color 0.3s ease, left 0.5s ease, top 0.5s ease;
  }
  
  /* 首页容器样式 */
  .home-container {
    position: relative;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    padding-bottom: 50px;
  }
  
  /* 关于部分样式 */
  .about-container {
    position: relative;
    padding: 60px 0 0 0;
    background-color: #fafafa;
    border-top: 1px solid #eee;
  }
  
  .section-title {
    font-size: 2.5em;
    margin-bottom: 30px;
    position: relative;
    text-align: center;
  }
  
  .about-content {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .about-section {
    margin-bottom: 40px;
    position: relative;
  }
  
  .about-section h3 {
    font-size: 1.8em;
    margin-bottom: 25px;
    position: relative;
    display: inline-block;
  }
  
  .about-section h3:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ffcc00;
    bottom: -5px;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .about-section:hover h3:after {
    transform: scaleX(1);
  }
  
  /* 技能部分 */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
  }
  
  .skill-category h4 {
    margin-bottom: 20px;
    font-size: 1.3em;
    color: #333;
    position: relative;
    display: inline-block;
  }
  
  .skill-category h4:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #ffcc00;
    bottom: -5px;
    left: 0;
  }
  
  .skills-list {
    list-style: none;
    padding: 0;
  }
  
  .skills-list li {
    margin-bottom: 25px;
    transition: transform 0.3s ease;
  }
  
  .skills-list li:hover {
    transform: translateX(10px);
  }
  
  .skills-list li:hover .skill-level {
    background-color: #ff3333;
  }
  
  .skill-name {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 1.1em;
  }
  
  .skill-bar {
    height: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
  }
  
  .skill-level {
    height: 100%;
    background-color: #000;
    border-radius: 5px;
    transition: background-color 0.3s ease, width 1s cubic-bezier(0.16, 1, 0.3, 1);
    width: 0;
  }
  
  /* 时间线样式 */
  .timeline {
    position: relative;
    padding-left: 40px;
  }
  
  .timeline:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #000;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 40px;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .timeline-item:hover {
    transform: translateX(10px);
  }
  
  .timeline-item:hover:before {
    background-color: #ff3333;
    transform: scale(1.5);
  }
  
  .timeline-item:before {
    content: '';
    position: absolute;
    left: -40px;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #000;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .timeline-date {
    font-weight: bold;
    margin-bottom: 10px;
    color: #ff3333;
  }
  
  .timeline-content {
    padding-left: 15px;
  }
  
  .timeline-content h4 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.3em;
  }
  
  /* 项目部分 */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }
  
  .project-card {
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    border-color: #ffcc00;
  }
  
  .project-header {
    margin-bottom: 15px;
  }
  
  .project-header h4 {
    margin-bottom: 10px;
    font-size: 1.2em;
  }
  
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .project-tags span {
    padding: 3px 8px;
    background-color: #f0f0f0;
    border-radius: 20px;
    font-size: 0.8em;
    transition: all 0.3s ease;
  }
  
  .project-tags span:hover {
    background-color: #ffcc00;
  }
  
  /* 兴趣爱好部分 */
  .interests-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  
  .interest-item {
    text-align: center;
    padding: 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  
  .interest-item:hover {
    background-color: #f9f9f9;
    transform: translateY(-5px);
  }
  
  .interest-icon {
    font-size: 2.5em;
    margin-bottom: 15px;
  }
  
  /* 删除博客链接容器 */
  .blog-link-container {
    display: none;
  }
  
  /* 高亮文本 */
  .highlight {
    color: #ff3333;
    font-weight: 700;
  }
  
  /* 响应式调整 */
  @media (max-width: 768px) {
    .skills-grid,
    .projects-grid,
    .interests-container {
      grid-template-columns: 1fr;
    }
    
    .timeline {
      padding-left: 30px;
    }
    
    .timeline-item:before {
      left: -30px;
    }
    
    .section-title {
      font-size: 2em;
    }
    
    .about-section h3 {
      font-size: 1.5em;
    }
    
    .interactive-pixel-area {
      height: 70vh;
    }
    
    .about-section {
      margin-bottom: 30px;
    }
    
    .about-container {
      padding: 40px 0 0 0;
    }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // 初始化梵高星空画布
    initStarryNight();
    
    // 初始化技能条动画
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(level => {
      const width = level.style.width;
      level.style.width = '0';
      
      setTimeout(() => {
        level.style.width = width;
      }, 300);
    });
    
    // 添加滚动动画
    const sections = document.querySelectorAll('.about-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(section);
    });
    
    // 添加可见性类
    document.querySelectorAll('.about-section.visible').forEach(section => {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  // 初始化梵高星空画布
  function initStarryNight() {
    const canvas = document.getElementById('starryNightCanvas');
    if (!canvas) return;
    
    // 清空现有内容
    canvas.innerHTML = '';
    
    // 计算画布尺寸
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    
    // 创建星星
    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // 随机位置
      const x = Math.random() * canvasWidth;
      const y = Math.random() * canvasHeight;
      
      // 随机大小
      const size = Math.random() * 3 + 1;
      
      // 随机延迟动画
      const delay = Math.random() * 4;
      
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDelay = `${delay}s`;
      
      canvas.appendChild(star);
    }
    
    // 创建梵高特有的漩涡
    const swirlCount = 15;
    const colors = ['#f9dc5c', '#ffb703', '#e9c46a', '#f4a261', '#e76f51'];
    
    for (let i = 0; i < swirlCount; i++) {
      const swirl = document.createElement('div');
      swirl.classList.add('swirl');
      
      // 随机位置
      const x = Math.random() * canvasWidth;
      const y = Math.random() * canvasHeight;
      
      // 随机大小
      const size = Math.random() * 100 + 50;
      
      // 随机颜色
      const colorIndex = Math.floor(Math.random() * colors.length);
      const color = colors[colorIndex];
      
      // 随机延迟动画
      const delay = Math.random() * 8;
      
      swirl.style.left = `${x}px`;
      swirl.style.top = `${y}px`;
      swirl.style.width = `${size}px`;
      swirl.style.height = `${size}px`;
      swirl.style.background = `radial-gradient(circle at center, ${color} 0%, rgba(255, 255, 150, 0) 70%)`;
      swirl.style.animationDelay = `${delay}s`;
      
      // 添加梵高特有的笔触效果
      const brushStrokes = Math.floor(Math.random() * 3) + 2;
      for (let j = 0; j < brushStrokes; j++) {
        const stroke = document.createElement('div');
        const strokeWidth = size * 0.8;
        const strokeHeight = size * 0.2;
        const angle = Math.random() * 360;
        
        stroke.style.position = 'absolute';
        stroke.style.width = `${strokeWidth}px`;
        stroke.style.height = `${strokeHeight}px`;
        stroke.style.backgroundColor = color;
        stroke.style.opacity = '0.6';
        stroke.style.borderRadius = '40%';
        stroke.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        stroke.style.top = '50%';
        stroke.style.left = '50%';
        
        swirl.appendChild(stroke);
      }
      
      canvas.appendChild(swirl);
    }
    
    // 添加月亮
    const moon = document.createElement('div');
    moon.style.position = 'absolute';
    moon.style.width = '80px';
    moon.style.height = '80px';
    moon.style.borderRadius = '50%';
    moon.style.backgroundColor = '#f9dc5c';
    moon.style.boxShadow = '0 0 40px rgba(249, 220, 92, 0.8)';
    moon.style.top = '20%';
    moon.style.right = '15%';
    
    canvas.appendChild(moon);
    
    // 添加山丘轮廓
    const hills = document.createElement('div');
    hills.style.position = 'absolute';
    hills.style.bottom = '0';
    hills.style.width = '100%';
    hills.style.height = '25%';
    hills.style.background = 'linear-gradient(180deg, transparent 0%, #0a1a3f 90%)';
    
    // 添加山丘的波浪形状
    hills.style.clipPath = 'polygon(0% 100%, 0% 40%, 5% 45%, 10% 40%, 15% 45%, 20% 35%, 25% 40%, 30% 45%, 35% 40%, 40% 50%, 45% 45%, 50% 35%, 55% 45%, 60% 40%, 65% 45%, 70% 35%, 75% 45%, 80% 40%, 85% 45%, 90% 40%, 95% 45%, 100% 40%, 100% 100%)';
    
    canvas.appendChild(hills);
  }
</script> 
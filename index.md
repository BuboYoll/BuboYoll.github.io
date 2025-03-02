---
layout: default
title: 首页
---

<div class="owl-animation-container">
  <div class="pixel-owl"></div>
</div>

<div class="interactive-pixel-area">
  <div class="pixel-canvas" id="pixelCanvas"></div>
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
  
  <div class="blog-link-container">
    <a href="{{ '/blog' | relative_url }}" class="btn-secondary">阅读我的博客</a>
  </div>
</div>

<style>
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
    padding: 80px 0;
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
    margin-bottom: 80px;
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
  
  /* 博客链接容器 */
  .blog-link-container {
    text-align: center;
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid #eee;
  }
  
  .blog-link-container .btn-secondary {
    padding: 15px 30px;
    font-size: 1.2em;
    display: inline-block;
    border: 1px solid #ff3333;
    color: #ff3333;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;
  }
  
  .blog-link-container .btn-secondary:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ff3333;
    transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: -1;
  }
  
  .blog-link-container .btn-secondary:hover {
    color: #fff;
  }
  
  .blog-link-container .btn-secondary:hover:before {
    transform: translateX(0);
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
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // 初始化像素画布
    initPixelCanvas();
    
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
  
  // 初始化像素画布
  function initPixelCanvas() {
    const canvas = document.getElementById('pixelCanvas');
    if (!canvas) return;
    
    const pixelSize = 3; // 小像素尺寸，使方程更清晰
    const colors = ['#000000', '#333333', '#666666'];
    
    // 计算画布尺寸
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    
    // 清空现有内容
    canvas.innerHTML = '';
    
    // 爱因斯坦场方程的字符定义
    const equationChars = [
      { char: 'R', x: 0.20, y: 0.5, width: 0.04, height: 0.08 },
      { char: 'μ', x: 0.24, y: 0.48, width: 0.02, height: 0.04 },
      { char: 'ν', x: 0.26, y: 0.48, width: 0.02, height: 0.04 },
      { char: '-', x: 0.29, y: 0.5, width: 0.02, height: 0.01 },
      { char: '1', x: 0.32, y: 0.47, width: 0.01, height: 0.02 },
      { char: '/', x: 0.33, y: 0.48, width: 0.01, height: 0.04 },
      { char: '2', x: 0.34, y: 0.49, width: 0.01, height: 0.02 },
      { char: 'R', x: 0.36, y: 0.5, width: 0.04, height: 0.08 },
      { char: 'g', x: 0.41, y: 0.5, width: 0.03, height: 0.06 },
      { char: 'μ', x: 0.44, y: 0.48, width: 0.02, height: 0.04 },
      { char: 'ν', x: 0.46, y: 0.48, width: 0.02, height: 0.04 },
      { char: '=', x: 0.50, y: 0.5, width: 0.03, height: 0.04 },
      { char: '8', x: 0.54, y: 0.5, width: 0.02, height: 0.04 },
      { char: 'π', x: 0.56, y: 0.5, width: 0.02, height: 0.04 },
      { char: 'G', x: 0.59, y: 0.5, width: 0.03, height: 0.06 },
      { char: '/', x: 0.63, y: 0.5, width: 0.01, height: 0.06 },
      { char: 'c', x: 0.65, y: 0.5, width: 0.02, height: 0.04 },
      { char: '4', x: 0.67, y: 0.47, width: 0.02, height: 0.02 },
      { char: 'T', x: 0.70, y: 0.5, width: 0.04, height: 0.06 },
      { char: 'μ', x: 0.74, y: 0.48, width: 0.02, height: 0.04 },
      { char: 'ν', x: 0.76, y: 0.48, width: 0.02, height: 0.04 }
    ];
    
    // 为每个字符创建像素点
    const pixelGrid = [];
    const pixelsPerChar = 40; // 每个字符的像素数量
    
    // 为每个字符创建像素
    equationChars.forEach(charObj => {
      // 计算字符的实际位置和大小
      const charX = charObj.x * canvasWidth;
      const charY = charObj.y * canvasHeight;
      const charWidth = charObj.width * canvasWidth;
      const charHeight = charObj.height * canvasHeight;
      
      // 为每个字符创建像素
      for (let i = 0; i < pixelsPerChar; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        
        // 随机初始位置（整个画布范围内）
        const initialX = Math.random() * canvasWidth;
        const initialY = Math.random() * canvasHeight;
        
        // 目标位置（字符区域内，带有一些随机性以形成字符形状）
        const targetX = charX + (Math.random() * charWidth);
        const targetY = charY + (Math.random() * charHeight);
        
        // 设置初始位置
        pixel.style.left = `${initialX}px`;
        pixel.style.top = `${initialY}px`;
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        pixel.style.opacity = Math.random() * 0.5 + 0.3;
        
        // 随机颜色
        const colorIndex = Math.floor(Math.random() * colors.length);
        pixel.style.backgroundColor = colors[colorIndex];
        
        // 存储原始位置和目标位置
        pixel.originalX = initialX;
        pixel.originalY = initialY;
        pixel.targetX = targetX;
        pixel.targetY = targetY;
        pixel.charIndex = equationChars.indexOf(charObj); // 记录字符索引，用于分组动画
        
        canvas.appendChild(pixel);
        pixelGrid.push(pixel);
      }
    });
    
    // 鼠标交互变量
    let lastMouseX = 0;
    let swipeCount = 0;
    let lastDirection = 0; // 0: 无方向, 1: 向右, -1: 向左
    const swipeThreshold = canvasWidth / 10; // 滑动阈值
    const requiredSwipes = 6; // 需要的滑动次数（三个来回）
    
    // 添加初始动画效果 - 显示约5%的方程
    setTimeout(() => {
      updatePixels(pixelGrid, 0.05);
    }, 500);
    
    // 鼠标移动事件
    canvas.addEventListener('mousemove', function(e) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      
      // 检测滑动方向变化
      if (Math.abs(mouseX - lastMouseX) > swipeThreshold) {
        const currentDirection = mouseX > lastMouseX ? 1 : -1;
        
        // 如果方向改变，计数增加
        if (lastDirection !== 0 && currentDirection !== lastDirection) {
          swipeCount++;
          
          // 根据滑动次数更新进度
          const progress = Math.min(1, swipeCount / requiredSwipes);
          updatePixels(pixelGrid, progress);
        }
        
        lastDirection = currentDirection;
        lastMouseX = mouseX;
      }
      
      // 如果已经完成所有滑动，保持100%进度
      if (swipeCount >= requiredSwipes) {
        updatePixels(pixelGrid, 1);
      }
    });
    
    // 重置功能 - 当用户点击画布时，像素回到原始随机位置
    canvas.addEventListener('click', function() {
      swipeCount = 0;
      lastDirection = 0;
      
      pixelGrid.forEach(pixel => {
        // 重置到随机位置
        const newX = Math.random() * canvasWidth;
        const newY = Math.random() * canvasHeight;
        
        pixel.style.left = `${newX}px`;
        pixel.style.top = `${newY}px`;
        pixel.style.opacity = Math.random() * 0.5 + 0.3;
        
        // 更新原始位置
        pixel.originalX = newX;
        pixel.originalY = newY;
        
        // 随机颜色
        const colorIndex = Math.floor(Math.random() * colors.length);
        pixel.style.backgroundColor = colors[colorIndex];
      });
      
      // 重置后显示约5%的方程
      setTimeout(() => {
        updatePixels(pixelGrid, 0.05);
      }, 100);
    });
    
    // 更新像素位置和样式的函数
    function updatePixels(pixelGrid, progress) {
      // 按字符索引对像素进行分组，以便按顺序显示
      const charCount = equationChars.length;
      const charsToShow = Math.ceil(charCount * progress);
      
      pixelGrid.forEach(pixel => {
        // 确定此像素是否应该移动到目标位置
        const shouldMove = pixel.charIndex < charsToShow;
        
        if (shouldMove) {
          // 计算当前位置（从原始位置向目标位置过渡）
          const currentX = pixel.originalX + (pixel.targetX - pixel.originalX) * 1; // 完全移动到目标位置
          const currentY = pixel.originalY + (pixel.targetY - pixel.originalY) * 1;
          
          // 应用位置
          pixel.style.left = `${currentX}px`;
          pixel.style.top = `${currentY}px`;
          
          // 增加不透明度
          pixel.style.opacity = 0.8;
          
          // 颜色变深
          pixel.style.backgroundColor = '#000';
        } else {
          // 保持在原始位置，但可能有轻微移动以示活跃
          const jitterX = pixel.originalX + (Math.random() - 0.5) * 5;
          const jitterY = pixel.originalY + (Math.random() - 0.5) * 5;
          
          pixel.style.left = `${jitterX}px`;
          pixel.style.top = `${jitterY}px`;
        }
      });
    }
  }
</script> 
---
layout: default
title: 关于我
permalink: /about/
---

<div class="about-container">
  <h1>关于我</h1>
  
  <div class="line"></div>
  
  <div class="about-content">
    <div class="about-section">
      <h2>个人简介</h2>
      <p>
        大家好，我是冯菁源。我对技术和创新充满热情，特别是在网站开发和数据分析领域。
        我喜欢探索新技术，解决复杂问题，并创造有意义的项目。
      </p>
    </div>
    
    <div class="about-section">
      <h2>专业技能</h2>
      <ul class="skills-list">
        <li>
          <span class="skill-name">Web开发</span>
          <div class="skill-bar">
            <div class="skill-level" style="width: 90%"></div>
          </div>
        </li>
        <li>
          <span class="skill-name">数据分析</span>
          <div class="skill-bar">
            <div class="skill-level" style="width: 85%"></div>
          </div>
        </li>
        <li>
          <span class="skill-name">项目管理</span>
          <div class="skill-bar">
            <div class="skill-level" style="width: 80%"></div>
          </div>
        </li>
        <li>
          <span class="skill-name">UI/UX设计</span>
          <div class="skill-bar">
            <div class="skill-level" style="width: 75%"></div>
          </div>
        </li>
      </ul>
    </div>
    
    <div class="about-section">
      <h2>教育背景</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">2018 - 2022</div>
          <div class="timeline-content">
            <h3>计算机科学学士</h3>
            <p>某大学</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="about-section">
      <h2>工作经历</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">2022 - 至今</div>
          <div class="timeline-content">
            <h3>Web开发工程师</h3>
            <p>某科技公司</p>
            <ul>
              <li>负责公司网站的开发和维护</li>
              <li>优化用户体验和网站性能</li>
              <li>与设计团队合作实现新功能</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="about-section">
      <h2>兴趣爱好</h2>
      <p>
        除了专业工作外，我还喜欢：
      </p>
      <ul>
        <li>阅读技术书籍和科幻小说</li>
        <li>探索新的编程语言和框架</li>
        <li>旅行和摄影</li>
        <li>参与开源项目</li>
      </ul>
    </div>
  </div>
</div>

<style>
  .about-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .about-section {
    margin-bottom: 40px;
  }
  
  .skills-list {
    list-style: none;
    padding: 0;
  }
  
  .skills-list li {
    margin-bottom: 15px;
  }
  
  .skill-name {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .skill-bar {
    height: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .skill-level {
    height: 100%;
    background-color: #000;
  }
  
  .timeline {
    position: relative;
    padding-left: 30px;
  }
  
  .timeline:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: #000;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 30px;
  }
  
  .timeline-item:before {
    content: '';
    position: absolute;
    left: -34px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #000;
  }
  
  .timeline-date {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .timeline-content {
    padding-left: 10px;
  }
  
  .timeline-content h3 {
    margin-top: 0;
    margin-bottom: 5px;
  }
</style> 
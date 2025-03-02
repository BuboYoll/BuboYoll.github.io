---
layout: default
title: 首页
---

<div class="home-container">
  <h1 class="home-title">冯菁源</h1>
  
  <div class="line"></div>
  
  <p class="home-description">
    欢迎来到我的个人网站。这是一个展示我的项目、想法和经历的空间。
  </p>
  
  <div class="home-links">
    <a href="{{ '/about' | relative_url }}">关于我</a>
    <a href="{{ '/blog' | relative_url }}">博客</a>
  </div>
</div>

<script>
  // 添加首页特有的动画效果
  document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.home-title');
    const description = document.querySelector('.home-description');
    const links = document.querySelector('.home-links');
    
    setTimeout(() => {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
      description.style.opacity = '1';
      description.style.transform = 'translateY(0)';
    }, 300);
    
    setTimeout(() => {
      links.style.opacity = '1';
      links.style.transform = 'translateY(0)';
    }, 500);
  });
</script> 
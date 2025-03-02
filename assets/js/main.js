document.addEventListener('DOMContentLoaded', function() {
  // 添加页面过渡效果
  addPageTransitions();
  
  // 添加技能条动画
  animateSkillBars();
  
  // 添加滚动动画
  addScrollAnimations();
  
  // 添加打字机效果
  if (document.querySelector('.home-title')) {
    typeWriterEffect(document.querySelector('.home-title'), 100);
  }
});

// 添加页面过渡效果
function addPageTransitions() {
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    // 只处理站内链接
    if (link.hostname === window.location.hostname) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // 忽略锚点链接
        if (href.startsWith('#')) return;
        
        e.preventDefault();
        
        // 页面淡出效果
        document.body.style.opacity = 0;
        document.body.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        
        // 延迟导航以显示过渡效果
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    }
  });
  
  // 页面加载时的淡入效果
  window.addEventListener('load', function() {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      document.body.style.opacity = 1;
    }, 100);
  });
}

// 添加技能条动画
function animateSkillBars() {
  const skillLevels = document.querySelectorAll('.skill-level');
  
  if (skillLevels.length === 0) return;
  
  // 设置初始宽度为0
  skillLevels.forEach(level => {
    level.style.width = '0';
  });
  
  // 创建Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 获取原始宽度
        const targetWidth = entry.target.getAttribute('style').split('width:')[1].split(';')[0].trim();
        
        // 重置宽度为0
        entry.target.style.width = '0';
        
        // 动画到目标宽度
        setTimeout(() => {
          entry.target.style.width = targetWidth;
        }, 100);
        
        // 取消观察
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  // 开始观察所有技能条
  skillLevels.forEach(level => {
    observer.observe(level);
  });
}

// 添加滚动动画
function addScrollAnimations() {
  // 获取所有需要动画的元素
  const animatedElements = document.querySelectorAll('.about-section, .blog-post, .timeline-item');
  
  if (animatedElements.length === 0) return;
  
  // 创建Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // 设置初始样式并开始观察
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(element);
  });
}

// 打字机效果
function typeWriterEffect(element, speed) {
  const text = element.textContent;
  element.textContent = '';
  element.style.opacity = '1';
  
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
} 
document.addEventListener('DOMContentLoaded', function() {
  // 添加几何元素
  addGeometricElements();
  
  // 添加页面过渡效果
  addPageTransitions();
  
  // 添加自定义鼠标指针效果
  addCustomCursor();
  
  // 添加技能条动画
  animateSkillBars();
  
  // 添加滚动动画
  addScrollAnimations();
  
  // 添加打字机效果
  if (document.querySelector('.home-title')) {
    typeWriterEffect(document.querySelector('.home-title'), 100);
  }
});

// 添加几何元素
function addGeometricElements() {
  const container = document.querySelector('.page-content');
  if (!container) return;
  
  // 添加圆形元素
  for (let i = 0; i < 8; i++) {
    const circle = document.createElement('div');
    circle.classList.add('geometric-element', 'circle');
    const size = Math.random() * 100 + 50;
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.style.left = Math.random() * 100 + '%';
    circle.style.top = Math.random() * 100 + '%';
    circle.style.opacity = Math.random() * 0.1;
    container.appendChild(circle);
    
    // 添加浮动动画
    circle.style.animation = `float ${Math.random() * 5 + 5}s ease-in-out infinite`;
    circle.style.animationDelay = `${Math.random() * 5}s`;
  }
  
  // 添加方形元素
  for (let i = 0; i < 8; i++) {
    const square = document.createElement('div');
    square.classList.add('geometric-element', 'square');
    const size = Math.random() * 80 + 30;
    square.style.width = size + 'px';
    square.style.height = size + 'px';
    square.style.left = Math.random() * 100 + '%';
    square.style.top = Math.random() * 100 + '%';
    square.style.opacity = Math.random() * 0.1;
    square.style.transform = `rotate(${Math.random() * 45}deg)`;
    container.appendChild(square);
    
    // 添加浮动动画
    square.style.animation = `float ${Math.random() * 5 + 5}s ease-in-out infinite`;
    square.style.animationDelay = `${Math.random() * 5}s`;
  }
  
  // 添加线条元素
  for (let i = 0; i < 15; i++) {
    const line = document.createElement('div');
    line.classList.add('geometric-element');
    line.style.width = Math.random() * 100 + 50 + 'px';
    line.style.height = '1px';
    line.style.backgroundColor = '#000';
    line.style.left = Math.random() * 100 + '%';
    line.style.top = Math.random() * 100 + '%';
    line.style.transform = `rotate(${Math.random() * 180}deg)`;
    line.style.opacity = Math.random() * 0.1;
    container.appendChild(line);
  }
}

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

// 添加自定义鼠标指针
function addCustomCursor() {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);
  
  const follower = document.createElement('div');
  follower.classList.add('cursor-follower');
  document.body.appendChild(follower);
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let followerX = 0, followerY = 0;
  
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // 鼠标悬停在链接上时的效果
  const links = document.querySelectorAll('a, button, input[type="submit"], .post-category');
  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.border = '1px solid #ff3333';
      follower.style.transform = 'translate(-50%, -50%) scale(0.5)';
      follower.style.backgroundColor = '#ffcc00';
    });
    
    link.addEventListener('mouseleave', function() {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.border = '1px solid #000000';
      follower.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.backgroundColor = '#ff3333';
    });
  });
  
  // 平滑跟随效果
  function animate() {
    // 平滑跟随鼠标
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    
    requestAnimationFrame(animate);
  }
  
  animate();
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
  
  setTimeout(type, 500);
} 
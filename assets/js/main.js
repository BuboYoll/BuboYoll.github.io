document.addEventListener('DOMContentLoaded', function() {
  // 添加几何元素
  addGeometricElements();
  
  // 添加页面过渡效果
  addPageTransitions();
  
  // 添加鼠标跟随效果
  addMouseFollowEffect();
});

// 添加几何元素
function addGeometricElements() {
  const container = document.querySelector('.page-content');
  if (!container) return;
  
  // 添加圆形元素
  for (let i = 0; i < 5; i++) {
    const circle = document.createElement('div');
    circle.classList.add('geometric-element', 'circle');
    circle.style.width = Math.random() * 100 + 50 + 'px';
    circle.style.height = circle.style.width;
    circle.style.left = Math.random() * 100 + '%';
    circle.style.top = Math.random() * 100 + '%';
    container.appendChild(circle);
  }
  
  // 添加方形元素
  for (let i = 0; i < 5; i++) {
    const square = document.createElement('div');
    square.classList.add('geometric-element', 'square');
    square.style.width = Math.random() * 100 + 50 + 'px';
    square.style.height = square.style.width;
    square.style.left = Math.random() * 100 + '%';
    square.style.top = Math.random() * 100 + '%';
    container.appendChild(square);
  }
}

// 添加页面过渡效果
function addPageTransitions() {
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    // 只处理站内链接
    if (link.hostname === window.location.hostname) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        
        // 页面淡出效果
        document.body.style.opacity = 0;
        document.body.style.transition = 'opacity 0.5s ease';
        
        // 延迟导航以显示过渡效果
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    }
  });
}

// 添加鼠标跟随效果
function addMouseFollowEffect() {
  const cursor = document.createElement('div');
  cursor.style.position = 'fixed';
  cursor.style.width = '20px';
  cursor.style.height = '20px';
  cursor.style.borderRadius = '50%';
  cursor.style.border = '1px solid #000';
  cursor.style.pointerEvents = 'none';
  cursor.style.transform = 'translate(-50%, -50%)';
  cursor.style.zIndex = '9999';
  cursor.style.transition = 'transform 0.1s ease';
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  // 鼠标悬停在链接上时的效果
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    });
    
    link.addEventListener('mouseleave', function() {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.backgroundColor = 'transparent';
    });
  });
} 
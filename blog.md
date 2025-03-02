---
layout: default
title: 博客
permalink: /blog/
---

<div class="blog-container">
  <h1 class="page-title">博客</h1>
  
  <div class="line"></div>
  
  <div class="blog-header">
    <p class="blog-intro">
      这里是我分享想法、经验和项目的地方。通过文字记录我的技术探索和创意思考。
    </p>
    
    <div class="blog-categories">
      <span class="category-tag active" data-category="all">全部</span>
      <span class="category-tag" data-category="技术">技术</span>
      <span class="category-tag" data-category="博客">博客</span>
      <span class="category-tag" data-category="项目">项目</span>
    </div>
  </div>
  
  <div class="blog-posts">
    {% for post in site.posts %}
      <article class="blog-post" data-categories="{{ post.categories | join: ',' }}">
        <div class="post-date">
          <span class="post-day">{{ post.date | date: "%d" }}</span>
          <span class="post-month">{{ post.date | date: "%b" }}</span>
          <span class="post-year">{{ post.date | date: "%Y" }}</span>
        </div>
        
        <div class="post-content">
          <h2 class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>
          
          <div class="post-meta">
            {% if post.categories.size > 0 %}
              <div class="post-categories">
                {% for category in post.categories %}
                  <span class="post-category">{{ category }}</span>
                {% endfor %}
              </div>
            {% endif %}
            
            <span class="post-reading-time">
              {% assign words = post.content | number_of_words %}
              {% if words < 360 %}
                1 分钟阅读
              {% else %}
                {{ words | divided_by: 180 }} 分钟阅读
              {% endif %}
            </span>
          </div>
          
          <div class="post-excerpt">
            {{ post.excerpt }}
          </div>
          
          <a href="{{ post.url | relative_url }}" class="read-more">
            阅读更多
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </article>
    {% endfor %}
  </div>
  
  {% if site.posts.size == 0 %}
    <div class="no-posts">
      <div class="no-posts-icon">📝</div>
      <p>暂时没有博客文章。请稍后再来查看！</p>
    </div>
  {% endif %}
</div>

<style>
  .page-title {
    font-size: 3em;
    margin-bottom: 30px;
    position: relative;
  }
  
  .blog-header {
    margin-bottom: 60px;
  }
  
  .blog-intro {
    font-size: 1.5em;
    margin-bottom: 30px;
    max-width: 800px;
    position: relative;
    padding-left: 20px;
    border-left: 5px solid #ffcc00;
  }
  
  .blog-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 40px;
  }
  
  .category-tag {
    padding: 8px 16px;
    border: 1px solid #eee;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9em;
  }
  
  .category-tag:hover {
    background-color: #f5f5f5;
  }
  
  .category-tag.active {
    background-color: #000;
    color: #fff;
    border-color: #000;
  }
  
  .blog-post {
    display: flex;
    margin-bottom: 70px;
    padding-bottom: 40px;
    border-bottom: 1px solid #eee;
    position: relative;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .blog-post:hover {
    transform: translateX(10px);
  }
  
  .blog-post:before {
    content: '';
    position: absolute;
    width: 3px;
    height: 0;
    background-color: #ff3333;
    left: -20px;
    top: 0;
    transition: height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .blog-post:hover:before {
    height: 100%;
  }
  
  .post-date {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-width: 80px;
    margin-right: 30px;
    padding-top: 5px;
  }
  
  .post-day {
    font-size: 2em;
    font-weight: 700;
    line-height: 1;
  }
  
  .post-month {
    font-size: 1em;
    text-transform: uppercase;
    margin: 5px 0;
  }
  
  .post-year {
    font-size: 0.9em;
    color: #666;
  }
  
  .post-content {
    flex: 1;
  }
  
  .post-title {
    margin-bottom: 15px;
    font-size: 1.8em;
  }
  
  .post-title a {
    color: #000;
    text-decoration: none;
    transition: color 0.3s ease;
    position: relative;
    display: inline-block;
  }
  
  .post-title a:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ff3333;
    transition: width 0.3s ease;
  }
  
  .post-title a:hover {
    color: #ff3333;
  }
  
  .post-title a:hover:after {
    width: 100%;
  }
  
  .post-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 20px;
    font-size: 0.9em;
    color: #666;
  }
  
  .post-categories {
    display: flex;
    gap: 8px;
  }
  
  .post-category {
    padding: 3px 10px;
    background-color: #f0f0f0;
    border-radius: 20px;
    transition: all 0.3s ease;
  }
  
  .post-category:hover {
    background-color: #ffcc00;
    color: #000;
  }
  
  .post-reading-time {
    display: flex;
    align-items: center;
  }
  
  .post-reading-time:before {
    content: '⏱️';
    margin-right: 5px;
  }
  
  .post-excerpt {
    margin-bottom: 25px;
    line-height: 1.8;
    color: #333;
  }
  
  .read-more {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    color: #000;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .read-more:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 5px;
    left: 0;
    background-color: #000;
    transition: all 0.3s ease;
  }
  
  .read-more:hover {
    color: #ff3333;
  }
  
  .read-more:hover:after {
    background-color: #ff3333;
  }
  
  .read-more svg {
    transition: transform 0.3s ease;
  }
  
  .read-more:hover svg {
    transform: translateX(5px);
  }
  
  .no-posts {
    padding: 50px;
    background-color: #f9f9f9;
    border-radius: 5px;
    text-align: center;
    margin-top: 30px;
  }
  
  .no-posts-icon {
    font-size: 3em;
    margin-bottom: 20px;
  }
  
  /* 响应式调整 */
  @media (max-width: 768px) {
    .blog-post {
      flex-direction: column;
    }
    
    .post-date {
      flex-direction: row;
      margin-right: 0;
      margin-bottom: 20px;
      gap: 10px;
    }
    
    .post-day, .post-month, .post-year {
      font-size: 1em;
    }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // 分类过滤功能
    const categoryTags = document.querySelectorAll('.category-tag');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    categoryTags.forEach(tag => {
      tag.addEventListener('click', function() {
        // 更新活跃状态
        categoryTags.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        // 过滤文章
        blogPosts.forEach(post => {
          if (category === 'all') {
            post.style.display = 'flex';
            setTimeout(() => {
              post.style.opacity = '1';
              post.style.transform = 'translateX(0)';
            }, 10);
          } else {
            const postCategories = post.getAttribute('data-categories').split(',');
            if (postCategories.includes(category)) {
              post.style.display = 'flex';
              setTimeout(() => {
                post.style.opacity = '1';
                post.style.transform = 'translateX(0)';
              }, 10);
            } else {
              post.style.opacity = '0';
              post.style.transform = 'translateX(-20px)';
              setTimeout(() => {
                post.style.display = 'none';
              }, 300);
            }
          }
        });
      });
    });
    
    // 添加滚动动画
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    blogPosts.forEach((post, index) => {
      post.style.opacity = '0';
      post.style.transform = 'translateY(30px)';
      post.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ' + (index * 0.1) + 's, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ' + (index * 0.1) + 's';
      observer.observe(post);
    });
    
    // 添加可见性类
    document.querySelectorAll('.blog-post.visible').forEach(post => {
      post.style.opacity = '1';
      post.style.transform = 'translateY(0)';
    });
  });
</script> 
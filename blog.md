---
layout: default
title: 博客
permalink: /blog/
---

<div class="blog-container">
  <h1>博客</h1>
  
  <div class="line"></div>
  
  <p class="blog-intro">
    这里是我分享想法、经验和项目的地方。
  </p>
  
  <div class="blog-posts">
    {% for post in site.posts %}
      <article class="blog-post">
        <h2 class="post-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <div class="post-meta">
          <span class="post-date">{{ post.date | date: "%Y年%m月%d日" }}</span>
          {% if post.categories.size > 0 %}
            <span class="post-categories">
              分类：
              {% for category in post.categories %}
                <span class="post-category">{{ category }}</span>
              {% endfor %}
            </span>
          {% endif %}
        </div>
        <div class="post-excerpt">
          {{ post.excerpt }}
        </div>
        <a href="{{ post.url | relative_url }}" class="read-more">阅读更多</a>
      </article>
    {% endfor %}
  </div>
  
  {% if site.posts.size == 0 %}
    <div class="no-posts">
      <p>暂时没有博客文章。请稍后再来查看！</p>
    </div>
  {% endif %}
</div>

<style>
  .blog-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .blog-intro {
    margin-bottom: 40px;
    font-size: 1.2em;
  }
  
  .blog-post {
    margin-bottom: 50px;
    padding-bottom: 30px;
    border-bottom: 1px solid #eee;
  }
  
  .post-title {
    margin-bottom: 10px;
  }
  
  .post-title a {
    color: #000;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .post-title a:hover {
    color: #555;
  }
  
  .post-meta {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 15px;
  }
  
  .post-category {
    display: inline-block;
    margin-right: 5px;
    padding: 2px 8px;
    background-color: #f0f0f0;
    border-radius: 3px;
  }
  
  .post-excerpt {
    margin-bottom: 15px;
  }
  
  .read-more {
    display: inline-block;
    padding: 5px 15px;
    border: 1px solid #000;
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .read-more:hover {
    background-color: #000;
    color: #fff;
  }
  
  .no-posts {
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 5px;
    text-align: center;
  }
</style> 
---
layout: blog
title: Blog
permalink: /blog/
order: 1
---

<div class="row marketing">
    {% for post in site.posts %}
        <div class="post col-lg-12">
            <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
            <h4>{{ post.date | date_to_long_string }}</h4>
            <span class="description">{{ include.post.description }}</span>
            {{ post.excerpt | markdownify }}
            <p>
              <a href="{{ post.url }}">Read Post &raquo;</a>
            </p>
        </div>
    {% endfor %}
</div>
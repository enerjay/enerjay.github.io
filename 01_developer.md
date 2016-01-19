---
layout: page
title: Developer
permalink: /developer/
---



<div class="home">
    <div class="row">
        {% for post in site.posts %}
            <div class="three columns">
                
                <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>

                    
                    <a href="{{ post.url | prepend: site.baseurl }}"><img src="../img/portfolio/{{ post.img }}"></a>
            </div>
        {% endfor %}
    </div>
</div>

  
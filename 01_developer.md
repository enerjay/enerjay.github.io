---
layout: page
title: Developer
permalink: /developer/
---
<div class="home">
    <div class="row flex">
        {% for post in site.categories.developer %}
            <div class="three columns" style="margin-left: 10px;">
                
                <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>

                    
                    <a href="{{ post.url | prepend: site.baseurl }}"><img src="../img/portfolio/{{ post.img }}"></a>
            </div>
        {% endfor %}
    </div>
</div>

  
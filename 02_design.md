---
layout: page
title: Designer
permalink: /designer/


---

<div class="home">
    <div class="row">
        {% for post in site.categories.Designer %}
            <div class="three columns">
                
                <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>

                    
                    <a href="{{ post.url | prepend: site.baseurl }}"><img class="gall:hover" src="../img/portfolio/{{ post.img }}"></a>
            </div>
        {% endfor %}
    </div>
</div>

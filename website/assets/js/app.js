// Load blog posts
async function loadBlogPosts() {
    const response = await fetch('/blog/index.json');
    const posts = await response.json();
    
    let html = '';
    posts.forEach(post => {
        html += `
            <article class="blog-post">
                <h3>${post.title}</h3>
                <time>${new Date(post.date).toLocaleDateString()}</time>
                <div class="post-content">${marked.parse(post.body)}</div>
            </article>
        `;
    });
    
    document.getElementById('blog-posts').innerHTML = html;
}

loadBlogPosts();
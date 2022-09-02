let page = 1;

const getPost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
  return response.json();
};

const addPostsIntoDOM = async () => {
  const posts = await getPost();
  const postsTemplate = posts.map(item =>`
  <div class="post">
    <div class="number">${item.id}</div>
    <div class="post-info">
      <h2 class="post-title">${item.title}</h2>
      <p class="post-body">${item.body}</p>
    </div>
  </div>` 
  );
};

addPostsIntoDOM();
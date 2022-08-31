let page = 1;

const getPost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
  return response.json();
};

const addPostsIntoDOM = async () => {
  const posts = await getPost();
  
};

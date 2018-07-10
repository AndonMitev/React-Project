import crud from "./crud";

const post = (() => {
  const createPost = ({ title, description, imageUrl }) => {
    crud
      .post("app", "POST", "kinvey", "posts", {
        title,
        description,
        imageUrl
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };
  const getPosts = () => {
    return crud.get("app", "GET", "kinvey", "posts")
  };

  const getSinglePost = postId => {
    return crud.get('app', 'GET', 'kinvey', `posts/${postId}`)
  }

  return {
    createPost,
    getPosts,
    getSinglePost
  };
})();

export default post;

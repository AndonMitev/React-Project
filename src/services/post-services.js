import crud from "./crud";
import userServices from "./user-services";

const post = (() => {
  const createPost = ({ title, description, imageUrl }) =>
    crud.post("app", "kinvey", "posts", {
      title,
      description,
      imageUrl,
      createdBy: localStorage.getItem("username")
    });

  const getPosts = () =>
    crud.get("app", "kinvey", `posts?query={}&sort={"_kmd.ect": -1}`);

  const getSinglePost = postId => crud.get("app", "kinvey", `posts/${postId}`);

  const editPost = (postId, data) =>
    crud.update(
      "app",
      userServices.isAdmin() ? "master" : "kinvey",
      `posts/${postId}`,
      data
    );

  const deletePost = postId =>
    crud.remove(
      "app",
      userServices.isAdmin() ? "master" : "kinvey",
      `posts/${postId}`
    );

  const myPosts = userId =>
    crud.get(
      "appdata",
      "kinvey",
      `posts?query={"_acl.creator":"${userId}"}&sort={"_kmd.ect": -1}`
    );

  return {
    createPost,
    getPosts,
    getSinglePost,
    editPost,
    deletePost,
    myPosts
  };
})();

export default post;

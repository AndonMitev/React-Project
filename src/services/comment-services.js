import crud from "./crud";
import userServices from "./user-services";

const comment = (() => {
  const createComment = (postId, content) =>
    crud.post("app", "kinvey", "comments", {
      postId,
      content,
      createdBy: localStorage.getItem("username")
    });

  const getComments = postId =>
    crud.get("app", "kinvey", `comments?query={"postId":"${postId}"}`);

  const deleteComment = commentId =>
    crud.remove(
      "app",
      userServices.isAdmin() ? "master" : "kinvey",
      `comments/${commentId}`
    );

  return {
    getComments,
    createComment,
    deleteComment
  };
})();

export default comment;

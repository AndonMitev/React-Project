import crud from "./crud";

const post = (() => {
  const createPost = async ({ title, description, imageUrl }) => {
    try {
      const success = await crud.post("app", "POST", "kinvey", "posts", {
        title,
        description,
        imageUrl
      });
      console.log("Success", success);
    } catch (err) {
      console.log("Error COME HERE: ", err);
    }
  };
  const getPosts = async () => {
    try {
      const success = await crud.get("app", "POST", "kinvey", "posts")
      if(success.error) {
        console.log('Error', success.error);
      } else {
        console.log('Success', success);
      }
    } catch(error) {
      return error;
    }
    
    
  };

  return {
    createPost,
    getPosts
  };
})();

export default post;

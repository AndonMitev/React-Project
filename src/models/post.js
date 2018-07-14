import { toast } from "react-toastify";

export default {
  defaultState: { title: "", imageUrl: "", description: "" },

  validatePostState: obj => {
    const { title, imageUrl, description } = obj;

    if (!title || title.length < 3) {
      return toast.error(
        "Title is required and should be atleast 3 symbols long",
        {
          position: toast.POSITION.TOP_RIGHT
        }
      );
    }

    if (!imageUrl) {
      return toast.error("Image url is required", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if (!description || description.length < 10) {
      return toast.error(
        "Description is required and should be atleast 10 symbols long",
        {
          position: toast.POSITION.TOP_RIGHT
        }
      );
    }
  }
};

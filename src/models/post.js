import { toast } from "react-toastify";

export default {
  //Generate default state props for HOC to handle
  defaultState: { title: "", imageUrl: "", description: "" },

   //Generate validation on props for HOC to handle
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

    if (title.length > 40) {
      return toast.error("Title cannot be more than 40 symbols long", {
        position: toast.POSITION.TOP_RIGHT
      });
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

    if (description.length > 3500) {
      return toast.error("Description cannot be more than 3500 symbols long", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

  }
};

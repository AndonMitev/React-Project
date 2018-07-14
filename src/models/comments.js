import { toast } from "react-toastify";
export default {
  defaultState: { content: "" },

  validateCommentState: obj => {
    const { content } = obj;

    if (!content || content.length < 3) {
      return toast.error(
        "Comment content is required and should be atleast 3 symbols long",
        {
          position: toast.POSITION.TOP_RIGHT
        }
      );
    }
  }
};

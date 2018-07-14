import { toast } from "react-toastify";
export default {
  //Generate default state props for HOC to handle
  defaultState: { content: "" },

  //Generate validation on props for HOC to handle
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

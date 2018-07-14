import React, { Component } from "react";
import commentServices from "../../services/comment-services";
import isAdmin from "../../services/user-services";
import { toast } from "react-toastify";

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  deleteComment = () => {
    const id = this.props.data._id;
    commentServices
      .deleteComment(id)
      .then(() => {
        toast.success("Comment succesful deleted.", {
          position: toast.POSITION.TOP_RIGHT
        });
        this.props.updateParent();
      })
      .catch(err =>
        toast.catch(err.error, {
          position: toast.POSITION.TOP_RIGHT
        })
      );
  };

  render = () => (
    <div className="list-group-item list-group-item-action offset-2 col-md-8 mt-2">
      <p className="text-justify"><em>{this.props.data.content}</em></p>
      <div className="info" />
      {isAdmin.isAdmin() ||
      localStorage.getItem("userId") === this.props.data._acl.creator ? (
        <button
          className="btn btn-danger float-right"
          onClick={this.deleteComment}
        >
          Delete
        </button>
      ) : null}

      <p className="text-justify">
        <strong>
          Posted by: <em>{this.props.data.createdBy}</em> at:{" "}
          {this.props.data._kmd.ect}
        </strong>
      </p>
    </div>
  );
}

export default Comment;

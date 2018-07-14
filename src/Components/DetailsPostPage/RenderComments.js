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

  render() {
    return (
      <article className="list-group-item list-group-item-action offset-2 col-md-8 mt-2">
        <p className="text-justify">{this.props.data.content}</p>
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
          <strong>Posted by: {this.props.data.createdBy} at: Today</strong>
        </p>
      </article>
    );
  }
}

export default Comment;

/*submitted {this.props.data.daysPast} ago by {this.props.data.author} |
          {localStorage.getItem("username") === this.props.data.author ? (
            <a href="#" className="deleteLink" onClick={this.deleteComment}>
              {" "}
              delete
            </a>
          ) : null} */

import React, { Component } from "react";
import RenderDetails from "./RenderDetails";
import Comment from "./RenderComments";
import postServices from "../../services/post-services";
import commentServices from "../../services/comment-services";
import TextArea from "../common/TextArea";
import Input from "../common/InputForForm";
import { toast } from "react-toastify";

export default class DetailsPostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      comments: [],
      newComment: ""
    };
  }

  componentDidMount = () => {
    const postId = this.props.match.params.id;
    postServices.getSinglePost(postId).then(post => {
      commentServices.getComments(postId).then(comments => {
        comments = comments.map(comment => {
          return comment;
        });
        this.setState({ post: post, comments: comments });
      });
    });
  };

  handleInputOnChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleFormOnSubmit = event => {
    event.preventDefault();
    const postId = this.state.post._id;
    const content = this.state.newComment;

    commentServices.createComment(postId, content).then(commentInfo => {
      this.state.comments.push(commentInfo);
      toast.success("New comment successful added.", {
        position: toast.POSITION.TOP_RIGHT
      });
      this.setState(prevState => ({
        comments: prevState.comments,
        newComment: ""
      }));
    });
  };

  updateParent = () => {
    const postId = this.props.match.params.id;
    postServices.getSinglePost(postId).then(post => {
      commentServices.getComments(postId).then(comments => {
        comments = comments.map(comment => {
          return comment;
        });

        this.setState({ post: post, comments: comments });
      });
    });
  };

  render = () => {
    return (
      <div className="container">
        <RenderDetails {...this.props} />
        <h2 className="col">Comments</h2>
        <div className="row">
          {this.state.comments.map(c => {
            return (
              <Comment
                data={c}
                key={c._id}
                updateParent={this.updateParent}
                className="list-group"
                {...this.props}
              />
            );
          })}
        </div>
        <h2>Create your comment</h2>
        <div>
          <form onSubmit={this.handleFormOnSubmit} className="mt-3">
            <TextArea
              name="newComment"
              onChange={this.handleInputOnChange}
              value={this.state.newComment}
              className="form-control fixSize"
              placeholder="Your comment content goes here"
            />
            <Input
              type="submit"
              value="Add Comment"
              className="float-right mt-2 btn btn-primary"
            />
          </form>
        </div>
      </div>
    );
  };
}

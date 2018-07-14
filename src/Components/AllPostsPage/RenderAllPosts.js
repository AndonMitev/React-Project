import React, { Component } from "react";
import { Link } from "react-router-dom";
import withLoading from "../../hoc/withLoading";
import postRequester from "../../services/post-services";
import "./Posts.css";

class RenderAllPosts extends Component {
  render = () => {
    let allPosts = this.props.data;

    const postsToSearch = this.props.postsToSearch;
    let searchedItem = this.props.postsToSearch.title;

    if (postsToSearch.posts.length !== 0) {
      allPosts = postsToSearch.posts;
    }

    if (searchedItem.length !== 0 && postsToSearch.posts.length === 0) {
      return (
        <h2>
          No results were found for <strong>"{searchedItem}"</strong>
        </h2>
      );
    }

    return (
      <div className="container">
        <h1 className="display-4 text-center">All Posts</h1>
        <hr />
        {searchedItem.length !== 0 ? (
          <h2>
            Showing results for <strong>"{searchedItem}"</strong>
          </h2>
        ) : null}
        <div className="card-deck">
          {allPosts.map(e => {
            return (
              <div
                className="col-lg-4 d-flex align-items-stretch mt-2"
                key={e._id}
              >
                <div className="card border-dark shadow-lg mb-3 rounded">
                  <img
                    className="card-img-top fixImg"
                    src={e.imageUrl}
                    alt={e.title}
                  />
                  <div className="card-body bg-light">
                    <h5 className="card-title">{e.title}</h5>
                  </div>
                  <div className="card-footer bg-dark">
                    <Link
                      to={`/post/details/${e._id}`}
                      className="btn btn-primary float-right"
                    >
                      Read More
                    </Link>
                    <Link
                      to={`/user/${e._acl.creator}`}
                      className="btn btn-warning float-left"
                    >
                      Author: {e.createdBy}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}

export default withLoading(RenderAllPosts, postRequester.getPosts);

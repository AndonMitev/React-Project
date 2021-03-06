import React, { Component } from "react";
import RenderAllPosts from "./RenderAllPosts";
import SearchSection from "./SearchSection";

class AllPostsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      title: ""
    };
  }

  //Handle data from search form and send it to search section so can handle search properly 
  getSearchData = searchData => {
    const { posts, title } = searchData;
    this.setState({ posts, title });
  };

  render = () => {
    return (
      <div>
        <SearchSection {...this.props} getSearchData={this.getSearchData} />
        <RenderAllPosts {...this.props} postsToSearch={this.state} />
      </div>
    );
  };
}

export default AllPostsPage;

import React, { Component } from "react";
import postServices from "../../services/post-services";
import SearchForm from "../common/Forms/SearchForm";

export default class SearchSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      title: ""
    };
  }

  //Getting data from search section and send it to parrent AllPostsPage
  getSearchState = state =>
    postServices
      .getPosts()
      .then(posts => {
        const title = state.title;
        posts = posts.filter(e =>
          e.title.toLowerCase().includes(title.toLowerCase())
        );
        this.setState({ posts, title }, () =>
          this.props.getSearchData(this.state)
        );
      })
      .catch(err => {
        console.log(err);
      });

  render() {
    return (
      <div>
        <SearchForm getSearchState={this.getSearchState} />
      </div>
    );
  }
}

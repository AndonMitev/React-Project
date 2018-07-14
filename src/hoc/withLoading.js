import React, { Component } from "react";

const withLoading = (WrappedComponent, request, hoc) =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isReady: false,
        data: []
      };
    }

    // Depends on GET request by id, username or null
    componentDidMount = () => {
      const id =
        this.props.match.params.id || localStorage.getItem("username") || null;

      request(id).then(data => {
        this.setState({ isReady: true, data });
      });
    };

    // Sending data from get request to parrent component
    render = () =>
      this.state.isReady === true ? (
        <WrappedComponent data={this.state.data} {...this.props} />
      ) : (
        <h1>Loading...</h1>
      );
  };

export default withLoading;

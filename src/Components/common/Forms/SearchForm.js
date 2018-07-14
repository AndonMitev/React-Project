import React, { Component } from "react";
import Input from "../InputForForm";
import FormManager from "../../../hoc/FromManager";
import model from "../../../models/search";

class SearchForm extends Component {
  render = () => {
    const props = this.props.posts || this.props;
    return (
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={this.props.handleFormOnSubmit}>
              <Input
                type="text"
                name="title"
                onChange={this.props.handleInputOnChange}
                value={props.title}
                className="form-control"
                placeholder="Search..."
              />
              <Input
                type="submit"
                value="Search"
                className="btn btn-success mt-1 float-right"
              />
            </form>
          </div>
        </div>
      </div>
    );
  };
}

export default FormManager(SearchForm, model);

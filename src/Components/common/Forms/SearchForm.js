import React from "react";
import Input from "../InputForForm";
import withFormManager from "../../../hoc/FromManager";
import model from "../../../models/search";

const SearchForm = props => {
  return (
    <div className="container mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={props.handleFormOnSubmit}>
            <Input
              type="text"
              name="title"
              onChange={props.handleInputOnChange}
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

export default withFormManager(SearchForm, model);

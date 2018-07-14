import React from "react";
import Input from "../InputForForm";
import Label from "../LabelForForm";
import withFormManager from "../../../hoc/FromManager";
import model from "../../../models/userLogin";

const Login = props => {
  return (
    <div className="container">
      <h3 className="display-4 text-center text-secondary">Sing in</h3>
      <hr />
      <div className="row text-center">
        <div className="offset-2 col-sm-8">
          <form onSubmit={props.handleFormOnSubmit} className="form-group">
            <Label name="username" labelName="Username" />
            <Input
              name="username"
              type="text"
              onChange={props.handleInputOnChange}
              value={props.username}
              className="form-control"
              placeholder="John"
            />
            <br />
            <Label name="password" labelName="Password" />
            <Input
              name="password"
              type="password"
              onChange={props.handleInputOnChange}
              value={props.password}
              className="form-control"
              placeholder="******"
            />
            <br />
            <Input
              className="btn btn-success mr-1"
              type="submit"
              value="Sing In"
            />
            <Input className="btn btn-danger" type="reset" value="Reset" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default withFormManager(Login, model);

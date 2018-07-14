import React from "react";
import withLoading from "../../hoc/withLoading";
import postServices from "../../services/post-services";
import { Link } from "react-router-dom";
import "./RenderProfilePage.css";

const RenderProfilePage = props => {
  if (props.data.length === 0) {
    return (
      <div>
        <h1>Dont have any posts created yet</h1>
      </div>
    );
  }
  const userPosts = props.data;
  return (
    <div className="container">
      <hr />
      <ul className="list-group">
        {userPosts.map(e => {
          return (
            <li
              className="list-group-item list-group-item-action mt-5"
              key={e._id}
            >
              <img
                className="float-left fixImg mr-2 mt-3"
                src={e.imageUrl}
                alt={e.title}
              />
              <h4 className="">{e.title}</h4>
              <hr className="col-lg-8 offset-2" />
              <p className="text-justify text-truncate">
                <strong>Content: </strong>
                {e.description}
              </p>
              <Link
                to={`/post/details/${e._id}`}
                className="btn btn-primary float-right mt-5"
              >
                Read More
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default withLoading(RenderProfilePage, postServices.myPosts);

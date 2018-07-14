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
  console.log(props);
  const userPosts = props.data;
  const author = props.data[0].createdBy;
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
                className="float-left fixImg"
                src={e.imageUrl}
                alt={e.title}
              />
              <h5 className="">{e.title}</h5>
              <p>{e.description}</p>
              <Link
                to={`/post/details/${e._id}`}
                className="btn btn-primary float-right"
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

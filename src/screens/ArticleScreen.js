import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { articleDetailsAction } from "../actions/articleActions";
import Spinner from "../components/Spinner";

const ArticleScreen = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(articleDetailsAction(match.params.id));
  }, [dispatch, match]);

  const articleDetails = useSelector((state) => state.articleDetails);
  const { loading, article } = articleDetails;

  return (
    <>
      <Link to="/">Back to List</Link>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h3>Title : {article.title}</h3>
          <p>Description : {article.body}</p>
        </div>
      )}
    </>
  );
};

export default ArticleScreen;

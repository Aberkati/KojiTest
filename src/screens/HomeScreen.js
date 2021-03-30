import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listArticles } from "../actions/articleActions";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

const HomeScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleList);
  const { loading, articles } = articleList;

  useEffect(() => {
    dispatch(listArticles());
  }, [dispatch]);

  // Get current articles
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles?.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);

  // Change page
  const paginate = (pageNumber) => {
    console.log("clicked");
    setCurrentPage(pageNumber);
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {currentPosts &&
            currentPosts.map((article) => (
              <div key={article.id}>
                <Card article={article} />
              </div>
            ))}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={articles.length}
            paginate={paginate}
          />
        </div>
      )}
    </>
  );
};

export default HomeScreen;

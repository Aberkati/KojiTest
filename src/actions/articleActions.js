import axios from "axios";
export const listArticles = () => async (dispatch) => {
  try {
    dispatch({
      type: "ARTICLE_LIST_REQUEST",
    });

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: "ARTICLE_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "ARTICLE_LIST_FAIL",
      payload: err.message,
    });
  }
};

export const articleDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "ARTICLE_DETAILS_REQUEST",
    });

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    dispatch({
      type: "ARTICLE_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "ARTICLE_DETAILS_FAIL",
      payload: err.message,
    });
  }
};

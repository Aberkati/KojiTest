export const articleListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case "ARTICLE_LIST_REQUEST":
      return { loading: true };
    case "ARTICLE_LIST_SUCCESS":
      return {
        loading: false,
        articles: action.payload,
      };
    case "ARTICLE_LIST_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const articleDetailsReducer = (state = { article: {} }, action) => {
  switch (action.type) {
    case "ARTICLE_DETAILS_REQUEST":
      return { loading: true };
    case "ARTICLE_DETAILS_SUCCESS":
      return {
        loading: false,
        article: action.payload,
      };
    case "ARTICLE_DETAILS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

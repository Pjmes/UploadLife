import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  posts = {
    data: [],
    status: "idle",
  },
  action
) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...posts, ...action.payload };
    case LIKE:
      return {
        ...posts,
        data: posts.data.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case CREATE:
      return {
        ...posts,
        data: [...posts.data, action.payload]
      };
    case UPDATE: return {
      ...posts,
      data: posts.data.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    };
    case DELETE: return {
      ...posts,
      data: posts.data.filter((post) => post._id !== action.payload)
    };

    default:
      return posts;
  }
};

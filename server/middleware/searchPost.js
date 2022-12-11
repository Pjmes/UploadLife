import PostMessage from "../models/postMessage.js";

const searchPost = async (req, res, next) => {
  const { searchTag } = req.query;

  try {
    if (searchTag) {
      const searchResult = await PostMessage.find({
        tags: { $regex: searchTag, $options: "i" },
      });

      return res.status(200).json(searchResult);
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default searchPost;

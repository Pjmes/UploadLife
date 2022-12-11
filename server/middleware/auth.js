import jwt from "jsonwebtoken";


//seting authentication for the web token to process the data
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; 

    const isCustomAuth = token?.length < 500;

    let decodedData;

    if (isCustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodedData?.id;
    }

    //FOR IF ADD GOOGLE LATER. .sub to process google auth instead of the .id

    // } else {
    //   decodedData = jwt.decode(token);

    //   req.userId = decodedData?.sub;
    // }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;

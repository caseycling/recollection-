import PostMessage from '../models/postMessage.js';

//Get posts
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

// Create posts
export const createPost = (post) => async (dispatch) => {
  const body = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// export const createPost = async (req, res) => {
//   const { title, message, selectedFile, creator, tags } = req.body;

//   const newPostMessage = new PostMessage({
//     title,
//     message,
//     selectedFile,
//     creator,
//     tags,
//   });

//   try {
//     await newPostMessage.save();

//     res.status(201).json(newPostMessage);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

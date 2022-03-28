import PostMessage from '../models/postMessage.js';

//Get posts
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log('POSTS FROM CONTROLLER');
    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

// Create posts
export const createPost = async (req, res) => {
  const post = req.body;
  console.log(post);
  const newPost = new PostMessage(post);
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (mongoose.Types.objectId.isVlaid(_id)) {
    return res.status(404).send('No post with that id');
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};

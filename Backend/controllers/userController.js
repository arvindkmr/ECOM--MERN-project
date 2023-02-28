import { User } from '../model/userModel.js';

//register a user
export const registerUser = async (req, res, next) => {
//   const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
//     folder: 'avatars',
//     width: 150,
//     crop: 'scale',
//   });

  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
//       public_id: myCloud.public_id,
//       url: myCloud.secure_url,
      public_id: "this is temporary",
      url: "this is temporary",
    },
  });
  res.status(201).json({success: true, user})
  // sendToken(user, 201, res);
};

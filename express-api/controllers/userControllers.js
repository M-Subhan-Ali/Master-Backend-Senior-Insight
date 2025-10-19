import { UserModel } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req , res , next ) => {    //sql controllers by me
 try {   
  console.log("✅ createUser route hit");
   const { name, email , password} = req.body;
   const hashed = await bcrypt.hash(password,10);
   const user = await UserModel.create(name, email , hashed);
   return res.status(200).json({
     message:"user successfully created ",
     user
   })
 } catch (error) {
   next(error);
 }

}


export const getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.getAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};



// export const getUsers = (req, res) => {
//   res.json([{ id: 1, name: "Subhan" }]);
// };

// export const createUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   res.status(201).json({
//     status: "success",
//     message: "User created successfully",
//     data: { name, email },
//   });
// };

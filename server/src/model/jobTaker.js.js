import { Schema } from "mongoose";
import mongoose from "mongoose";

const userModel = {
  user_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    data: Buffer,
    required: true,
  },
  teacher_id: {
    type: Schema.Types.ObjectId,
    ref: "teacherdata",
  },
  is_active: {
    type: String,
    default: 1,
  },
};

let user = null;
const initUserModel = async () => {
  try {
    if (user) return user;
    user = mongoose.model("user_model", userModel);
    return user;
  } catch (error) {
    console.log("Error found in Student model", error);
  }
};

export default use;

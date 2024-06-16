import express, { response } from "express";
const router = express.Router();

import initUserModel from "../../model/userModel.js";
import RESPONSE from "../../config/global.js";
import validator from "validator";
import constants from "../../config/constants.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

router.use("/", async (req, res) => {
  try {
    const userModel = await initUserModel();
    const { email, password } = req.body;
    let response;

    if (!email || email == "") {
      response = RESPONSE.MANDATORY_PARAMS;
      return res.json({
        code: response.code,
        msg: "email " + response.msg,
      });
    }

    if (!password || password == "") {
      response = RESPONSE.MANDATORY_PARAMS;
      return res.json({
        code: response.code,
        msg: "password " + response.msg,
      });
    }

    const isValidEmail = validator.isEmail(email);
    if (isValidEmail == false) {
      response = RESPONSE.INVALID_DATA;
      return res.json({
        code: response.code,
        msg: "email " + response.msg,
      });
    }

    const data = await userModel.findOne({
      is_active: constants.STATE.ACTIVE,
      email: email,
    });

    if (data && (await bcrypt.compare(password, data.password))) {
      const token = jwt.sign(
        {
          id: data._id,
          name: data.user_name,
        },
        process.env.TOKENKEY
      );
      console.log(token);

      response = RESPONSE.SUCCESS;
      return res.json({
        code: response.code,
        msg: response.msg,
        data: token,
      });
    } else {
      response = RESPONSE.INVALID_DATA;
      return res.json({
        code: response.code,
        msg: "login credentials" + response.msg,
      });
    }
  } catch (error) {
    console.log(error);
    response = RESPONSE.UNKNOWN_ERROR;
    return res.json({
      code: response.code,
      msg: "Login page " + response.msg,
    });
  }
});

export default router;

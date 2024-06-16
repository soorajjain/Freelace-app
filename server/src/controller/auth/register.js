import express, { response } from "express";
const router = express.Router();

import initUserModel from "../../model/userModel.js";
import RESPONSE from "../../config/global.js";
import validator from "validator";

router.use("/", async (req, res) => {
  try {
    const usermodel = await initUserModel();
    const { user_name, email, phone, password } = req.body;
    console.log(user_name, email, phone, password);
    let response;

    if (!user_name || user_name == "") {
      response = RESPONSE.MANDATORY_PARAMS;
      return res.json({
        code: response.code,
        msg: "user name " + response.msg,
      });
    }
    if (!email || email == "") {
      response = RESPONSE.MANDATORY_PARAMS;
      return res.json({
        code: response.code,
        msg: "email " + response.msg,
      });
    }
    if (!phone || phone == "") {
      response = RESPONSE.MANDATORY_PARAMS;
      return res.json({
        code: response.code,
        msg: "phone " + response.msg,
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

    const isValidPhone =
      validator.isMobilePhone(phone) && phone.toString().length == 10;
    if (isValidPhone == false) {
      response = RESPONSE.INVALID_DATA;
      return res.json({
        code: response.code,
        msg: "phone " + response.msg,
      });
    }

    await usermodel.create({
      user_name: user_name,
      email: email,
      phone: phone,
      password: password,
    });

    res.json((response = RESPONSE.SUCCESS));
  } catch (error) {
    console.log("register", error);
    return res.json({
      code: response.code,
      msg: "Register page" + response.msg,
    });
  }
});

export default router;

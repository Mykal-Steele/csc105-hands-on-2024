import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
  firstName: string;
  lastName: string;
};
const createUser = async (c: Context) => {
  try {
    const body = await c.req.json<createUserBody>();
    if (!body.firstName || !body.lastName)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    if (await userModel.isDuplicate(body.firstName, body.lastName)) {
      return c.json({
        success: false,
        data: null,
        msg: "firstName or lastName is duplicated",
      });
    }
    const newUser = await userModel.createUser(body.firstName, body.lastName);
    return c.json({
      success: true,
      data: newUser,
      msg: "Created new User!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const getAllUsers = async (c: Context) => {
  try {
    const users = await userModel.getAllUser();   
    
    return c.json({
      success: true,
      data: users,
      totalUsers: users.length
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Failed to retrieve users: ${e}`,
      },
      500
    );
  }
};

type updateUserBody = {
  firstName: string;
  lastName: string;
};

const updateUser = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json<updateUserBody>();
    
    if (!id || !body.firstName || !body.lastName) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    }

    const updatedUser = await userModel.updateUser(parseInt(id), body.firstName, body.lastName);
    
    return c.json({
      success: true,
      data: updatedUser,
      msg: "User updated successfully",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Failed to update user: ${e}`,
      },
      500
    );
  }
};

export { createUser, getAllUsers, updateUser };
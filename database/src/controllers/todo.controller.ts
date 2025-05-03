import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";

type createTodoBody = {
  title: string;
  userId: number;
};

const createTodo = async (c: Context) => {
  try {
    const body = await c.req.json<createTodoBody>();
    if (!body.title || !body.userId)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    const newTodo = await todoModel.createTodo(body.title, body.userId);
    return c.json({
      success: true,
      data: newTodo,
      msg: "Created new Todo!",
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

const getTodo = async (c: Context) => {
  try {
    const id = c.req.param("id");
    
    if (id !== undefined && id !== null) {
      const data = await todoModel.getTodo(parseInt(id));
      return c.json({
        success: true,
        data: data,
        msg: "Todo retrieved successfully"
      }, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
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
const deleteTodo = async (c: Context) => {
  try {
      const query = c.req.param("id");
      if (query !== undefined && query !== null) {
          const data = await todoModel.deleteTodo(parseInt(query));
          return c.json(data, 200);
      }
      return c.json(
          {
              success: false,
              data: null,
              msg: "Missing required fields",
          },
          400
      );
  }
  catch (e) {
      return c.json(
          {
              success: false,
              data: null,
              msg: `${e}`,
          },
          500
      );
  }
}

const updateTodoCompletion = async (c: Context) => {
  try {
    const id = c.req.param("id");
    
    if (!id) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing todo ID",
        },
        400
      );
    }

    const updatedTodo = await todoModel.updateTodoCompletion(parseInt(id), true);
    
    return c.json({
      success: true,
      data: updatedTodo,
      msg: "Todo marked as completed",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Failed to update todo: ${e}`,
      },
      500
    );
  }
};

type updateTodoTitleBody = {
  title: string;
};

const updateTodoTitle = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json<updateTodoTitleBody>();
    
    if (!id || !body.title) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    }

    const updatedTodo = await todoModel.updateTodoTitle(parseInt(id), body.title);
    
    return c.json({
      success: true,
      data: updatedTodo,
      msg: "Todo title updated",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Failed to update todo: ${e}`,
      },
      500
    );
  }
};

const getUserTodos = async (c: Context) => {
  try {
    const userId = c.req.param("userId");
    
    if (!userId) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing user ID",
        },
        400
      );
    }

    const todos = await todoModel.getUserTodos(parseInt(userId));
    
    return c.json({
      success: true,
      data: todos,
      msg: "User todos retrieved successfully",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Failed to retrieve todos: ${e}`,
      },
      500
    );
  }
};

export { createTodo, getTodo, deleteTodo, updateTodoCompletion, updateTodoTitle, getUserTodos };

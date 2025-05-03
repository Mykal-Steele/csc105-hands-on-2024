import { db } from "../index.ts";

const deleteTodo = async (id: number) => {
  const todo = await db.todo.delete({
      where: {
          id: id,
      },
  });
  return todo;
}

const updateTodoCompletion = async (id: number, completed: boolean) => {
  const todo = await db.todo.update({
    where: { id },
    data: { completed }
  });
  return todo;
};

const createTodo = async (title: string, userId: number) => {
  const todo = await db.todo.create({
    data: {
      title: title,
      userId: userId,
    },
  });
  return todo;
};

const getTodo = async (id: number) => {
  const todo = await db.todo.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return todo;
};

const updateTodo = async (id: number, title: string) => {
  const todo = await db.todo.update({
    where: {
      id: id,
    },
    data: {
      title: title,
    },
  });
  return todo;
};

const getAllTodos = async () => {
  const todos = await db.todo.findMany({
    include: {
      user: true,
    },
  });
  return todos;
};

const getTodosByUserId = async (userId: number) => {
  const todos = await db.todo.findMany({
    where: {
      userId: userId,
    },
    include: {
      user: true,
    },
  });
};

const updateTodoTitle = async (id: number, title: string) => {
  const todo = await db.todo.update({
    where: { id },
    data: { title }
  });
  return todo;
};

const getUserTodos = async (userId: number) => {
  const todos = await db.todo.findMany({
    where: { userId }
  });
  return todos;
};

export { createTodo, getTodo, deleteTodo, updateTodoCompletion, updateTodoTitle, getUserTodos };

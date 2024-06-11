import { v4 as uuid } from 'uuid';
import { persistStore } from '~/shared/lib';

const createTodoStore = () => {
  const todos = new Signal.State([]);

  const addTodo = ({ name }) => {
    todos.set([
      ...todos.get(),
      {
        id: uuid(),
        name: name,
        isCompleted: false,
      }
    ]);
  }

  const toggleTodo = ({ id }) => {
    todos.set(
      todos.get().map((item) => ({
        ...item,
        isCompleted: item.id === id ? !item.isCompleted : item.isCompleted,
      })),
    );
  };

  const removeTodo = ({ id }) => {
    todos.set(
      todos.get().filter((item) => item.id !== id),
    );
  };
  
  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo
  };
};

export const todoStore = createTodoStore();

persistStore({ key: '@todolist/store', store: todoStore.todos });

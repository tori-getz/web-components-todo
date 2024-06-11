import { createComponent } from '~/shared/lib';
import { effect } from '~/shared/lib';
import { TodoItem, todoStore } from '~/entities/todo-item';
import { DeleteTodo } from '~/features/delete-todo/ui/DeleteTodo';

export const TodoList = createComponent({
  html: `
    <style>
      @import './src/widgets/todo-list/ui/TodoList.css';
    </style>
    <div class='list'>
    </div
  `,
  name: 'todo-list',
  connectedCallback({ self }) {
    const updateList = () => {
      const list = self.shadowRoot.querySelector('.list');
      list.innerHTML = '';

      for (const item of todoStore.todos.get()) {
        const todo = document.createElement(TodoItem.componentName);
        todo.setAttribute('data-id', item.id);
        todo.setAttribute('data-name', item.name);
        todo.setAttribute('data-completed', item.isCompleted);

        const deleteTodo = document.createElement(DeleteTodo.componentName);
        deleteTodo.setAttribute('data-id', item.id);
        deleteTodo.setAttribute('slot', 'children');

        todo.appendChild(deleteTodo);
        list.appendChild(todo);
      }
    };

    effect(() => {
      updateList();
    });
  }
});

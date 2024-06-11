import { createComponent } from '~/shared/lib';
import { todoStore } from '~/entities/todo-item';

export const DeleteTodo = createComponent({
  html: `
    <style>
      @import './src/features/delete-todo/ui/DeleteTodo.css';
    </style>
    <button class='delete'>
      Delete
    </button>
  `,
  name: 'delete-todo',
  connectedCallback({ self }) {
    const idAttr = self.getAttribute('data-id');

    self.shadowRoot.querySelector('.delete').addEventListener('click', () => {
      todoStore.removeTodo({ id: idAttr });
    });
  },
});

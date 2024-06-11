import { todoStore } from "~/entities/todo-item";
import { createComponent } from "~/shared/lib/createComponent";

export const CreateTodo = createComponent({
  html: `
    <style>
      @import './src/features/create-todo/ui/CreateTodo.css';
    </style>
    <input
      placeholder='Enter todo text'
      class='input'
    />
  `,
  name: 'create-todo',
  construct({ self }) {
    self.$input = self.shadowRoot.querySelector('.input');
  },
  connectedCallback({ self }) {
    window.addEventListener('keydown', (ev) => {
      ev.stopPropagation();
      if (ev.key !== 'Enter') return;

      const inputValue = self.$input.value;
      
      if (inputValue) {
        todoStore.addTodo({ name: inputValue });
        self.$input.value = '';
      }
    });
  }
});

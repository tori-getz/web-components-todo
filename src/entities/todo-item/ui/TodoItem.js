import { createComponent } from '~/shared/lib';
import { todoStore } from '../model';

export const TodoItem = createComponent({
  html: `
    <style>
      @import './src/entities/todo-item/ui/TodoItem.css';
    </style>
    <div class='todo'>
      <input type='checkbox' id='completed' />
      <p id='name'>title</p>
      <slot name='children'></slot>
    </div>
  `,
  name: 'todo-item',
  connectedCallback({ self }) {
    const idAttr = self.getAttribute('data-id');
    const nameAttr = self.getAttribute('data-name');
    const isCompletedAttr = self.getAttribute('data-completed') === 'true';

    self.shadowRoot.querySelector('#name').innerHTML = nameAttr;
    self.shadowRoot.querySelector('#completed').checked = isCompletedAttr;

    if (isCompletedAttr) {
      self.shadowRoot.querySelector('#name').classList.add('todo__completed');
    }

    self.shadowRoot.querySelector('#completed').addEventListener('click', (ev) => {
      ev.stopPropagation();
      todoStore.toggleTodo({ id: idAttr });
    });
  }
});

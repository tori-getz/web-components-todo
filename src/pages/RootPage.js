import { createComponent } from "~/shared/lib";
import { CreateTodo } from "~/features/create-todo";
import { TodoList } from '~/widgets/todo-list';

export const RootPage = createComponent({
  html: `
    <style>
      @import './src/pages/RootPage.css';
    </style>
    <main class='page'>
      ${CreateTodo.render()}
      ${TodoList.render()}
    </main>
  `,
  name: 'root-page',
});

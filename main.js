import '~/app';
import { todoStore } from '~/entities/todo-item';
import { effect } from '~/shared/lib';
import { RootPage } from '~/pages/RootPage';

effect(() => {
  console.log(todoStore.todos.get());
})

document.querySelector('#root').innerHTML = RootPage.render();

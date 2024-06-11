import { effect } from "./effect";

export const persistStore = ({ key, store }) => {
  const savedData = localStorage.getItem(key);

  if (savedData) {
    store.set(JSON.parse(savedData));
  }

  effect(() => {
    const data = store.get();
    localStorage.setItem(key, JSON.stringify(data));
  });
};

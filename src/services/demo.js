import fetch from '../common/utils/fetch';

export function getTodoList() {
  return fetch.get('https://jsonplaceholder.typicode.com/todos');
}

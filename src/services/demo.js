import fetch from '../common/utils/fetch';

export function getBodyParts() {
  return fetch.get('https://jsonplaceholder.typicode.com/todos');
}

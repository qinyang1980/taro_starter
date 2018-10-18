import * as MODELS from '../constants/models';
import * as API from '../services/demo';

export default {
  namespace: MODELS.MODEL_COUNTER,

  state: {
    count: 0,
    todos: []
  },

  effects: {
    async queryTodoList({}, { put }) {
      const ret = await API.getTodoList();
      put({
        type: 'getTodoList',
        payload: ret
      });
    }
  },

  reducers: {
    getTodoList({ payload }, state) {
      return {
        ...state,
        todos: payload
      };
    },
    add({}, state) {
      console.log('add-----');
      return {
        ...state,
        count: state.count + 1
      };
    },
    dec({}, state) {
      console.log('dec-----');
      return {
        ...state,
        count: state.count - 1
      };
    }
  }
};

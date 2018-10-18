import * as MODELS from '../constants/models';
import * as API from '../services/demo';

export default {
  namespace: MODELS.MODEL_COUNTER,

  state: {
    count: 0,
    bodyParts: []
  },

  effects: {
    async queryBodyParts({}, { put }) {
      const ret = await API.getBodyParts();
      put({
        type: 'getBodyParts',
        payload: ret
      });
    }
  },

  reducers: {
    getBodyParts({ payload }, state) {
      return {
        ...state,
        bodyParts: payload
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

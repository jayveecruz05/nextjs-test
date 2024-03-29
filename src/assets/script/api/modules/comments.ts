'use strict';

import api from '../index';

// console.log(api);

const getComments = async () => {
  api.main.cancelCurrentApiCall();
  return await api.main.get({ url: '/comments' });
};

const getComment = async (id: string) => {
  api.main.cancelCurrentApiCall();
  return await api.main.get({ url: `/comments/${id}` });
};

export { getComments, getComment };
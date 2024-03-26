import { Configuration } from './generated';

const BASE_URL = '/api';

export const configuration = new Configuration({
  basePath: BASE_URL,
  accessToken: () => localStorage.getItem('accessToken') ?? '',
});

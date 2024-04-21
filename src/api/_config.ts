import { Configuration } from './generated';

export const BASE_URL = '/api';

export const configuration = new Configuration({
  basePath: BASE_URL,
  accessToken: () => localStorage.getItem('accessToken') ?? '',
});

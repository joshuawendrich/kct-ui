import { LoginDto, UserControllerApi } from './generated';
import { configuration } from './_config';

const client = new UserControllerApi(configuration);

export const login = async (loginDto: LoginDto) =>
  await client.loginUser({ loginDto });

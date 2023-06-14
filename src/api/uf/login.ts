import { UserLogin } from '@/@types/login/UserLogin';

const API_URL = process.env.APP_API_URL || 'http://localhost:3333';

export function GET_UFS(token: string, database: string) {
  return {
    url: API_URL + '/uf',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        'database-name': database,
      },
    },
  };
}

import { UserLogin } from '@/@types/login/UserLogin';

const API_URL = process.env.APP_API_URL || 'http://localhost:3333';

export function GET_TOKEN(body: UserLogin, database: string) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'database-name': database,
      },
      body: JSON.stringify(body),
    },
  };
}

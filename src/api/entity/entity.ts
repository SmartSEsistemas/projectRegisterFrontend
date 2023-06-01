import { EntitYNames } from '@/@types/entity/Entity';

const API_URL = process.env.APP_API_URL || 'http://localhost:3333';

const POST = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export function GET_ENTITY_NAMES(database: string) {
  return {
    url: API_URL + '/entity',
    options: {
      // method: 'GET',
      headers: {
        'database-name': database,
      },
    },
  };
}

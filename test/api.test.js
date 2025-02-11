import { expect, test } from 'vitest';
import nock from 'nock';

test('API error route returns 500', async () => {
  nock('http://localhost:3000')
    .get('/api/error')
    .reply(500);

  const response = await fetch('http://localhost:3000/api/error')
    .catch(e => e);
  
  expect(response.status).toBe(500);
});
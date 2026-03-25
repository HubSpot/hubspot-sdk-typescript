// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource visitorIdentification', () => {
  // Mock server tests are disabled
  test.skip('generateToken: only required params', async () => {
    const responsePromise = client.conversations.visitorIdentification.generateToken({ email: 'email' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('generateToken: required and optional params', async () => {
    const response = await client.conversations.visitorIdentification.generateToken({
      email: 'email',
      firstName: 'firstName',
      lastName: 'lastName',
    });
  });
});

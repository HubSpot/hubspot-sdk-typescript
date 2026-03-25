// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource urlMappings', () => {
  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.urlMappings.create({
      id: 'id',
      created: '2019-12-27T18:11:19.117Z',
      destination: 'destination',
      isMatchFullUrl: true,
      isMatchQueryString: true,
      isOnlyAfterNotFound: true,
      isPattern: true,
      isProtocolAgnostic: true,
      isTrailingSlashOptional: true,
      precedence: 0,
      redirectStyle: 0,
      routePrefix: 'routePrefix',
      updated: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.cms.urlMappings.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

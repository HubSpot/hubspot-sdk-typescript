// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource urlRedirects', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cms.urlRedirects.create({
      destination: 'destination',
      redirectStyle: 0,
      routePrefix: 'routePrefix',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.cms.urlRedirects.create({
      destination: 'destination',
      redirectStyle: 0,
      routePrefix: 'routePrefix',
      isMatchFullUrl: true,
      isMatchQueryString: true,
      isOnlyAfterNotFound: true,
      isPattern: true,
      isProtocolAgnostic: true,
      isTrailingSlashOptional: true,
      precedence: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.cms.urlRedirects.update('urlRedirectId', {
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
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.cms.urlRedirects.update('urlRedirectId', {
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
  test.skip('list', async () => {
    const responsePromise = client.cms.urlRedirects.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.urlRedirects.list(
        {
          after: 'after',
          archived: true,
          createdAfter: '2019-12-27T18:11:19.117Z',
          createdAt: '2019-12-27T18:11:19.117Z',
          createdBefore: '2019-12-27T18:11:19.117Z',
          limit: 0,
          sort: ['string'],
          updatedAfter: '2019-12-27T18:11:19.117Z',
          updatedAt: '2019-12-27T18:11:19.117Z',
          updatedBefore: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HubSpot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.cms.urlRedirects.delete('urlRedirectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.cms.urlRedirects.get('urlRedirectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

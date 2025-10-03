// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HubSpot from 'hubspot-sdk';

const client = new HubSpot({
  accessToken: 'pat-123123',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource domains', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.cms.domains.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.domains.list(
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

  // Prism tests are disabled
  test.skip('read', async () => {
    const responsePromise = client.cms.domains.read('domainId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

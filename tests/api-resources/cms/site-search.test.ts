// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource siteSearch', () => {
  // Mock server tests are disabled
  test.skip('getIndexedData', async () => {
    const responsePromise = client.cms.siteSearch.getIndexedData('contentId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getIndexedData: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.siteSearch.getIndexedData(
        'contentId',
        { type: 'type' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('search', async () => {
    const responsePromise = client.cms.siteSearch.search();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cms.siteSearch.search(
        {
          analytics: true,
          autocomplete: true,
          boostLimit: 0,
          boostRecent: 'boostRecent',
          domain: ['string'],
          groupId: [0],
          hubdbQuery: 'hubdbQuery',
          language: 'aa',
          length: 'LONG',
          limit: 0,
          matchPrefix: true,
          offset: 0,
          pathPrefix: ['string'],
          popularityBoost: 0,
          property: ['string'],
          q: 'q',
          tableId: 0,
          type: ['string'],
          types: ['LANDING_PAGE'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });
});

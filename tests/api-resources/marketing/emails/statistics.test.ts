// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource statistics', () => {
  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.marketing.emails.statistics.get();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.emails.statistics.get(
        {
          emailIds: [0],
          endTimestamp: 'endTimestamp',
          property: 'property',
          startTimestamp: 'startTimestamp',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getHistogram', async () => {
    const responsePromise = client.marketing.emails.statistics.getHistogram();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getHistogram: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.emails.statistics.getHistogram(
        { emailIds: [0], endTimestamp: 'endTimestamp', interval: 'YEAR', startTimestamp: 'startTimestamp' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });
});

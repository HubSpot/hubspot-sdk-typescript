// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hubspot from 'hubspot-sdk';

const client = new Hubspot({
  accessToken: 'pat-na1-xxxxxxxx-xxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metrics', () => {
  // Mock server tests are disabled
  test.skip('getAttributionMetrics', async () => {
    const responsePromise = client.marketing.campaigns.metrics.getAttributionMetrics('campaignGuid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getAttributionMetrics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.campaigns.metrics.getAttributionMetrics(
        'campaignGuid',
        { endDate: 'endDate', startDate: 'startDate' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getRevenueAttribution', async () => {
    const responsePromise = client.marketing.campaigns.metrics.getRevenueAttribution('campaignGuid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getRevenueAttribution: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.marketing.campaigns.metrics.getRevenueAttribution(
        'campaignGuid',
        {
          attributionModel: 'attributionModel',
          endDate: 'endDate',
          startDate: 'startDate',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hubspot.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listContactIDsByType: only required params', async () => {
    const responsePromise = client.marketing.campaigns.metrics.listContactIDsByType('contactType', {
      campaignGuid: 'campaignGuid',
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
  test.skip('listContactIDsByType: required and optional params', async () => {
    const response = await client.marketing.campaigns.metrics.listContactIDsByType('contactType', {
      campaignGuid: 'campaignGuid',
      after: 'after',
      endDate: 'endDate',
      limit: 0,
      startDate: 'startDate',
    });
  });
});

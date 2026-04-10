// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Campaigns } from '@hubspot/sdk/resources/marketing/campaigns/campaigns';
import { BaseMetrics } from '@hubspot/sdk/resources/marketing/campaigns/metrics';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseMetrics],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Campaigns],
});

const runTests = (client: PartialHubSpot<{ marketing: { campaigns: { metrics: BaseMetrics } } }>) => {
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
    ).rejects.toThrow(HubSpot.NotFoundError);
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
    ).rejects.toThrow(HubSpot.NotFoundError);
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
};
describe('resource metrics', () => runTests(client));
describe('resource metrics (tree shakable, base)', () => runTests(partialClient));
describe('resource metrics (tree shakable, subresource)', () => runTests(parentPartialClient));

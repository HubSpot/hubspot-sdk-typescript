// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAssets } from 'hubspot-sdk/resources/marketing/campaigns/assets';
import { Campaigns } from 'hubspot-sdk/resources/marketing/campaigns/campaigns';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseAssets],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Campaigns],
});

const runTests = (client: PartialHubSpot<{ marketing: { campaigns: { assets: BaseAssets } } }>) => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.marketing.campaigns.assets.update('assetId', {
      campaignGuid: 'campaignGuid',
      assetType: 'assetType',
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
    const response = await client.marketing.campaigns.assets.update('assetId', {
      campaignGuid: 'campaignGuid',
      assetType: 'assetType',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.marketing.campaigns.assets.list('assetType', {
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
  test.skip('list: required and optional params', async () => {
    const response = await client.marketing.campaigns.assets.list('assetType', {
      campaignGuid: 'campaignGuid',
      after: 'after',
      endDate: 'endDate',
      limit: 'limit',
      startDate: 'startDate',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.marketing.campaigns.assets.delete('assetId', {
      campaignGuid: 'campaignGuid',
      assetType: 'assetType',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.marketing.campaigns.assets.delete('assetId', {
      campaignGuid: 'campaignGuid',
      assetType: 'assetType',
    });
  });
};
describe('resource assets', () => runTests(client));
describe('resource assets (tree shakable, base)', () => runTests(partialClient));
describe('resource assets (tree shakable, subresource)', () => runTests(parentPartialClient));

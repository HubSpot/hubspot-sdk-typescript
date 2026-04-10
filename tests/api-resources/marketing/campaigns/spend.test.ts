// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Campaigns } from 'hubspot-sdk/resources/marketing/campaigns/campaigns';
import { BaseSpend } from 'hubspot-sdk/resources/marketing/campaigns/spend';

import HubSpot from 'hubspot-sdk';
import { createClient, type PartialHubSpot } from 'hubspot-sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSpend],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Campaigns],
});

const runTests = (client: PartialHubSpot<{ marketing: { campaigns: { spend: BaseSpend } } }>) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.marketing.campaigns.spend.create('campaignGuid', {
      amount: 0,
      name: 'name',
      order: 0,
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
    const response = await client.marketing.campaigns.spend.create('campaignGuid', {
      amount: 0,
      name: 'name',
      order: 0,
      description: 'description',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.marketing.campaigns.spend.update(0, {
      campaignGuid: 'campaignGuid',
      amount: 0,
      name: 'name',
      order: 0,
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
    const response = await client.marketing.campaigns.spend.update(0, {
      campaignGuid: 'campaignGuid',
      amount: 0,
      name: 'name',
      order: 0,
      description: 'description',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.marketing.campaigns.spend.delete(0, { campaignGuid: 'campaignGuid' });
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
    const response = await client.marketing.campaigns.spend.delete(0, { campaignGuid: 'campaignGuid' });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.marketing.campaigns.spend.get(0, { campaignGuid: 'campaignGuid' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.marketing.campaigns.spend.get(0, { campaignGuid: 'campaignGuid' });
  });
};
describe('resource spend', () => runTests(client));
describe('resource spend (tree shakable, base)', () => runTests(partialClient));
describe('resource spend (tree shakable, subresource)', () => runTests(parentPartialClient));

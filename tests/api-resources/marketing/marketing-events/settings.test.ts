// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { MarketingEvents } from '@hubspot/sdk/resources/marketing/marketing-events/marketing-events';
import { BaseSettings } from '@hubspot/sdk/resources/marketing/marketing-events/settings';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSettings],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [MarketingEvents],
});

const runTests = (client: PartialHubSpot<{ marketing: { marketingEvents: { settings: BaseSettings } } }>) => {
  // Mock server tests are disabled
  test.skip('createOrUpdate: only required params', async () => {
    const responsePromise = client.marketing.marketingEvents.settings.createOrUpdate(0, {
      eventDetailsUrl: 'eventDetailsUrl',
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
  test.skip('createOrUpdate: required and optional params', async () => {
    const response = await client.marketing.marketingEvents.settings.createOrUpdate(0, {
      eventDetailsUrl: 'eventDetailsUrl',
    });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.marketing.marketingEvents.settings.get(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource settings', () => runTests(client));
describe('resource settings (tree shakable, base)', () => runTests(partialClient));
describe('resource settings (tree shakable, subresource)', () => runTests(parentPartialClient));

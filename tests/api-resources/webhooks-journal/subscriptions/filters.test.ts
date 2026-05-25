// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseFilters } from '@hubspot/sdk/resources/webhooks-journal/subscriptions/filters';
import { Subscriptions } from '@hubspot/sdk/resources/webhooks-journal/subscriptions/subscriptions';

import HubSpot from '@hubspot/sdk';
import { createClient, type PartialHubSpot } from '@hubspot/sdk/tree-shakable';

const client = new HubSpot({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseFilters],
});

const parentPartialClient = createClient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Subscriptions],
});

const runTests = (
  client: PartialHubSpot<{ webhooksJournal: { subscriptions: { filters: BaseFilters } } }>,
) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.webhooksJournal.subscriptions.filters.create({
      filter: {
        conditions: [
          {
            filterType: 'CRM_OBJECT_PROPERTY',
            operator: 'CONTAINS',
            property: 'property',
          },
        ],
      },
      subscriptionId: 0,
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
    const response = await client.webhooksJournal.subscriptions.filters.create({
      filter: {
        conditions: [
          {
            filterType: 'CRM_OBJECT_PROPERTY',
            operator: 'CONTAINS',
            property: 'property',
            value: 'value',
            values: ['string'],
          },
        ],
      },
      subscriptionId: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.webhooksJournal.subscriptions.filters.list(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.webhooksJournal.subscriptions.filters.delete(0);
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
    const responsePromise = client.webhooksJournal.subscriptions.filters.get(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource filters', () => runTests(client));
describe('resource filters (tree shakable, base)', () => runTests(partialClient));
describe('resource filters (tree shakable, subresource)', () => runTests(parentPartialClient));
